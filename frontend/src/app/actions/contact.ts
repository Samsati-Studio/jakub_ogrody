"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";
import type { ContactFormResponse } from "@/types/contact";
import { COMPANY } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  formData: FormData
): Promise<ContactFormResponse> {
  const raw = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    location: formData.get("location"),
    propertySize: formData.get("propertySize"),
    serviceType: formData.get("serviceType"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const errors: Record<string, string[]> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as string;
      if (!errors[field]) errors[field] = [];
      errors[field].push(issue.message);
    }
    return {
      success: false,
      message: "Popraw błędy w formularzu.",
      errors,
    };
  }

  const data = result.data;

  try {
    // Send notification to owner
    await resend.emails.send({
      from: `${COMPANY.shortName} <kontakt@ogrodajakuba.pl>`,
      to: COMPANY.email,
      subject: `Nowe zapytanie od ${data.name}`,
      html: `
        <h2>Nowe zapytanie ze strony</h2>
        <p><strong>Imię:</strong> ${data.name}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
        ${data.location ? `<p><strong>Lokalizacja:</strong> ${data.location}</p>` : ""}
        ${data.propertySize ? `<p><strong>Wielkość działki:</strong> ${data.propertySize}</p>` : ""}
        ${data.serviceType ? `<p><strong>Rodzaj usługi:</strong> ${data.serviceType}</p>` : ""}
        <p><strong>Wiadomość:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Send autoresponder if email provided
    if (data.email) {
      await resend.emails.send({
        from: `${COMPANY.shortName} <kontakt@ogrodajakuba.pl>`,
        to: data.email,
        subject: `Dziękujemy za kontakt — ${COMPANY.shortName}`,
        html: `
          <h2>Dziękujemy za wiadomość, ${data.name}!</h2>
          <p>Otrzymaliśmy Twoje zapytanie i skontaktujemy się z Tobą najszybciej jak to możliwe — najczęściej w ciągu 24 godzin.</p>
          <p>W pilnych sprawach możesz również zadzwonić pod numer: <strong>${COMPANY.phone}</strong></p>
          <br>
          <p>Pozdrawiamy,</p>
          <p><strong>${COMPANY.owner}</strong><br>${COMPANY.name}</p>
        `,
      });
    }

    return {
      success: true,
      message: "Dziękujemy! Twoja wiadomość została wysłana.",
    };
  } catch {
    return {
      success: false,
      message: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.",
    };
  }
}
