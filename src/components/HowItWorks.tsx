import { ShoppingCart, Ticket, Ship } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Compre R$ 500",
    description: "A cada R$ 500,00 em compras pelo seu consultor no EV, você recebe um cupom.",
  },
  {
    icon: Ticket,
    title: "Participe do Sorteio",
    description: "O sorteio será realizado no dia 01/03/2026 com todos os cupons válidos.",
  },
  {
    icon: Ship,
    title: "Embarque no Cruzeiro",
    description: "O vencedor ganha um voucher para o Cruzeiro dos Diamantes 2026!",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simples e transparente: compre, participe e concorra!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-[#0066CC]/50 transition-all h-full shadow-lg hover:shadow-xl">
                  <div className="absolute -top-4 left-8 bg-[#0066CC] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    {index + 1}
                  </div>
                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 rounded-xl bg-[#0066CC]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" style={{ color: '#0066CC' }} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-ocean-light/10 border border-[#0066CC]/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            Período da Promoção
          </h3>
          <p className="text-center text-lg text-muted-foreground">
            <span className="font-semibold" style={{ color: '#0066CC' }}>01/11/2025</span> até{" "}
            <span className="font-semibold" style={{ color: '#0066CC' }}>28/02/2026</span>
          </p>
          <p className="text-center text-muted-foreground mt-2">
            Sorteio: <span className="font-semibold" style={{ color: '#0066CC' }}>01/03/2026</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
