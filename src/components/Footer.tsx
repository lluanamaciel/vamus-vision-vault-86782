import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
              Grupo VAMUS
            </h3>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Promovendo uma vida plena e saudável através de um ecossistema completo de soluções em saúde, bem-estar e performance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("sobre")}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("marcas")}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Nossas Marcas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("presenca")}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Presença
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contato")}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Nossas Marcas</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://bodymonstersuplementos.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Body Monster
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/atacadaosuplementos.am" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Atacadão Suplementos
                </a>
              </li>
              <li className="text-secondary-foreground/80">Quiosques Pacco</li>
              <li>
                <a 
                  href="https://vytaverde.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Vyta Verde
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-secondary-foreground/60">
            © {currentYear} Grupo VAMUS. Todos os direitos reservados.
          </p>
          <p className="text-secondary-foreground/60 text-sm mt-2">
            Manaus, Amazonas - Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
