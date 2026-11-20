import LandingHeader from './LandingHeader';
import LandingHero from './LandingHero';
import LandingSections from './LandingSections';
import LandingFooter from './LandingFooter';
import BackToTop from './BackToTop';
import WhatsAppFloat from './WhatsAppFloat';
import PageBackground from './PageBackground';

export default function PortfolioLanding() {
  return (
    <div className="dark min-h-screen bg-transparent font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
      <PageBackground />
      <LandingHeader />
      <main className="relative w-full pt-20 min-h-screen">
        <div className="flex flex-col w-full">
          <LandingHero />
          <LandingSections />
          <BackToTop />
          <WhatsAppFloat />
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}