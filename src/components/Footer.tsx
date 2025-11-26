import { Anchor } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-2">
            <Anchor className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold">Like 500</span>
          </div>
          
          <p className="text-primary-foreground/70 max-w-md">
            Promoção Cruzeiro dos Diamantes 2026
          </p>
          
          <div className="pt-6 border-t border-primary-foreground/20 w-full max-w-4xl">
            <p className="text-sm text-primary-foreground/60">
              © 2025 Like Brasil. Todos os direitos reservados.
            </p>
            <p className="text-xs text-primary-foreground/50 mt-2">
              Período da promoção: 01/11/2025 a 28/02/2026 | Sorteio: 01/03/2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
