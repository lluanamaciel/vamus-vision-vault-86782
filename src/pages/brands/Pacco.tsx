import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Clock, ShoppingBag, ArrowRight } from "lucide-react";
import paccoImage from "@/assets/pacco.jpg";

const Pacco = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={paccoImage} 
              alt="PACCO" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                PACCO
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Alimentação saudável, prática e saborosa para o seu dia a dia
              </p>
              <Button variant="hero" size="lg" className="group">
                Conheça o Cardápio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center">Comida de Verdade, Rápida e Saudável</h2>
              <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
                PACCO é a solução de alimentação saudável do Grupo VAMUS. Oferecemos refeições 
                balanceadas, lanches nutritivos e opções práticas para quem busca uma alimentação 
                equilibrada sem abrir mão do sabor e da conveniência.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Receitas Balanceadas</h3>
                    <p className="text-muted-foreground">Desenvolvidas por nutricionistas</p>
                  </CardContent>
                </Card>
                <Card className="border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Praticidade</h3>
                    <p className="text-muted-foreground">Alimentação saudável em minutos</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-6 text-center">
                    <ShoppingBag className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Variedade</h3>
                    <p className="text-muted-foreground">Menu diversificado e saboroso</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Nosso Cardápio</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Refeições Completas</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Marmitas fitness com proteínas de alta qualidade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Bowls nutritivos com grãos integrais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Saladas especiais e wraps funcionais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Opções vegetarianas e veganas</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Lanches e Snacks</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Sanduíches naturais com pães integrais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Açaí e smoothie bowls energéticos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Snacks proteicos e barras nutritivas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Sucos naturais e bebidas funcionais</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Nutritional Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Nutrição Transparente</h2>
              <Card className="border-border">
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6">
                    Todas as nossas refeições e lanches vêm com informações nutricionais completas, 
                    incluindo calorias, macronutrientes e micronutrientes essenciais. Você sabe 
                    exatamente o que está comendo.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">400-600</div>
                      <div className="text-sm text-muted-foreground">Calorias por refeição</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-secondary mb-1">30-40g</div>
                      <div className="text-sm text-muted-foreground">Proteína por refeição</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-1">0g</div>
                      <div className="text-sm text-muted-foreground">Gorduras trans</div>
                    </div>
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
                  Encontre PACCO Perto de Você
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Disponível em pontos estratégicos e nas principais lojas do Grupo VAMUS.
                </p>
                <Button variant="cta" size="lg">
                  Ver Localizações
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

export default Pacco;
