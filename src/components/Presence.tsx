import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Store, Building2, TrendingUp } from "lucide-react";

const Presence = () => {
  const stats = [
    { icon: Store, label: "Lojas Físicas", value: "4+", description: "Unidades estratégicas" },
    { icon: Building2, label: "Quiosques", value: "2", description: "Shoppings de alto fluxo" },
    { icon: MapPin, label: "Distribuição", value: "100%", description: "Cobertura no Amazonas" },
    { icon: TrendingUp, label: "Crescimento", value: "Contínuo", description: "Expansão nacional" },
  ];

  return (
    <section id="presenca" className="py-20 gradient-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Presença e Capilaridade
            </h2>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
              Liderança consolidada no Amazonas com alcance e capilaridade incomparáveis
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="bg-background/10 backdrop-blur-sm border-secondary-foreground/20 shadow-lg hover:shadow-xl transition-smooth hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-background/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-accent">{stat.value}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-secondary-foreground/70">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-background/10 backdrop-blur-sm border-secondary-foreground/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Forte Presença Regional</h3>
              <p className="text-secondary-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Com operações em Manaus e distribuição para todo o estado do Amazonas, o Grupo VAMUS consolidou-se 
                como referência no mercado de saúde e bem-estar da região Norte. Nossa estrutura diversificada permite 
                atender desde o consumidor final até grandes redes varejistas, com a qualidade e eficiência que nos tornaram 
                líderes de mercado.
              </p>
              <div className="mt-6 pt-6 border-t border-secondary-foreground/20">
                <p className="text-lg font-semibold text-accent">
                  Próximo Passo: Expansão Nacional
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Presence;
