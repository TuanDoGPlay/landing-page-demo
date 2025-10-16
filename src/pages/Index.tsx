import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGames";
import Footer from "@/components/Footer";
import CompanyGallery from "@/components/CompanyGallery.tsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedGames />
      <CompanyGallery />
      <Footer />
    </div>
  );
};

export default Index;
