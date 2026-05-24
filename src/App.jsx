import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import IndustriesWeServe from "./components/IndustriesWeServe";
import Navbar from "./components/Navbar"
import OurProcess from "./components/OurProcess";
import ProductCategories from "./components/ProductCategories";
import QualitySection from "./components/QualitySection";
import SustainabilityBanner from "./components/SustainabilityBanner";
import TestimonialSection from "./components/TestimonialSection";
import WholesaleSection from "./components/WholesaleSection";
import WhyChooseUs from "./components/WhyChooseUs";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[116px]">
        <HeroSection />
        <WhyChooseUs />
        <OurProcess />
        <ProductCategories />
        <FeaturedProducts />
        <SustainabilityBanner />
        <IndustriesWeServe />
        <QualitySection />
        <WholesaleSection />
        <TestimonialSection />
        <FAQSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}

export default App;