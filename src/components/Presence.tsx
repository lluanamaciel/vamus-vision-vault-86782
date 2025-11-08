import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Store, Building2, TrendingUp } from "lucide-react";

const Presence = () => {
  const stats = [
    { icon: Store, label: "Lojas Físicas", value: "9", description: "Pontos de venda estratégicos" },
    { icon: Building2, label: "Marcas", value: "6", description: "Portfolio diversificado" },
    { icon: MapPin, label: "Centro Distribuição", value: "1", description: "Logística integrada" },
    { icon: TrendingUp, label: "Crescimento", value: "Acelerado", description: "Expansão nacional" },
  ];

  // Coordenadas de Manaus, Amazonas
  const manausCenter: [number, number] = [-3.1190, -60.0217];
  
  // Localizações das lojas (distribuídas em Manaus)
  const stores = [
    { id: 1, name: "Body Monster - Centro", position: [-3.1190, -60.0217] as [number, number] },
    { id: 2, name: "Body Monster - Adrianópolis", position: [-3.0970, -60.0150] as [number, number] },
    { id: 3, name: "Body Monster - Vieiralves", position: [-3.0890, -60.0490] as [number, number] },
    { id: 4, name: "Atacadão - Compensa", position: [-3.0950, -60.0890] as [number, number] },
    { id: 5, name: "Atacadão - Cidade Nova", position: [-3.0700, -60.0300] as [number, number] },
    { id: 6, name: "PACCO - Centro", position: [-3.1290, -60.0190] as [number, number] },
    { id: 7, name: "Fit One - Parque 10", position: [-3.0850, -60.0120] as [number, number] },
    { id: 8, name: "Vyta Verde - Shopping", position: [-3.0800, -60.0550] as [number, number] },
    { id: 9, name: "Body Fit Closet - Ponta Negra", position: [-3.0650, -60.0850] as [number, number] },
  ];

  const distributionCenter = {
    name: "Centro de Distribuição VAMUS",
    position: [-3.1400, -60.0100] as [number, number],
  };

  return (
    <section id="presenca" className="py-20 gradient-secondary text-secondary-foreground relative overflow-hidden">
      {/* Dynamic background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 animate-grid-flow" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-4 relative z-10">
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
                className="bg-background/10 backdrop-blur-sm border-secondary-foreground/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-background/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-accent">{stat.value}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-secondary-foreground/70">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mapa Interativo */}
          <Card className="bg-background/10 backdrop-blur-sm border-secondary-foreground/20 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="h-[500px] w-full relative bg-muted/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-20 w-20 text-accent mx-auto animate-pulse" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-secondary-foreground">Manaus, Amazonas</h3>
                    <p className="text-lg text-secondary-foreground/80">9 Lojas Físicas + Centro de Distribuição</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 max-w-2xl mx-auto px-4">
                      {stores.map((store) => (
                        <div key={store.id} className="flex items-center gap-2 bg-background/20 backdrop-blur-sm p-3 rounded-lg">
                          <Store className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-secondary-foreground">{store.name}</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm p-3 rounded-lg">
                        <Building2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-secondary-foreground">{distributionCenter.name}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Legenda */}
                  <div className="mt-6 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border inline-block">
                    <h4 className="font-bold text-sm mb-2 text-foreground">Liderança Consolidada no Norte</h4>
                    <div className="space-y-2 text-xs text-foreground">
                      <div className="flex items-center gap-2">
                        <Store className="w-4 h-4 text-red-500" />
                        <span>Lojas Físicas (9)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-blue-500" />
                        <span>Centro de Distribuição (1)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações sobre a infraestrutura */}
              <div className="p-8 text-center bg-gradient-to-b from-transparent to-secondary/20">
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Presence;
