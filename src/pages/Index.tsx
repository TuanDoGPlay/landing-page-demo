import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGames";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedGames />
      <Footer />
    </div>
  );
};

export default Index;
