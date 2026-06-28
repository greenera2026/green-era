import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Scrolls to the hash element after route changes
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to let the page render before scrolling
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash, pathname]);

  return null;
};
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
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
import ProductsPage from "./pages/ProductsPage";
import CategoryPage from "./pages/CategoryPage";
import FloatingButtons from "./components/FloatingButtons";

const HomePage = () => (
  <>
    <HeroSection />
    <WhyChooseUs />
    <OurProcess />
    <ProductCategories />
    <SustainabilityBanner />
    <IndustriesWeServe />
    <QualitySection />
    <WholesaleSection />
    <TestimonialSection />
    <FAQSection />
    <ContactSection />
  </>
);

const App = () => {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <div className="pt-[116px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
        </Routes>
      </div>
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App;