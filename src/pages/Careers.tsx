import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";

const Careers = () => {
  // Link para o sistema de recrutamento - atualize com o link real quando disponível
  const RECRUITMENT_LINK = "[INSERIR LINK DO SISTEMA DE RECRUTAMENTO AQUI]";
  
  const jobs = [
    {
      title: "Gerente de Loja - Body Monster",
      location: "Manaus, AM",
      type: "Tempo Integral",
      department: "Varejo",
      description: "Liderar operações de loja, gestão de equipe e garantir excelência no atendimento ao cliente."
    },
    {
      title: "Nutricionista Esportivo",
      location: "Manaus, AM",
      type: "Tempo Integral",
      department: "Saúde e Bem-estar",
      description: "Atendimento personalizado a clientes, desenvolvimento de planos nutricionais e consultoria em suplementação."
    },
    {
      title: "Coordenador de Marketing Digital",
      location: "Remoto",
      type: "Tempo Integral",
      department: "Marketing",
      description: "Desenvolver e executar estratégias de marketing digital para todas as marcas do grupo."
    },
    {
      title: "Analista Financeiro",
      location: "Manaus, AM",
      type: "Tempo Integral",
      department: "Financeiro",
      description: "Análise financeira, controle de custos e suporte à gestão estratégica do grupo."
    },
    {
      title: "Vendedor - Body Fit Closet",
      location: "Manaus, AM",
      type: "Tempo Integral",
      department: "Varejo",
      description: "Atendimento ao cliente, vendas e gestão de estoque na linha de moda fitness."
    },
    {
      title: "Desenvolvedor Full Stack",
      location: "Remoto",
      type: "Tempo Integral",
      department: "Tecnologia",
      description: "Desenvolvimento e manutenção de plataformas digitais e sistemas internos do grupo."
    }
  ];

  const benefits = [
    "Plano de saúde e odontológico",
    "Vale-alimentação e vale-refeição",
    "Descontos em produtos do grupo",
    "Programa de desenvolvimento profissional",
    "Ambiente colaborativo e inovador",
    "Oportunidades de crescimento"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
                Carreiras no Grupo VAMUS
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Faça parte de uma equipe que transforma vidas através da saúde e bem-estar
              </p>
              <Button 
                variant="cta" 
                size="lg"
                asChild
              >
                <a href={RECRUITMENT_LINK} target="_blank" rel="noopener noreferrer">
                  Ver Todas as Vagas
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por Que Trabalhar Conosco?
              </h2>
              <p className="text-xl text-muted-foreground">
                No Grupo VAMUS, investimos no crescimento dos nossos colaboradores e 
                oferecemos um ambiente dinâmico, inovador e com oportunidades reais de desenvolvimento.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Benefícios</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Vagas Abertas
              </h2>
              <div className="space-y-6">
                {jobs.map((job, index) => (
                  <Card key={index} className="border-border hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-3">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {job.type}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" />
                              {job.department}
                            </Badge>
                          </div>
                        </div>
                        <Button 
                          variant="hero" 
                          className="group md:flex-shrink-0"
                          asChild
                        >
                          <a href={RECRUITMENT_LINK} target="_blank" rel="noopener noreferrer">
                            Candidatar-se
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto gradient-hero border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                  Não Encontrou a Vaga Ideal?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Envie seu currículo para nosso banco de talentos e seja considerado 
                  para futuras oportunidades no Grupo VAMUS.
                </p>
                <Button 
                  variant="cta" 
                  size="lg"
                  asChild
                >
                  <a href={RECRUITMENT_LINK} target="_blank" rel="noopener noreferrer">
                    Cadastrar Currículo
                  </a>
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

export default Careers;
