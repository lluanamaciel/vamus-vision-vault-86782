import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, FileText, Users, Award, ArrowRight } from "lucide-react";

const Investors = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
                Relações com Investidores
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Transparência, crescimento sustentável e resultados consistentes no mercado de saúde e bem-estar
              </p>
            </div>
          </div>
        </section>

        {/* Financial Highlights */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Destaques Financeiros
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">35%</div>
                  <div className="text-muted-foreground">Crescimento Anual</div>
                </CardContent>
              </Card>
              <Card className="border-secondary/20">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">6</div>
                  <div className="text-muted-foreground">Marcas Integradas</div>
                </CardContent>
              </Card>
              <Card className="border-accent/20">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">150+</div>
                  <div className="text-muted-foreground">Colaboradores</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">9</div>
                  <div className="text-muted-foreground">Lojas Estratégicas</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Governança Corporativa
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Missão</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Transformar vidas através de soluções integradas em saúde e bem-estar, 
                      oferecendo produtos e serviços de excelência que promovem qualidade de vida 
                      e resultados sustentáveis para nossos clientes, colaboradores e investidores.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Visão</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ser referência nacional em inovação, excelência e confiança no mercado de 
                      saúde e bem-estar, expandindo nosso ecossistema integrado de marcas para todo o Brasil.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Valores</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Excelência em qualidade e atendimento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Inovação contínua e sustentável</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Transparência e ética nas relações</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Comprometimento com resultados</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Opportunity */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto gradient-hero border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                  Oportunidades de Investimento
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Estamos abertos a investidores estratégicos que compartilham nossa visão de 
                  crescimento e excelência no mercado de saúde e bem-estar.
                </p>
                <Button variant="cta" size="lg" className="group">
                  Fale com Nossa Equipe
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Investors;
