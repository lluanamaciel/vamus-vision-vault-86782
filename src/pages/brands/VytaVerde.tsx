import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sparkles, ArrowRight } from "lucide-react";
import vytaVerdeImage from "@/assets/vita-verde.jpg";

const VytaVerde = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={vytaVerdeImage} 
              alt="Vyta Verde" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Vyta Verde
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Saúde natural e bem-estar através de produtos orgânicos e sustentáveis
              </p>
              <Button variant="hero" size="lg" className="group">
                Conheça Nossos Produtos
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center">Nutrição Natural e Consciente</h2>
              <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
                Vyta Verde representa o compromisso do Grupo VAMUS com saúde integral e sustentabilidade. 
                Oferecemos produtos naturais, orgânicos e funcionais para quem busca bem-estar através 
                de uma alimentação consciente e equilibrada.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">100% Natural</h3>
                    <p className="text-muted-foreground">Produtos orgânicos e sem aditivos artificiais</p>
                  </CardContent>
                </Card>
                <Card className="border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Saúde Integral</h3>
                    <p className="text-muted-foreground">Nutrição que cuida do corpo e mente</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-6 text-center">
                    <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Sustentável</h3>
                    <p className="text-muted-foreground">Compromisso com o meio ambiente</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Categorias de Produtos</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Alimentos Funcionais</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Superfoods orgânicos</li>
                      <li>• Grãos e cereais integrais</li>
                      <li>• Snacks saudáveis</li>
                      <li>• Chás e infusões naturais</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Suplementos Naturais</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Vitaminas naturais</li>
                      <li>• Fitoterápicos</li>
                      <li>• Óleos essenciais</li>
                      <li>• Probióticos</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Bem-Estar</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Produtos para sono e relaxamento</li>
                      <li>• Suporte digestivo</li>
                      <li>• Energia natural</li>
                      <li>• Antioxidantes</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Cosméticos Naturais</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Skincare orgânico</li>
                      <li>• Produtos capilares naturais</li>
                      <li>• Aromaterapia</li>
                      <li>• Cuidados corporais</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Nosso Compromisso Sustentável</h2>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Na Vyta Verde, acreditamos que saúde pessoal e saúde do planeta estão interligadas. 
                      Por isso, todos os nossos produtos seguem rigorosos critérios de sustentabilidade:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Ingredientes de fornecedores certificados e práticas sustentáveis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Embalagens recicláveis e biodegradáveis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Logística verde com redução de pegada de carbono</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Apoio a projetos socioambientais na região amazônica</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto gradient-hero border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                  Transforme Sua Saúde Naturalmente
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Descubra a diferença que produtos naturais e sustentáveis podem fazer em sua vida.
                </p>
                <Button variant="cta" size="lg">
                  Explore Vyta Verde
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

export default VytaVerde;
