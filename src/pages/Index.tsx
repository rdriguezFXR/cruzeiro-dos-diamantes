import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PrizeDetails from "@/components/PrizeDetails";
import Terms from "@/components/Terms";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <PrizeDetails />
      <Terms />
      <Footer />
    </div>
  );
};

export default Index;
