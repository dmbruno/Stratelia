import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import TargetSection from "@/components/TargetSection";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesSection />
      <StatsSection />
      <ValueProposition />
      <MissionSection />
      <TargetSection />
      <Footer />
    </div>
  );
};

export default Index;
