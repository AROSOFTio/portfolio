import Hero from '@components/portfolio/Hero';
import Overview from '@components/portfolio/Overview';
import FeaturedProjects from '@components/portfolio/FeaturedProjects';
import Services from '@components/portfolio/Services';
import CapabilityGrid from '@components/portfolio/CapabilityGrid';
import Process from '@components/portfolio/Process';
import Cta from '@components/portfolio/Cta';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Hero />
      <Overview />
      <FeaturedProjects />
      <Services />
      <CapabilityGrid />
      <Process />
      <Cta />
    </div>
  );
}
