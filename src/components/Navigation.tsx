import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logoVamus from "@/assets/logo-vamus.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const brands = [
    { name: "Body Monster", path: "/marcas/body-monster" },
    { name: "Atacadão Body Monster", path: "/marcas/atacadao" },
    { name: "FIT ONE Nutrition", path: "/marcas/fit-one" },
    { name: "Body Fit Closet", path: "/marcas/body-fit-closet" },
    { name: "Vyta Verde", path: "/marcas/vyta-verde" },
    { name: "PACCO", path: "/marcas/pacco" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoVamus} alt="Grupo VAMUS" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Marcas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      {brands.map((brand) => (
                        <Link
                          key={brand.path}
                          to={brand.path}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{brand.name}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/investidores"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/investidores") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Investidores
            </Link>
            <Link
              to="/lideranca"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/lideranca") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Liderança
            </Link>
            <Link
              to="/noticias"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/noticias") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Notícias
            </Link>
            <Link
              to="/carreiras"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/carreiras") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Carreiras
            </Link>
            <Link to="/#contato">
              <Button variant="hero" size="sm">
                Contato
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-4">
            <Link to="/" className="block text-sm font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Marcas</div>
              {brands.map((brand) => (
                <Link
                  key={brand.path}
                  to={brand.path}
                  className="block text-sm pl-4 py-1 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {brand.name}
                </Link>
              ))}
            </div>
            <Link to="/investidores" className="block text-sm font-medium" onClick={() => setIsOpen(false)}>
              Investidores
            </Link>
            <Link to="/lideranca" className="block text-sm font-medium" onClick={() => setIsOpen(false)}>
              Liderança
            </Link>
            <Link to="/noticias" className="block text-sm font-medium" onClick={() => setIsOpen(false)}>
              Notícias
            </Link>
            <Link to="/carreiras" className="block text-sm font-medium" onClick={() => setIsOpen(false)}>
              Carreiras
            </Link>
            <Link to="/#contato" onClick={() => setIsOpen(false)}>
              <Button variant="hero" size="sm" className="w-full">
                Contato
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
