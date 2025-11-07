import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ESG = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Meio Ambiente",
      description: "Compromisso com práticas sustentáveis",
    },
    {
      icon: Heart,
      title: "Saúde e Bem-Estar",
      description: "Promovendo qualidade de vida",
    },
    {
      icon: Users,
      title: "Responsabilidade Social",
      description: "Impacto positivo na comunidade",
    },
  ];

  return (
    <section id="esg" className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.05)_0%,transparent_50%)] animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--accent-rgb),0.05)_0%,transparent_50%)] animate-pulse-slower" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Impacto e Sustentabilidade (ESG)
            </h2>
            <p className="text-xl text-muted-foreground">
              Construindo um futuro sustentável e responsável
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {initiatives.map((initiative, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <initiative.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  No Grupo VAMUS, acreditamos que o crescimento empresarial deve andar lado a lado com a 
                  responsabilidade social e ambiental. Nossas iniciativas ESG (Environmental, Social and Governance) 
                  refletem nosso compromisso com um futuro mais sustentável e inclusivo para todos.
                </p>
                
                <p className="text-lg leading-relaxed mb-4">
                  Implementamos práticas sustentáveis em toda nossa cadeia de operações, desde a seleção criteriosa 
                  de fornecedores até a gestão responsável de resíduos. Investimos em eficiência energética, 
                  redução de embalagens e parcerias com marcas que compartilham nossos valores ambientais, 
                  garantindo que cada produto comercializado contribua para um planeta mais saudável.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Além disso, promovemos ações de impacto social na região Norte, apoiando comunidades locais através 
                  de programas de saúde e bem-estar, geração de empregos e capacitação profissional. Nossa governança 
                  corporativa transparente e ética garante que todas as decisões sejam tomadas com integridade, 
                  responsabilidade e foco no desenvolvimento sustentável do Amazonas e do Brasil.
                </p>

                <div className="flex justify-center mt-8">
                  <Button variant="cta" size="lg" asChild className="group">
                    <Link to="/noticias">
                      Saiba Mais
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ESG;
