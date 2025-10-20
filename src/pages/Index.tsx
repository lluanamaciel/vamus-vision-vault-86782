import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Presence from "@/components/Presence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Brands />
      <Presence />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
