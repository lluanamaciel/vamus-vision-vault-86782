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
    <section id="sobre" className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-6">
              <span className="text-accent font-bold text-lg tracking-widest uppercase">Quem Somos</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-foreground">
              Sobre o Grupo <span className="text-primary">VaMos</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-2xl md:text-3xl text-foreground/90 font-light leading-relaxed">
                "O sucesso é construído <span className="font-bold text-accent">todos os dias</span>, com excelência, inovação e compromisso genuíno com as pessoas."
              </p>
            </div>
          </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-elegant hover:scale-105 animate-fade-in group backdrop-blur-sm bg-card/95"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-24 h-24 gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 transition-elegant group-hover:shadow-glow">
                  <value.icon className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-3xl text-center text-foreground font-bold">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-0">
                <p className="text-muted-foreground text-center leading-relaxed text-lg">
                  {value.description}
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <p className="text-primary text-center italic font-semibold text-base">
                  {value.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-6xl mx-auto border-2 border-accent/30 shadow-2xl bg-gradient-to-br from-card to-accent/5 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h3 className="text-4xl md:text-5xl font-black mb-10 text-foreground">
              Por Que o Grupo <span className="text-primary">VaMos</span>?
            </h3>
            <div className="grid md:grid-cols-2 gap-10 text-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 shadow-glow flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    <span className="font-bold text-foreground text-xl block mb-1">Ecossistema Integrado</span> 
                    Múltiplas marcas que se complementam, criando valor superior para clientes e parceiros.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 shadow-glow flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    <span className="font-bold text-foreground text-xl block mb-1">Liderança Regional</span> 
                    Presença consolidada no Amazonas com capilaridade incomparável.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 shadow-glow flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    <span className="font-bold text-foreground text-xl block mb-1">Expansão Nacional</span> 
                    Estratégia de crescimento estruturada para conquista do mercado brasileiro.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 shadow-glow flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    <span className="font-bold text-foreground text-xl block mb-1">Inovação Constante</span> 
                    Antecipamos tendências e moldamos o futuro do bem-estar.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
