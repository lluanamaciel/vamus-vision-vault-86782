import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const news = [
    {
      title: "Grupo VAMUS Anuncia Expansão com Abertura de 3 Novas Lojas",
      category: "Milestone",
      date: "15 de Março, 2025",
      summary: "O Grupo VAMUS confirma plano de expansão agressivo com inauguração de três novas unidades estratégicas, reforçando presença no mercado nacional de saúde e bem-estar.",
      featured: true
    },
    {
      title: "FIT ONE Nutrition Lança Nova Linha de Suplementos Premium",
      category: "Produtos",
      date: "8 de Março, 2025",
      summary: "A marca de suplementação esportiva do grupo apresenta linha exclusiva desenvolvida com tecnologia de ponta e foco em alta performance."
    },
    {
      title: "Body Fit Closet: Parceria com Marcas Internacionais",
      category: "Parcerias",
      date: "1 de Março, 2025",
      summary: "A divisão de moda fitness do grupo anuncia parceria estratégica com marcas globais, ampliando portfólio de produtos premium."
    },
    {
      title: "Grupo VAMUS Reconhecido como Empresa Sustentável",
      category: "ESG",
      date: "22 de Fevereiro, 2025",
      summary: "Iniciativas de sustentabilidade e responsabilidade social do grupo recebem certificação e reconhecimento nacional."
    },
    {
      title: "Body Monster Completa 10 Anos de Liderança no Mercado",
      category: "Milestone",
      date: "15 de Fevereiro, 2025",
      summary: "Marca principal do grupo celebra década de excelência, inovação e transformação de vidas através da suplementação de qualidade."
    },
    {
      title: "VAMUS Investe em Tecnologia e Experiência Digital",
      category: "Inovação",
      date: "5 de Fevereiro, 2025",
      summary: "Grupo anuncia investimento em plataforma digital integrada para melhorar experiência omnichannel dos clientes."
    }
  ];

  const categories = ["Todas", "Produtos", "Parcerias", "ESG", "Milestone", "Inovação"];
  
  const filteredNews = selectedCategory === "Todas" 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
                Notícias e Imprensa
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Acompanhe as últimas novidades, lançamentos e conquistas do Grupo VAMUS
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="transition-all"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredNews.length > 0 && filteredNews[0].featured && (
                <Card className="gradient-hero border-0 mb-12">
                  <CardContent className="p-12">
                    <Badge variant="secondary" className="mb-4">Destaque</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                      {filteredNews[0].title}
                    </h2>
                    <div className="flex items-center gap-2 mb-6 text-primary-foreground/80">
                      <Calendar className="h-4 w-4" />
                      <span>{filteredNews[0].date}</span>
                      <Badge variant="outline" className="ml-2 border-primary-foreground/30 text-primary-foreground">
                        {filteredNews[0].category}
                      </Badge>
                    </div>
                    <p className="text-xl text-primary-foreground/90 mb-6">
                      {filteredNews[0].summary}
                    </p>
                    <Button variant="cta" className="group">
                      Ver Notícia
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* News Grid */}
              {filteredNews.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNews.slice(filteredNews[0].featured ? 1 : 0).map((item, index) => (
                    <Card key={index} className="border-border hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-3">{item.category}</Badge>
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.summary}
                        </p>
                        <Button variant="link" className="p-0 h-auto group">
                          Ver Notícia
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-border">
                  <CardContent className="p-12 text-center">
                    <p className="text-xl text-muted-foreground">
                      Nenhuma notícia encontrada para a categoria selecionada.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Contato para Imprensa
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Para entrevistas, informações adicionais ou material de imprensa, 
                  entre em contato com nossa equipe de comunicação.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> imprensa@grupovamus.com.br</p>
                  <p><strong>Telefone:</strong> (92) 3000-0000</p>
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

export default News;
