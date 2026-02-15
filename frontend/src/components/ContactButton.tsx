import { PulsatingButton } from "@/components/ui/PulsatingButton";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton = ({ className }: ContactButtonProps) => {
  const formattedPhone = COMPANY.phone.replace(/\s/g, "");

  return (
    <PulsatingButton
      pulseColor="rgba(132, 204, 22, 0.4)"
      duration="2s"
      // Łączymy domyślne style z tymi, które prześlemy z Navbaru
      className={cn("bg-accent hover:bg-accent-dark text-white rounded-full transition-all", className)}
      onClick={() => (window.location.href = `tel:${formattedPhone}`)}
    >
      <div className="flex items-center gap-2">
       <img src="/Telefon_v2.svg" className="h-4 w-4 brightness-0 invert" alt="" />
       {/* Tutaj podmieniamy zmienną na Twój tekst */}
       <span>Zadzwoń</span>
</div>
    </PulsatingButton>
  );
};