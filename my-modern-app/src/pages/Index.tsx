
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryPreview from '../components/CategoryPreview';
import OurCollection from '../components/OurCollection';
import HighlightedStyles from '../components/HighlightedStyles';
import WinterSection from '../components/WinterSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
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
