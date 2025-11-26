import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Countdown from "./Countdown";
import like500Banner from "@/assets/like-500-banner.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col bg-gradient-to-b from-[hsl(var(--ocean-deep))] to-[hsl(var(--primary))]">
      {/* Banner Fullscreen */}
      <div className="w-full">
        {/* Banner Desktop */}
        <img
          src={like500Banner}
          alt="Promoção Like 500 - Cruzeiro dos Diamantes 2026"
          className="w-full h-auto hidden md:block"
        />
        {/* Banner Mobile */}
        <img
          src="/like500mobile4.png"
          alt="Promoção Like 500 - Cruzeiro dos Diamantes 2026"
          className="w-full h-auto block md:hidden"
        />
      </div>

      {/* Conteúdo abaixo do banner */}
      <div className="relative flex flex-col items-center justify-center container mx-auto px-4 pt-4 pb-4">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in text-center">
          <div className="bg-card/10 backdrop-blur-md rounded-2xl p-4 md:p-8 border border-[#0066CC]/20">
            <p className="text-primary-foreground text-base md:text-lg mb-4 md:mb-6 text-center">
              A promoção encerra em:
            </p>
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:opacity-90"
              style={{ backgroundColor: '#FFD700', color: '#0066CC' }}
              onClick={() => scrollToSection("como-funciona")}
            >
              Como Participar
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 text-lg px-8 py-6"
              onClick={() => scrollToSection("premio")}
            >
              Ver Prêmio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
