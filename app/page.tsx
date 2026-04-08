import HeroSection from '@components/home/HeroSection';
import AboutSummary from '@components/home/AboutSummary';
import FeaturedProjects from '@components/home/FeaturedProjects';
import ServicesSection from '@components/home/ServicesSection';
import TechStack from '@components/home/TechStack';
import WhyChooseUs from '@components/home/WhyChooseUs';
import ProcessSection from '@components/home/ProcessSection';
import ContactCTA from '@components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSummary />
      <FeaturedProjects />
      <ServicesSection />
      <TechStack />
      <WhyChooseUs />
      <ProcessSection />
      <ContactCTA />
    </>
  );
}
