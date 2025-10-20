import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    { icon: Target, title: "Excelência e Qualidade", description: "Compromisso inabalável com produtos e serviços superiores" },
    { icon: Eye, title: "Inovação Contínua", description: "Busca incessante por soluções que antecipem as necessidades do mercado" },
    { icon: Heart, title: "Pessoas em Primeiro Lugar", description: "Valorização e desenvolvimento de colaboradores, clientes e parceiros" },
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in">
            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-primary rounded-lg mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Promover uma vida plena e saudável, oferecendo um ecossistema completo de produtos e soluções essenciais, desde a alta performance esportiva até o bem-estar diário, com qualidade superior e acessibilidade para todos os públicos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-secondary rounded-lg mb-4 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser o grupo empresarial líder e mais reconhecido no Amazonas e em expansão nacional, sinônimo de inovação, confiança e excelência na entrega de produtos que impulsionam a saúde, o desempenho e a qualidade de vida.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam cada decisão e ação do Grupo VAMUS
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-border shadow-md hover:shadow-lg transition-smooth hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <value.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
