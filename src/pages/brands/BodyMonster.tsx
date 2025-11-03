import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Users, ArrowRight, Phone } from "lucide-react";
import bodyMonsterImage from "@/assets/body-monster.jpg";

const BodyMonster = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={bodyMonsterImage} 
              alt="Body Monster" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Body Monster
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Líder em suplementação esportiva de alta performance
              </p>
              <Button variant="hero" size="lg" className="group">
                Conheça Nossos Produtos
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Brand */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center">Sobre a Marca</h2>
              <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
                A Body Monster é a marca principal do Grupo VAMUS, referência em suplementação 
                esportiva de alta qualidade. Com mais de 10 anos de mercado, oferecemos produtos 
                que atendem desde iniciantes até atletas de alta performance.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">10+</div>
                    <div className="text-muted-foreground">Anos de Excelência</div>
                  </CardContent>
                </Card>
                <Card className="border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">50k+</div>
                    <div className="text-muted-foreground">Clientes Ativos</div>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">200+</div>
                    <div className="text-muted-foreground">Produtos Premium</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Categorias de Produtos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {["Whey Protein", "Creatina", "Pré-Treino", "Aminoácidos", "Termogênicos", "Vitaminas", "Barras Proteicas", "Acessórios"].map((category, index) => (
                  <Card key={index} className="border-border hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="h-32 bg-gradient-primary rounded-lg mb-4" />
                      <h3 className="font-bold text-lg text-foreground">{category}</h3>
                    </CardContent>
                  </Card>
                ))}
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
                  Visite Nossas Lojas
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Encontre a loja Body Monster mais próxima e receba atendimento 
                  personalizado de nossa equipe especializada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="lg">
                    Localizar Loja
                  </Button>
                  <Button variant="cta" size="lg" asChild>
                    <a href="tel:+5592981586710">
                      <Phone className="mr-2 h-5 w-5" />
                      (92) 98158-6710
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BodyMonster;
