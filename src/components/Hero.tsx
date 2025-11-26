import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Countdown from "./Countdown";
import like500Banner from "@/assets/like-500-banner.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[hsl(var(--ocean-deep))] to-[hsl(var(--primary))]">
      {/* Banner */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
          <img
            src={like500Banner}
            alt="Promoção Like 500 - Cruzeiro dos Diamantes 2026"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />

          <div className="bg-card/10 backdrop-blur-md rounded-2xl p-8 border border-accent/20 max-w-3xl mx-auto">
            <p className="text-primary-foreground text-lg mb-6 text-center">
              A promoção encerra em:
            </p>
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
