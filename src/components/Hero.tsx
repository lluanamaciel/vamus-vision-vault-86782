import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import logoVamos from "@/assets/logo-vamos.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/30 to-black/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img 
              src={logoVamos} 
              alt="Grupo VaMos" 
              className="h-32 md:h-40 animate-scale-in drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
            Grupo VaMos
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-accent">
            <TrendingUp className="h-8 w-8" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Transformando Vidas com Excelência
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-light max-w-4xl mx-auto">
            <span className="font-semibold text-accent">Inovação que inspira.</span> Diversificação estratégica que une performance esportiva, 
            bem-estar premium e sustentabilidade em um ecossistema completo de soluções.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-lg md:text-xl text-white/90 font-medium">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Liderança Regional
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Expansão Nacional
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Visão de Futuro
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              variant="cta"
              onClick={() => scrollToSection('marcas')}
              className="text-lg px-10 py-7 shadow-glow group"
            >
              Conheça Nossas Marcas
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contato')}
              className="text-lg px-10 py-7 border-2 border-accent text-accent hover:bg-accent hover:text-white shadow-lg"
            >
              Seja Nosso Parceiro
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default Hero;
