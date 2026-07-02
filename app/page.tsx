import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyWebsite from '@/components/WhyWebsite';
import Features from '@/components/Features';
import WhyChoose from '@/components/WhyChoose';
import TechSection from '@/components/TechSection';
import Portfolio from '@/components/Portfolio';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import EarlyAccessCTA from '@/components/EarlyAccessCTA';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sortech — Professional Web Design Agency',
  description:
    'Sortech builds professional websites that help businesses grow online. Web design, e-commerce, SEO, and more. Get a free quote today.',
};

export default function Home(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Why Your Business Needs a Website */}
        <WhyWebsite />

        {/* 4. Services */}
        <Features />

        {/* 5. Why Choose Sortech */}
        <WhyChoose />

        {/* 6. Our Process */}
        <TechSection />

        {/* 7. Featured Projects */}
        <Portfolio />

        {/* 8. Industries We Serve */}
        <Industries />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Pricing */}
        <Pricing />

        {/* 11. FAQ */}
        <FAQ />

        {/* 12. Final CTA */}
        <FinalCTA />

        {/* 13. Quote Form */}
        <EarlyAccessCTA />
      </main>
      <Footer />
    </>
  );
}
