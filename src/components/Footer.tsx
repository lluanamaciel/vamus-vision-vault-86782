import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-light)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-light)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-black mb-6">
              Grupo <span className="text-accent">VAMUS</span>
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-md leading-relaxed text-lg font-light">
              Promovendo uma vida plena e saudável através de um ecossistema completo de soluções em saúde, bem-estar e performance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center hover:bg-accent-light transition-elegant shadow-lg hover:scale-110">
                <Facebook className="h-6 w-6 text-primary" />
              </a>
              <a href="#" className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center hover:bg-accent-light transition-elegant shadow-lg hover:scale-110">
                <Instagram className="h-6 w-6 text-primary" />
              </a>
              <a href="#" className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center hover:bg-accent-light transition-elegant shadow-lg hover:scale-110">
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
              <a href="#" className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center hover:bg-accent-light transition-elegant shadow-lg hover:scale-110">
                <Mail className="h-6 w-6 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-accent">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("sobre")}
                  className="text-primary-foreground/90 hover:text-accent transition-elegant text-lg font-medium"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("marcas")}
                  className="text-primary-foreground/90 hover:text-accent transition-elegant text-lg font-medium"
                >
                  Nossas Marcas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("presenca")}
                  className="text-primary-foreground/90 hover:text-accent transition-elegant text-lg font-medium"
                >
                  Presença
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contato")}
                  className="text-primary-foreground/90 hover:text-accent transition-elegant text-lg font-medium"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-accent">Nossas Marcas</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://bodymonstersuplementos.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-accent transition-elegant text-lg font-medium"
                >
                  Body Monster
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/atacadaosuplementos.am" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-accent transition-elegant text-lg font-medium"
                >
                  Atacadão Suplementos
                </a>
              </li>
              <li className="text-primary-foreground/90 text-lg font-medium">FIT ONE Nutrition</li>
              <li className="text-primary-foreground/90 text-lg font-medium">Body Fit Closet</li>
              <li className="text-primary-foreground/90 text-lg font-medium">PACCO</li>
              <li>
                <a 
                  href="https://vytaverde.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-accent transition-elegant text-lg font-medium"
                >
                  Vyta Verde
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-10 text-center">
          <p className="text-primary-foreground/90 font-semibold text-lg mb-2">
            © {currentYear} Grupo VAMUS. Todos os direitos reservados.
          </p>
          <p className="text-accent font-bold text-base">
            Liderança. Inovação. Crescimento Sustentável.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
