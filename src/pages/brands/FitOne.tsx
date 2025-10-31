import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Award, Zap, ArrowRight } from "lucide-react";
import fitOneImage from "@/assets/fit-one.jpg";

const FitOne = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={fitOneImage} 
              alt="FIT ONE Nutrition" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                FIT ONE Nutrition
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Suplementação esportiva de alta performance e tecnologia avançada
              </p>
              <Button variant="hero" size="lg" className="group">
                Descubra a Linha
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center">Performance em Primeiro Lugar</h2>
              <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
                FIT ONE Nutrition representa a evolução em suplementação esportiva. Desenvolvida 
                com tecnologia de ponta e ingredientes premium, nossa linha foi criada para atletas 
                que buscam máximo desempenho e resultados comprovados.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Flame className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Alta Performance</h3>
                    <p className="text-muted-foreground">Fórmulas desenvolvidas para atletas de elite</p>
                  </CardContent>
                </Card>
                <Card className="border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Certificações</h3>
                    <p className="text-muted-foreground">Testados e aprovados por órgãos reguladores</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-6 text-center">
                    <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Tecnologia</h3>
                    <p className="text-muted-foreground">Ingredientes de última geração</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Product Lines */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Linhas de Produtos</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">FIT ONE PRO</h3>
                    <p className="text-muted-foreground mb-4">
                      Linha profissional com whey isolado, creatina micronizada e pré-treinos de alta potência. 
                      Desenvolvida para atletas competitivos e bodybuilders.
                    </p>
                    <Button variant="outline" className="group">
                      Ver Produtos PRO
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">FIT ONE ELITE</h3>
                    <p className="text-muted-foreground mb-4">
                      Nossa linha premium com ingredientes patenteados e fórmulas exclusivas. 
                      Para quem não aceita menos que a excelência absoluta.
                    </p>
                    <Button variant="outline" className="group">
                      Ver Produtos ELITE
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto gradient-hero border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                  Experimente FIT ONE Nutrition
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Disponível nas principais lojas Body Monster e pontos de venda autorizados.
                </p>
                <Button variant="cta" size="lg">
                  Onde Comprar
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

export default FitOne;
