import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "João Silva",
      position: "CEO & Fundador",
      bio: "Mais de 15 anos de experiência no mercado de suplementação e bem-estar. Visionário por trás da expansão do Grupo VAMUS.",
      email: "joao@grupovamus.com.br"
    },
    {
      name: "Maria Santos",
      position: "CFO",
      bio: "Especialista em finanças corporativas com histórico em empresas de grande porte. Responsável pela gestão financeira estratégica do grupo.",
      email: "maria@grupovamus.com.br"
    },
    {
      name: "Pedro Costa",
      position: "COO",
      bio: "Expertise em operações e logística. Lidera a expansão e otimização da rede de lojas do grupo.",
      email: "pedro@grupovamus.com.br"
    },
    {
      name: "Ana Oliveira",
      position: "CMO",
      bio: "Profissional de marketing com experiência em construção de marcas nacionais. Responsável pelo posicionamento estratégico das marcas do grupo.",
      email: "ana@grupovamus.com.br"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
                Nossa Liderança
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Equipe executiva comprometida com excelência, inovação e crescimento sustentável
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {leadership.map((member, index) => (
                <Card key={index} className="border-border hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-24 h-24 rounded-full gradient-primary flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1 text-foreground">{member.name}</h3>
                        <div className="text-primary font-semibold mb-4">{member.position}</div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                        <div className="flex gap-3">
                          <a
                            href={`mailto:${member.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Email"
                          >
                            <Mail className="h-5 w-5" />
                          </a>
                          <a
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Liderança com Propósito
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Nossa equipe executiva é guiada por valores fundamentais que direcionam cada decisão 
                e ação do Grupo VAMUS rumo ao sucesso sustentável.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">Visão</div>
                    <p className="text-muted-foreground">
                      Antecipamos tendências e lideramos a transformação do mercado
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">Execução</div>
                    <p className="text-muted-foreground">
                      Transformamos estratégia em resultados mensuráveis
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-accent mb-2">Integridade</div>
                    <p className="text-muted-foreground">
                      Transparência e ética em todas as relações
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
