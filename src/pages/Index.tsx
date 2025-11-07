import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ESG from "@/components/ESG";
import Brands from "@/components/Brands";
import Gallery from "@/components/Gallery";
import Presence from "@/components/Presence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ESG />
      <Brands />
      <Gallery />
      <Presence />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
