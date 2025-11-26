import { FileText, AlertCircle } from "lucide-react";

const Terms = () => {
  return (
    <section id="regulamento" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0066CC]/10 px-4 py-2 rounded-full mb-4">
              <FileText className="w-4 h-4" style={{ color: '#0066CC' }} />
              <span className="text-sm font-medium" style={{ color: '#0066CC' }}>Transparência Total</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Regulamento
            </h2>
            <p className="text-xl text-muted-foreground">
              Leia atentamente as condições da promoção
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border">
            <div className="space-y-6 text-foreground">
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0066CC' }}>Período da Promoção</h3>
                <p className="leading-relaxed text-muted-foreground">
                  A promoção será válida de <span className="font-semibold text-foreground">01/11/2025 até 28/02/2026</span>.
                  O sorteio será realizado no dia <span className="font-semibold text-foreground">01/03/2026</span>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0066CC' }}>Como Participar</h3>
                <p className="leading-relaxed text-muted-foreground">
                  A cada R$ 500,00 reais em compra pelo consultor no seu EV, você receberá um cupom
                  para participar do sorteio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0066CC' }}>Sobre o Prêmio</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold" style={{ color: '#0066CC' }}>•</span>
                    <span>
                      O prêmio contemplará um voucher para participar do Cruzeiro dos Diamantes em
                      2026 na data a ser estipulada pela Like Brasil.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold" style={{ color: '#0066CC' }}>•</span>
                    <span>
                      O voucher será <span className="font-semibold text-foreground">individual e intransferível</span> com
                      direito a viagem de cruzeiro do contemplado em cabine dupla (dividindo a cabine)
                      com outro participante do grupo.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold" style={{ color: '#0066CC' }}>•</span>
                    <span>
                      Incluindo todas as refeições a bordo, taxas de serviço e taxa de embarque.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold" style={{ color: '#0066CC' }}>•</span>
                    <span>
                      O embarque e o desembarque ocorrerão no <span className="font-semibold text-foreground">Porto de Santos</span>.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold" style={{ color: '#0066CC' }}>•</span>
                    <span>
                      <span className="font-semibold text-foreground">Prêmio é intransferível.</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-6 bg-[#FFD700]/10 rounded-xl border-2 border-[#FFD700]/30">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#0066CC' }} />
                  <div>
                    <h4 className="font-bold text-foreground mb-2" style={{ color: '#0066CC' }}>Condição para Validação do Prêmio</h4>
                    <p className="text-sm text-foreground leading-relaxed font-medium">
                      Durante todo período da campanha e até a entrega do prêmio, o consultor deve estar ativo e desenvolvendo o negócio. Caso essa regra não seja cumprida o prêmio não será validado.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0066CC' }}>Responsabilidades do Contemplado</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold" style={{ color: '#0066CC' }}>•</span>
                    <span>
                      Toda documentação necessária para o embarque será responsabilidade do contemplado
                      fornecer as informações para a Empresa e apresentar no dia da viagem.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold" style={{ color: '#0066CC' }}>•</span>
                    <span>
                      As despesas referente a chegar no porto, eventualmente alguma hospedagem,
                      alimentação fora do navio e o retorno após a viagem, serão por conta do contemplado.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold" style={{ color: '#0066CC' }}>•</span>
                    <span>
                      O período de confirmação para participar da viagem será divulgado juntamente com
                      o nome do contemplado no dia do sorteio, não devendo ser superior a 45 dias da
                      data do embarque.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-[#0066CC]/10 rounded-xl border border-[#0066CC]/30">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#0066CC' }} />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Importante</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ao participar desta promoção, você concorda com todos os termos e condições
                      estabelecidos. A Like Brasil reserva-se o direito de alterar as regras
                      mediante comunicação prévia aos participantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
