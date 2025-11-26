import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import Countdown from "./Countdown";
import like500Banner from "@/assets/like-500-banner.png";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        // Se o autoplay com som falhar, tenta sem som primeiro
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().then(() => {
            // Depois de iniciar, tenta ativar o som
            if (videoRef.current) {
              videoRef.current.muted = false;
            }
          });
        }
      });
    }
  }, []);

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

      {/* Video e Conteúdo Section */}
      <div 
        className="container mx-auto px-4 pt-4 pb-4 relative"
        style={{
          backgroundImage: 'url(/LIKE 500 (1).png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-center relative z-10">
          {/* Video Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              loop
              playsInline
              controls
              className="max-w-xs w-full h-auto rounded-lg shadow-lg"
            >
              <source src="/videolike.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Conteúdo (Cronômetro e Botões) */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-8 animate-fade-in md:justify-center">
            <div className="bg-card/10 backdrop-blur-md rounded-2xl p-4 md:p-8 border border-[#0066CC]/20 w-full">
              <p className="text-primary-foreground text-base md:text-lg mb-4 md:mb-6 text-center">
                A promoção encerra em:
              </p>
              <Countdown />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full">
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
      </div>
    </section>
  );
};

export default Hero;
