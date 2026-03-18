import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import AboutSection from '../components/AboutSection';
import AudienceSection from '../components/AudienceSection';
import SolutionSection from '../components/SolutionSection';
import ImpactSection from '../components/ImpactSection';
import ServicesSection from '../components/ServicesSection';
import FounderSection from '../components/FounderSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BookingSection from '../components/BookingSection';
import EventsSection from '../components/EventsSection';
import CommunityPartnersSection from '../components/CommunityPartnersSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <AudienceSection />
      <SolutionSection />
      <ImpactSection />
      <ServicesSection />
      <FounderSection />
      <TestimonialsSection />
      <BookingSection />
      <EventsSection />
      <CommunityPartnersSection />
      <Footer />
    </Box>
  );
};

export default LandingPage;
