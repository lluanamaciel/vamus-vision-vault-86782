import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Store, Building2, TrendingUp } from "lucide-react";

const Presence = () => {
  const stats = [
    { icon: Store, label: "Lojas Físicas", value: "9", description: "Pontos de venda estratégicos" },
    { icon: Building2, label: "Marcas", value: "6", description: "Portfolio diversificado" },
    { icon: MapPin, label: "Centro Distribuição", value: "1", description: "Logística integrada" },
    { icon: TrendingUp, label: "Crescimento", value: "Acelerado", description: "Expansão nacional" },
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
              <h3 className="text-2xl font-bold mb-4">Infraestrutura Sólida e Escalável</h3>
              <p className="text-secondary-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Nossa estrutura robusta e diversificada nos permite atender desde o consumidor final até grandes redes 
                varejistas, com excelência operacional e eficiência logística. 9 lojas físicas estrategicamente 
                posicionadas, centro de distribuição próprio e 6 marcas complementares formam um ecossistema integrado 
                que combina capilaridade, qualidade e agilidade.
              </p>
              <div className="mt-6 pt-6 border-t border-secondary-foreground/20">
                <p className="text-lg font-semibold text-accent">
                  Visão Estratégica: Liderança Nacional
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
