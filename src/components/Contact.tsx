import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve para discutir oportunidades de parceria.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Vamos Crescer Juntos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos abertos a parcerias estratégicas, investimentos e oportunidades de expansão. 
              Entre em contato e faça parte do futuro do bem-estar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Fale Conosco</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nome da sua empresa"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos sobre sua proposta ou interesse"
                      required
                      className="mt-1 min-h-32"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    Enviar Mensagem
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-foreground">Email</h4>
                      <p className="text-muted-foreground">contato@grupovamus.com.br</p>
                      <p className="text-muted-foreground">parcerias@grupovamus.com.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-foreground">Telefone</h4>
                      <p className="text-muted-foreground">(92) 99999-9999</p>
                      <p className="text-muted-foreground">(92) 3000-0000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-foreground">Endereço</h4>
                      <p className="text-muted-foreground">Manaus, Amazonas</p>
                      <p className="text-muted-foreground">Brasil</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-hero border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-xl mb-2 text-primary-foreground">Oportunidades</h4>
                  <p className="text-primary-foreground/90 mb-4">
                    Investidores, franqueados e parceiros estratégicos são bem-vindos
                  </p>
                  <Button variant="cta" size="lg">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
