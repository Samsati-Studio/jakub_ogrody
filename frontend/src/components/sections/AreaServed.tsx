import Section from "@/components/ui/Section";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { COMPANY } from "@/lib/constants";

// Definicja prostych ikon SVG, aby nie importować zewnętrznych bibliotek
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const NavigationIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

export default function AreaServed() {
  return (
    <Section id="obszar" className="bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lewa strona: Tekst i informacja o zasięgu */}
          <AnimateOnScroll>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                <NavigationIcon className="w-3 h-3" />
                Dostępność usług
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                Obszar działania
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Nasza baza mieści się w <span className="font-bold text-slate-900">Rawiczu i Lesznie</span>, ale z pasją dbamy o ogrody w całym regionie. 
                Realizujemy zlecenia w promieniu <span className="text-accent font-bold">40 km</span> od naszej bazy, zapewniając szybki dojazd i bezpłatną wycenę u klienta.
              </p>

              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="relative flex h-3 w-3 mt-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Sprawdź dostępność</h4>
                  <p className="text-sm text-slate-500">Mieszkasz nieco dalej? Zadzwoń, postaramy się znaleźć rozwiązanie dla Twojego ogrodu.</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Prawa strona: Wizualna lista miast */}
          <AnimateOnScroll delay={0.2}>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="flex flex-wrap gap-3">
                {COMPANY.areas.map((area) => {
                  const isMainBase = area.includes("Rawicz") || area.includes("Leszno");
                  
                  return (
                    <div
                      key={area}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                        isMainBase 
                        ? "border-accent bg-accent/5 text-slate-900 font-bold shadow-sm" 
                        : "border-slate-100 bg-slate-50 text-slate-600 font-medium"
                      }`}
                    >
                      <MapPinIcon className={`w-4 h-4 ${isMainBase ? "text-accent" : "text-slate-400"}`} />
                      <span className="text-sm">{area}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                <span>Dolny Śląsk</span>
                <span className="text-accent">•</span>
                <span>Wielkopolska</span>
              </div>
            </div>
          </AnimateOnScroll>
          
        </div>
      </div>
    </Section>
  );
}