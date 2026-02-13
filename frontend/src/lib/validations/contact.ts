import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Imię musi mieć co najmniej 2 znaki")
    .max(80, "Imię może mieć maksymalnie 80 znaków"),
  phone: z
    .string()
    .regex(
      /^(\+48\s?)?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/,
      "Podaj prawidłowy numer telefonu (np. 123 456 789)"
    ),
  email: z
    .string()
    .email("Podaj prawidłowy adres email")
    .optional()
    .or(z.literal("")),
  location: z.string().max(100).optional(),
  propertySize: z.string().max(50).optional(),
  serviceType: z.string().max(100).optional(),
  message: z
    .string()
    .min(10, "Wiadomość musi mieć co najmniej 10 znaków")
    .max(2000, "Wiadomość może mieć maksymalnie 2000 znaków"),
});

export type ContactFormInput = z.infer<typeof contactSchema>;
