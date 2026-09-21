import React, { useState } from 'react';
import { Product } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { WhomSection } from './components/WhomSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GoogleReviews } from './components/GoogleReviews';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { InquiryDrawer } from './components/InquiryDrawer';

export default function App() {
  const [inquiryList, setInquiryList] = useState<Product[]>([]);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [preselectedProductForInquiry, setPreselectedProductForInquiry] = useState<Product | null>(null);

  // Toggle adding/removing item from customer inquiry shortlist
  const handleToggleInquiry = (product: Product) => {
    setInquiryList((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromInquiry = (id: string) => {
    setInquiryList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearInquiryList = () => {
    setInquiryList([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleDirectInquiryFromModal = (product: Product) => {
    // Ensure product is in inquiry list
    if (!inquiryList.some((item) => item.id === product.id)) {
      setInquiryList((prev) => [...prev, product]);
    }
    setPreselectedProductForInquiry(product);
    scrollToSection('contact');
  };

  const handleProceedToFormFromDrawer = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c2623] flex flex-col selection:bg-[#dfc8a5] selection:text-[#1a1715]">
      {/* Sticky Header */}
      <Header
        inquiryList={inquiryList}
        onOpenInquiryDrawer={() => setIsInquiryDrawerOpen(true)}
        onSearchChange={setSearchTerm}
        searchTerm={searchTerm}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero / Home */}
        <Hero
          onExploreClick={() => scrollToSection('collection')}
          onInquireClick={() => scrollToSection('contact')}
        />

        {/* 2. Product Catalog (Jewelry & Skincare Collections) */}
        <ProductCatalog
          onQuickView={(prod) => setActiveModalProduct(prod)}
          onToggleInquiry={handleToggleInquiry}
          inquiryList={inquiryList}
          searchTerm={searchTerm}
        />

        {/* 3. Whom We Create For (Target Audience & Synergy Ritual) */}
        <WhomSection
          onInquireClick={() => scrollToSection('contact')}
        />

        {/* 4. About Us (Artisan Goldsmithing & Clean Botanical Philosophy) */}
        <AboutSection />

        {/* 5. Why Choose Us (Hypoallergenic Guarantee, Ethical Sourcing, Comparison) */}
        <WhyChooseUs />

        {/* 6. Google Verified Presence & Reviews */}
        <GoogleReviews />

        {/* 7. Contact & Customer Inquiries Form */}
        <ContactSection
          inquiryList={inquiryList}
          onRemoveFromInquiry={handleRemoveFromInquiry}
          preselectedProduct={preselectedProductForInquiry}
        />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Quick View & Ritual Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onToggleInquiry={handleToggleInquiry}
        isInInquiry={activeModalProduct ? inquiryList.some((item) => item.id === activeModalProduct.id) : false}
        onDirectInquiryClick={handleDirectInquiryFromModal}
      />

      {/* Inquiry Drawer / Shortlist */}
      <InquiryDrawer
        isOpen={isInquiryDrawerOpen}
        onClose={() => setIsInquiryDrawerOpen(false)}
        inquiryList={inquiryList}
        onRemoveItem={handleRemoveFromInquiry}
        onClearAll={handleClearInquiryList}
        onProceedToForm={handleProceedToFormFromDrawer}
      />
    </div>
  );
}
