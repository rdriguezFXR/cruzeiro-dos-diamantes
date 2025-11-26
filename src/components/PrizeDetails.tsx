import { Award, Ship, MapPin, Calendar, User, Shield } from "lucide-react";
import diamondIcon from "@/assets/diamond-icon.jpg";

const features = [
  {
    icon: Ship,
    title: "Cruzeiro Completo",
    description: "Viagem no Cruzeiro dos Diamantes 2026 com todas as refeições incluídas",
  },
  {
    icon: User,
    title: "Cabine Dupla",
    description: "Cabine compartilhada com outro participante do grupo Like Brasil",
  },
  {
    icon: MapPin,
    title: "Porto de Santos",
    description: "Embarque e desembarque no Porto de Santos - SP",
  },
  {
    icon: Calendar,
    title: "Data Exclusiva",
    description: "Data do cruzeiro será definida pela Like Brasil em 2026",
  },
];

const PrizeDetails = () => {
  return (
    <section id="premio" className="py-20 bg-gradient-to-b from-ocean-deep to-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <img
              src={diamondIcon}
              alt="Diamond"
              className="w-20 h-20 rounded-full shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Seu Prêmio dos Sonhos
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Um voucher exclusivo para viver a experiência do Cruzeiro dos Diamantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-accent/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                O que está incluído
              </h3>
            </div>
          </div>
          <ul className="space-y-3 text-primary-foreground/80">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span>Todas as refeições a bordo do navio</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span>Taxas de serviço inclusas</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span>Taxa de embarque incluída</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span>Voucher individual e intransferível</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 max-w-4xl mx-auto bg-accent/10 backdrop-blur-sm rounded-xl p-6 border border-accent/30">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <p className="text-sm text-primary-foreground/70">
              <span className="font-semibold text-primary-foreground">Importante:</span> Despesas
              de deslocamento até o Porto de Santos, hospedagem antes/depois do embarque, alimentação
              fora do navio e retorno são de responsabilidade do contemplado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizeDetails;
