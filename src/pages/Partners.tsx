import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Handshake, Award, Package, Globe } from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      title: "Indústrias de Suplementação",
      description: "Parceiros estratégicos que fornecem produtos de alta qualidade e inovação para nosso portfólio.",
      icon: Building2,
      partners: [
        "Max Titanium",
        "Integralmédica",
        "Growth Supplements",
        "Probiótica",
        "Dux Nutrition",
        "New Millen",
        "Darkness",
        "FTW Sports Nutrition"
      ]
    },
    {
      title: "Indústrias de Alimentos Funcionais",
      description: "Fornecedores de produtos naturais, orgânicos e funcionais para bem-estar integral.",
      icon: Package,
      partners: [
        "Jasmine Alimentos",
        "Mãe Terra",
        "Native",
        "Puravida",
        "SuperVida",
        "Essential Nutrition"
      ]
    },
    {
      title: "Indústrias de Vestuário Esportivo",
      description: "Marcas globais de moda fitness e performance que equipam nossos clientes.",
      icon: Globe,
      partners: [
        "Under Armour",
        "Nike",
        "Adidas",
        "Puma",
        "Mizuno",
        "Oakley",
        "NewBalance"
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Crescimento Conjunto",
      description: "Ampliação de market share através de distribuição estratégica e capilaridade regional."
    },
    {
      icon: Handshake,
      title: "Relacionamento Duradouro",
      description: "Parcerias baseadas em confiança, transparência e compromisso mútuo de longo prazo."
    },
    {
      icon: Award,
      title: "Excelência Operacional",
      description: "Logística eficiente, gestão profissional e pagamento em dia garantem sucesso compartilhado."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
          
          <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Building2 className="h-6 w-6 text-accent" />
                <span className="text-white font-bold tracking-wide">Parceiros Estratégicos</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Indústrias <span className="text-accent">Parceiras</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
                Construindo o futuro do mercado de saúde e bem-estar através de parcerias estratégicas com as principais indústrias nacionais e internacionais.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Categories */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-16">
              {partnerCategories.map((category, index) => (
                <Card 
                  key={index}
                  className="border-2 hover:border-primary/30 shadow-xl hover:shadow-2xl transition-elegant animate-fade-in backdrop-blur-sm bg-card/95"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl text-foreground">{category.title}</CardTitle>
                        <p className="text-muted-foreground text-lg mt-2">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {category.partners.map((partner, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-elegant hover:scale-105 text-center border border-border hover:border-primary/30"
                        >
                          <p className="font-semibold text-foreground">{partner}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
                Por Que Ser Nosso <span className="text-primary">Parceiro?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mais do que uma relação comercial, construímos parcerias estratégicas de longo prazo baseadas em valores compartilhados.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="border-2 hover:border-primary/30 shadow-xl hover:shadow-2xl transition-elegant hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-elegant">
                      <benefit.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-center text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(230,180,34,0.2),transparent_50%)]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Card className="max-w-4xl mx-auto border-2 border-white/20 shadow-2xl backdrop-blur-sm bg-white/10 animate-fade-in">
              <CardContent className="p-12 text-center">
                <h3 className="text-4xl md:text-5xl font-black mb-6 text-white">
                  Vamos Crescer <span className="text-accent">Juntos?</span>
                </h3>
                <p className="text-xl text-white/90 mb-10 leading-relaxed">
                  Se você representa uma indústria e busca um parceiro estratégico comprometido com excelência, crescimento e resultados sustentáveis, entre em contato conosco.
                </p>
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-8 bg-accent hover:bg-accent-light text-primary font-bold shadow-glow transition-elegant hover:scale-105"
                  asChild
                >
                  <a href="/#contato">Fale Conosco</a>
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

export default Partners;
