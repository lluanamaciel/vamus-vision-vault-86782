import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Package, Droplet, Leaf } from "lucide-react";
import bodyMonsterImage from "@/assets/body-monster.jpg";
import atacadaoImage from "@/assets/atacadao.jpg";
import paccoImage from "@/assets/pacco.jpg";
import vitaVerdeImage from "@/assets/vita-verde.jpg";

const Brands = () => {
  const brands = [
    {
      name: "Body Monster Suplementos",
      tagline: "Performance e Resultados",
      description: "Venda de suplementos de alta qualidade para atletas e entusiastas de fitness. Preços justos, entrega em toda Manaus, e atendimento personalizado.",
      icon: Dumbbell,
      image: bodyMonsterImage,
      color: "primary",
      features: ["Atletas e Fitness", "Entrega Rápida", "Preços Competitivos"]
    },
    {
      name: "Atacadão Suplementos",
      tagline: "Maior Distribuidor do Norte",
      description: "Distribuição B2B de suplementação esportiva para varejistas. Mais de 20 marcas, entrega em todo o Amazonas, produtos originais com nota fiscal.",
      icon: Package,
      image: atacadaoImage,
      color: "secondary",
      features: ["B2B Distribuição", "+20 Marcas", "Todo Amazonas"]
    },
    {
      name: "Quiosques Pacco",
      tagline: "Sustentabilidade com Estilo",
      description: "Revenda de produtos Pacco em locais estratégicos. Garrafas térmicas, copos e acessórios sustentáveis com design moderno e funcional.",
      icon: Droplet,
      image: paccoImage,
      color: "accent",
      features: ["Produtos Sustentáveis", "Alto Fluxo", "Design Premium"]
    },
    {
      name: "Vita Verde",
      tagline: "Bem-Estar Premium",
      description: "Loja premium de suplementação e estilo de vida saudável. Produtos de alta qualidade, atendimento personalizado para público classe A/B.",
      icon: Leaf,
      image: vitaVerdeImage,
      color: "primary",
      features: ["Classe A/B", "Alta Qualidade", "Naturalidade"]
    }
  ];

  return (
    <section id="marcas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nosso Ecossistema de Marcas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diversificação estratégica que atende todos os públicos e necessidades do mercado de saúde e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border shadow-lg hover:shadow-xl transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-${brand.color}/20 group-hover:bg-${brand.color}/10 transition-colors`} />
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 gradient-${brand.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <brand.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{brand.name}</CardTitle>
                <p className="text-sm font-semibold text-primary">{brand.tagline}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {brand.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {brand.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-muted">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Sinergia e Crescimento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada marca do grupo complementa as demais, criando um ecossistema integrado que oferece soluções completas. 
                Da distribuição B2B ao varejo especializado, da performance esportiva ao bem-estar diário, nossa diversificação 
                estratégica nos posiciona como líderes regionais com potencial de expansão nacional.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Brands;
