import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import logoVamus from "@/assets/logo-vamus.png";

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
        <div className="absolute inset-0 gradient-hero opacity-95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto text-center space-y-12 animate-fade-in">
          <div className="mb-12 flex justify-center animate-float">
            <img 
              src={logoVamus} 
              alt="Grupo VAMUS" 
              className="h-40 md:h-56 drop-shadow-[0_0_40px_rgba(230,180,34,0.4)] transition-elegant hover:scale-105"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter">
              Grupo <span className="text-accent">VAMUS</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
              <TrendingUp className="h-10 w-10 text-accent animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white/95 tracking-wide">
              Excelência que Transforma. <span className="text-secondary">Visão que Inspira.</span>
            </h2>
          </div>
          
          <p className="text-xl md:text-3xl text-white/90 leading-relaxed font-light max-w-5xl mx-auto backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
            Liderando o mercado amazônico com{" "}
            <span className="font-bold text-accent">inovação estratégica</span>, unindo alta performance esportiva e bem-estar premium em um ecossistema completo de excelência.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-lg md:text-xl text-white font-semibold">
            <div className="flex flex-col items-center gap-3 backdrop-blur-sm bg-white/5 px-8 py-6 rounded-xl border border-white/10 transition-elegant hover:bg-white/10 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-accent shadow-glow" />
              <span>Liderança Regional</span>
            </div>
            <div className="flex flex-col items-center gap-3 backdrop-blur-sm bg-white/5 px-8 py-6 rounded-xl border border-white/10 transition-elegant hover:bg-white/10 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-secondary shadow-glow-secondary" />
              <span>5 Lojas + 4 Quiosques</span>
            </div>
            <div className="flex flex-col items-center gap-3 backdrop-blur-sm bg-white/5 px-8 py-6 rounded-xl border border-white/10 transition-elegant hover:bg-white/10 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-accent shadow-glow" />
              <span>Expansão Nacional</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <Button 
              size="lg" 
              className="text-xl px-14 py-8 bg-accent hover:bg-accent-light text-primary font-bold shadow-glow transition-elegant hover:scale-105 hover:shadow-xl group"
              onClick={() => scrollToSection('marcas')}
            >
              Conheça Nossas Marcas
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              className="text-xl px-14 py-8 bg-white/10 hover:bg-white/20 text-white font-bold border-2 border-white/30 backdrop-blur-sm transition-elegant hover:scale-105"
              onClick={() => scrollToSection('contato')}
            >
              Seja Nosso Parceiro
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default Hero;
