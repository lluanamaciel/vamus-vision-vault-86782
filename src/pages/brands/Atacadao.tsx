import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, DollarSign, Truck, ArrowRight } from "lucide-react";
import atacadaoImage from "@/assets/atacadao.jpg";

const Atacadao = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={atacadaoImage} 
              alt="Atacadão Body Monster" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Atacadão Body Monster
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Suplementos de qualidade com os melhores preços do mercado
              </p>
              <Button variant="hero" size="lg" className="group">
                Conheça Nossas Ofertas
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center">Compre em Grande, Economize Mais</h2>
              <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
                O Atacadão Body Monster oferece os mesmos produtos premium da linha Body Monster 
                com preços especiais para compras em quantidade. Ideal para academias, personal trainers 
                e consumidores que buscam economia sem abrir mão da qualidade.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Grande Variedade</h3>
                    <p className="text-muted-foreground">Todos os produtos Body Monster disponíveis</p>
                  </CardContent>
                </Card>
                <Card className="border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Preços Especiais</h3>
                    <p className="text-muted-foreground">Descontos progressivos por volume</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-6 text-center">
                    <Truck className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Entrega Rápida</h3>
                    <p className="text-muted-foreground">Logística eficiente para grandes pedidos</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Vantagens do Atacadão</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Para Academias e Personal Trainers</h3>
                    <p className="text-muted-foreground">
                      Condições especiais para revenda, com suporte comercial dedicado e programas de fidelidade.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Para Consumidores</h3>
                    <p className="text-muted-foreground">
                      Compre em quantidade e economize até 30% em relação aos preços de varejo tradicionais.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Garantia de Qualidade</h3>
                    <p className="text-muted-foreground">
                      Todos os produtos mantêm os mesmos padrões de qualidade e certificações da linha Body Monster.
                    </p>
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
                  Solicite um Orçamento
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Entre em contato e receba uma proposta personalizada para suas necessidades.
                </p>
                <Button variant="cta" size="lg">
                  Falar com Consultor
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

export default Atacadao;
