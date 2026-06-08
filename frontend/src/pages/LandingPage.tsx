import TopBar from "@/components/landing/TopBar";
import HeroSection from "@/components/landing/HeroSection";
import WhyChooseSection from "@/components/landing/WhyChooseSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AIAssistantSection from "@/components/landing/AIAssistantSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import MetricsSection from "@/components/landing/MetricsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <BenefitsSection />
        <AIAssistantSection />
        <HowItWorksSection />
        <MetricsSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
