import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: gallery1,
      title: "Equipe de Excelência",
      description: "Profissionais dedicados ao sucesso do nosso ecossistema"
    },
    {
      image: gallery2,
      title: "Performance e Resultados",
      description: "Produtos que transformam objetivos em conquistas"
    },
    {
      image: gallery3,
      title: "Expansão Nacional",
      description: "Do Amazonas para todo o Brasil"
    },
    {
      image: gallery4,
      title: "Experiência Premium",
      description: "Atendimento personalizado e produtos de alta qualidade"
    },
    {
      image: gallery5,
      title: "Inovação Contínua",
      description: "Tecnologia e visão de futuro em cada passo"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossa Jornada em Imagens
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os bastidores do maior ecossistema de saúde e bem-estar do Norte
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
            <CardContent className="p-0 relative">
              <div className="relative h-[500px] md:h-[600px]">
                <img 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 animate-fade-in">
                    {slides[currentSlide].description}
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </Button>
              </div>

              <div className="flex justify-center gap-2 py-6 bg-card">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-primary w-8"
                        : "bg-muted hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
