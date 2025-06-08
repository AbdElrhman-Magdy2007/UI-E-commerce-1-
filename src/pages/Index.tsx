import React from 'react'
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryPreview from '../components/CategoryPreview';
import OurCollection from '../components/OurCollection';
import HighlightedStyles from '../components/HighlightedStyles';
import WinterSection from '../components/WinterSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryPreview />
      <OurCollection />
      <HighlightedStyles />
      <WinterSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
