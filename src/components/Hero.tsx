import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Grupo VAMUS - Liderança em Saúde e Bem-Estar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Grupo <span className="gradient-accent bg-clip-text text-transparent">VAMUS</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Promovendo uma vida plena e saudável através de um ecossistema completo de soluções essenciais
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto">
            Da alta performance esportiva ao bem-estar diário, oferecemos qualidade superior e acessibilidade para todos os públicos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("marcas")}
              className="group"
            >
              Conheça Nossas Marcas
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="cta"
              size="xl"
              onClick={() => scrollToSection("contato")}
            >
              Seja Nosso Parceiro
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(100% 100% at 50% 100%)" }} />
    </section>
  );
};

export default Hero;
