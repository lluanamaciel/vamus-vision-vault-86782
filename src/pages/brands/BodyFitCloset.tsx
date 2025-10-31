import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shirt, Star, TrendingUp, ArrowRight } from "lucide-react";
import bodyFitClosetImage from "@/assets/body-fit-closet.jpg";

const BodyFitCloset = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={bodyFitClosetImage} 
              alt="Body Fit Closet" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Body Fit Closet
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Moda fitness premium, acessórios esportivos e estilo de vida ativo
              </p>
              <Button variant="hero" size="lg" className="group">
                Explore a Coleção
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center">Vista-se Para o Sucesso</h2>
              <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
                Body Fit Closet é a marca de moda fitness do Grupo VAMUS. Oferecemos roupas esportivas 
                de alta performance, acessórios funcionais e peças que combinam estilo, conforto e tecnologia 
                para acompanhar seu estilo de vida ativo.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Shirt className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Moda Premium</h3>
                    <p className="text-muted-foreground">Roupas de alta qualidade e design exclusivo</p>
                  </CardContent>
                </Card>
                <Card className="border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <Star className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Marcas Globais</h3>
                    <p className="text-muted-foreground">Parcerias com as melhores marcas mundiais</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Tendências</h3>
                    <p className="text-muted-foreground">Sempre à frente nas últimas novidades</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Nossas Coleções</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {["Feminino", "Masculino", "Acessórios", "Calçados", "Suplementos", "Equipamentos", "Outlet", "Lançamentos"].map((collection, index) => (
                  <Card key={index} className="border-border hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="h-40 bg-gradient-secondary rounded-lg mb-4" />
                      <h3 className="font-bold text-lg text-foreground">{collection}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Por Que Escolher Body Fit Closet?</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Tecnologia em Tecidos</h3>
                    <p className="text-muted-foreground">
                      Tecidos inteligentes com propriedades de absorção de umidade, respirabilidade e conforto térmico.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Design Funcional</h3>
                    <p className="text-muted-foreground">
                      Peças desenvolvidas pensando em movimento, flexibilidade e performance durante os treinos.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Estilo e Versatilidade</h3>
                    <p className="text-muted-foreground">
                      Do treino ao dia a dia: peças que combinam com seu estilo de vida ativo e moderno.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto gradient-hero border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                  Visite Nossa Loja
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Experimente nossas peças e receba consultoria personalizada de estilo fitness.
                </p>
                <Button variant="cta" size="lg">
                  Encontrar Loja
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

export default BodyFitCloset;
