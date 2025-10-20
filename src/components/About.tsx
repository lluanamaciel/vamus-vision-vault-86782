import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Promover uma vida plena e saudável através de um ecossistema completo de produtos e soluções de alta qualidade.",
      quote: "\"Cada produto, uma transformação. Cada cliente, uma conquista.\""
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser o grupo empresarial líder no Amazonas e referência nacional em inovação, confiança e excelência em saúde e bem-estar.",
      quote: "\"Do Norte para o Brasil. Do hoje para o amanhã.\""
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Excelência • Inovação • Integridade • Pessoas em Primeiro Lugar • Impacto Positivo • Sinergia",
      quote: "\"Construindo juntos um futuro mais saudável.\""
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Quem Somos</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Grupo VaMos
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
            "Investindo com visão de longo prazo, gerando resultados superiores com impacto positivo"
          </p>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transformando o mercado de saúde e bem-estar através da diversificação estratégica, 
            expertise operacional e compromisso inabalável com a excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-primary/40 animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-center text-foreground mb-2">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center leading-relaxed text-lg">
                  {value.description}
                </p>
                <p className="text-primary text-center italic font-medium text-sm border-t pt-4 border-primary/20">
                  {value.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-5xl mx-auto border-2 border-accent/30 shadow-2xl bg-gradient-to-br from-card to-accent/5">
          <CardContent className="p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Por Que o Grupo VaMos?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Ecossistema Integrado:</span> Múltiplas marcas que se complementam, criando valor superior para clientes e parceiros.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Liderança Regional:</span> Presença consolidada no Amazonas com capilaridade incomparável.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Expansão Nacional:</span> Estratégia de crescimento estruturada para conquista do mercado brasileiro.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Inovação Constante:</span> Antecipamos tendências e moldamos o futuro do bem-estar.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
