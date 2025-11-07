import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Store, Building2, TrendingUp } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom icons
const storeIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const distributionIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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
              <div className="h-[500px] w-full relative">
                <MapContainer
                  center={manausCenter}
                  zoom={12}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                  className="z-0"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                  {/* Círculo de cobertura */}
                  <Circle
                    center={manausCenter}
                    radius={8000}
                    pathOptions={{
                      color: "#10b981",
                      fillColor: "#10b981",
                      fillOpacity: 0.1,
                    }}
                  />

                  {/* Marcadores das lojas */}
                  {stores.map((store) => (
                    <Marker key={store.id} position={store.position} icon={storeIcon}>
                      <Popup>
                        <div className="text-center">
                          <strong>{store.name}</strong>
                          <p className="text-sm text-muted-foreground">Loja Física</p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}

                  {/* Marcador do Centro de Distribuição */}
                  <Marker position={distributionCenter.position} icon={distributionIcon}>
                    <Popup>
                      <div className="text-center">
                        <strong>{distributionCenter.name}</strong>
                        <p className="text-sm text-muted-foreground">Logística Integrada</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>

                {/* Legenda sobre o mapa */}
                <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg z-[1000] border border-border">
                  <h4 className="font-bold text-sm mb-2">Liderança Consolidada no Norte</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Lojas Físicas (9)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Centro de Distribuição (1)</span>
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
