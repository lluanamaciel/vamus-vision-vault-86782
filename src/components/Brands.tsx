import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dumbbell, Package, Droplet, Leaf, Flame, Shirt, Globe, Instagram, Phone } from "lucide-react";
import bodyMonsterImage from "@/assets/body-monster.jpg";
import atacadaoImage from "@/assets/atacadao.jpg";
import paccoImage from "@/assets/pacco.jpg";
import vitaVerdeImage from "@/assets/vita-verde.jpg";
import fitOneImage from "@/assets/fit-one.jpg";
import bodyFitClosetImage from "@/assets/body-fit-closet.jpg";

const Brands = () => {
  const brands = [
    {
      name: "Body Monster Suplementos",
      tagline: "Performance e Resultados",
      description: "Varejo especializado em suplementação esportiva de alta performance. Atendimento consultivo, produtos premium e entrega ágil para atletas e entusiastas fitness.",
      icon: Dumbbell,
      image: bodyMonsterImage,
      color: "primary",
      features: ["Varejo Especializado", "Atendimento Consultivo", "Alta Performance"],
      website: "https://bodymonstersuplementos.com.br/",
      instagram: "https://instagram.com/bodymonstersuplementos",
      phone: null
    },
    {
      name: "Atacadão Suplementos",
      tagline: "Distribuição B2B de Excelência",
      description: "Distribuidor atacadista líder em suplementação esportiva. Portfolio com mais de 20 marcas reconhecidas, logística eficiente e parcerias estratégicas com varejistas.",
      icon: Package,
      image: atacadaoImage,
      color: "secondary",
      features: ["B2B Distribuição", "+20 Marcas Premium", "Logística Integrada"],
      website: null,
      instagram: "https://instagram.com/atacadaosuplementos.am",
      phone: "(92) 98816-7044"
    },
    {
      name: "FIT ONE Nutrition",
      tagline: "Suplementação Inteligente",
      description: "Marca própria de suplementação esportiva com foco em qualidade, eficácia e inovação. Produtos desenvolvidos com os mais altos padrões da indústria.",
      icon: Flame,
      image: fitOneImage,
      color: "accent",
      features: ["Marca Própria", "Qualidade Premium", "Inovação Científica"],
      website: null,
      instagram: null,
      phone: null
    },
    {
      name: "Body Fit Closet",
      tagline: "Moda Fitness & Performance",
      description: "Varejo especializado em roupas e acessórios esportivos. Estilo, conforto e tecnologia para quem busca performance e elegância no treino e no dia a dia.",
      icon: Shirt,
      image: bodyFitClosetImage,
      color: "primary",
      features: ["Moda Esportiva", "Tecnologia Têxtil", "Estilo Premium"],
      website: null,
      instagram: null,
      phone: null
    },
    {
      name: "PACCO",
      tagline: "Sustentabilidade & Design",
      description: "Linha de produtos sustentáveis premium. Garrafas térmicas, copos e acessórios com design contemporâneo e funcionalidade superior para um estilo de vida consciente.",
      icon: Droplet,
      image: paccoImage,
      color: "secondary",
      features: ["Sustentabilidade", "Design Premium", "Lifestyle Consciente"],
      website: null,
      instagram: "https://instagram.com/paccomanauara",
      instagram2: "https://instagram.com/paccoamazonasshopping",
      phone: null
    },
    {
      name: "Vyta Verde",
      tagline: "Bem-Estar Holístico",
      description: "Varejo premium focado em bem-estar integral e estilo de vida saudável. Produtos naturais de alta qualidade, atendimento personalizado e experiência diferenciada.",
      icon: Leaf,
      image: vitaVerdeImage,
      color: "accent",
      features: ["Bem-Estar Integral", "Produtos Naturais", "Experiência Premium"],
      website: "https://vytaverde.com.br/",
      instagram: "https://instagram.com/vytaverde",
      phone: null
    }
  ];

  return (
    <section id="marcas" className="py-32 bg-gradient-to-b from-background via-primary/5 to-background relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-secondary font-bold text-lg tracking-widest uppercase">Portfólio Premium</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            Portfolio <span className="text-primary">Estratégico</span> de Marcas
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Seis marcas integradas, <span className="font-semibold text-foreground">um propósito unificado</span>: liderar a transformação do mercado de saúde, bem-estar e performance com excelência operacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-2 hover:border-primary/30 shadow-xl hover:shadow-2xl transition-elegant group animate-fade-in backdrop-blur-sm bg-card/95"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-colors`} />
                <div className="absolute top-6 left-6">
                  <div className={`w-16 h-16 gradient-${brand.color} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-elegant`}>
                    <brand.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl text-foreground font-bold">{brand.name}</CardTitle>
                <p className="text-base font-bold text-primary tracking-wide">{brand.tagline}</p>
              </CardHeader>
              
              <CardContent className="space-y-5">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {brand.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {brand.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-muted/80 text-sm py-1.5 px-3 font-semibold">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="flex flex-wrap gap-3">
                  {brand.website && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="gap-2 hover:bg-primary hover:text-primary-foreground transition-elegant font-semibold"
                    >
                      <a href={brand.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4" />
                        Website
                      </a>
                    </Button>
                  )}
                  {brand.instagram && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="gap-2 hover:bg-secondary hover:text-secondary-foreground transition-elegant font-semibold"
                    >
                      <a href={brand.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </a>
                    </Button>
                  )}
                  {brand.instagram2 && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="gap-2 hover:bg-secondary hover:text-secondary-foreground transition-elegant font-semibold"
                    >
                      <a href={brand.instagram2} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        Pacco Amazon
                      </a>
                    </Button>
                  )}
                  {brand.phone && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="gap-2 hover:bg-accent hover:text-accent-foreground transition-elegant font-semibold"
                    >
                      <a href={`tel:${brand.phone.replace(/\D/g, '')}`}>
                        <Phone className="h-4 w-4" />
                        {brand.phone}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="max-w-5xl mx-auto border-2 border-primary/20 shadow-2xl backdrop-blur-sm bg-card/95">
            <CardContent className="p-12">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-foreground">Ecossistema Integrado de Valor</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Cada marca do portfólio VAMUS complementa as demais de forma estratégica, criando um <span className="font-bold text-foreground">ecossistema integrado</span> que maximiza sinergias operacionais e comerciais. 
                Da distribuição atacadista ao varejo especializado, da marca própria ao lifestyle premium, nossa arquitetura diversificada 
                nos posiciona para <span className="font-bold text-primary">liderança de mercado</span> e <span className="font-bold text-secondary">crescimento sustentável em escala nacional</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Brands;
