import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Countdown from "./Countdown";
import cruiseHero from "@/assets/cruise-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={cruiseHero}
          alt="Luxury cruise ship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Promoção Exclusiva</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Like 500
            <span className="block text-accent mt-2">Cruzeiro dos Diamantes</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Concorra a uma cabine no exclusivo Cruzeiro dos Diamantes 2026
          </p>

          <div className="bg-card/10 backdrop-blur-md rounded-2xl p-8 border border-accent/20 max-w-3xl mx-auto">
            <p className="text-primary-foreground text-lg mb-6">
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
