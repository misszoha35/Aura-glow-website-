import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Search, Menu, X, Phone, MapPin, Star } from 'lucide-react';
import { Product } from '../types';

interface HeaderProps {
  inquiryList: Product[];
  onOpenInquiryDrawer: () => void;
  onSearchChange: (term: string) => void;
  searchTerm: string;
}

export const Header: React.FC<HeaderProps> = ({
  inquiryList,
  onOpenInquiryDrawer,
  onSearchChange,
  searchTerm,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#ebdccd]/80 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#241f1c] text-[#f4efe8] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 tracking-wide font-medium">
            <span className="inline-flex items-center gap-1 text-[#e3b873]">
              <Star className="w-3.5 h-3.5 fill-[#e3b873]" />
              <span>4.9 on Google Reviews (380+ Clients)</span>
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline text-white/80">Complimentary keepsake gift packaging on all orders</span>
          </div>
          <div className="flex items-center gap-4 text-white/70 text-[11px]">
            <span className="flex items-center gap-1 hover:text-white transition-colors">
              <MapPin className="w-3 h-3 text-[#e3b873]" />
              San Francisco Atelier & Showroom
            </span>
            <span className="hidden lg:inline text-white/30">•</span>
            <a href="tel:+14158902872" className="hidden lg:flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-[#e3b873]" />
              (415) 890-2872
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#2c2623] hover:bg-[#efe7dc] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo */}
          <div className="flex flex-col items-center md:items-start cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="flex items-center gap-1.5">
              <span className="font-display text-2xl sm:text-3xl font-medium tracking-wider text-[#241f1c]">
                AURA <span className="italic font-light text-[#a97e38]">&</span> GLOW
              </span>
              <Sparkles className="w-4 h-4 text-[#a97e38] hidden sm:block" />
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#73685f] -mt-0.5">
              Jewelry & Botanical Skincare
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-[#463e38]">
            <button
              onClick={() => scrollToSection('collection')}
              className="hover:text-[#a97e38] transition-colors py-1 cursor-pointer"
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection('whom')}
              className="hover:text-[#a97e38] transition-colors py-1 cursor-pointer"
            >
              Whom We Serve
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#a97e38] transition-colors py-1 cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="hover:text-[#a97e38] transition-colors py-1 cursor-pointer"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="hover:text-[#a97e38] transition-colors py-1 cursor-pointer"
            >
              Google Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#a97e38] transition-colors py-1 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Input / Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-[#efe8de] rounded-full px-3 py-1.5 border border-[#e0d3c1]">
                  <Search className="w-4 h-4 text-[#73685f] mr-2" />
                  <input
                    id="header-search-input"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search jewelry, serums..."
                    className="bg-transparent text-xs sm:text-sm text-[#241f1c] focus:outline-none w-32 sm:w-48 placeholder:text-[#8e847b]"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      onSearchChange('');
                    }}
                    className="text-[#73685f] hover:text-[#241f1c]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  id="open-search-btn"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search collection"
                  className="p-2 rounded-full text-[#463e38] hover:text-[#241f1c] hover:bg-[#efe7dc] transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Inquiries Bag Shortlist Drawer Trigger */}
            <button
              id="inquiry-drawer-btn"
              onClick={onOpenInquiryDrawer}
              aria-label="View shortlisted inquiry items"
              className="relative p-2 rounded-full text-[#463e38] hover:text-[#241f1c] hover:bg-[#efe7dc] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {inquiryList.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#a97e38] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {inquiryList.length}
                </span>
              )}
            </button>

            {/* Primary CTA: Customer Inquiry */}
            <button
              id="header-inquire-cta"
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#241f1c] hover:bg-[#3d3530] rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f4eee6] border-b border-[#ebdccd] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 font-medium text-base text-[#3d3530]">
            <button
              onClick={() => scrollToSection('collection')}
              className="text-left py-2 border-b border-[#e6dcce] flex justify-between items-center"
            >
              <span>Our Collections (Jewelry & Skincare)</span>
              <span className="text-xs text-[#a97e38] uppercase">Explore</span>
            </button>
            <button
              onClick={() => scrollToSection('whom')}
              className="text-left py-2 border-b border-[#e6dcce]"
            >
              Whom We Serve
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 border-b border-[#e6dcce]"
            >
              About Aura & Glow
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-left py-2 border-b border-[#e6dcce]"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-left py-2 border-b border-[#e6dcce] flex justify-between items-center"
            >
              <span>Google Reviews (4.9★)</span>
              <span className="text-xs bg-[#ebdccd] px-2 py-0.5 rounded text-[#241f1c]">380+ Reviews</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 text-[#a97e38] font-semibold"
            >
              Contact Customer Inquiries
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 bg-[#241f1c] text-[#f4efe8] rounded-full text-center text-sm font-semibold tracking-wider uppercase shadow-md"
            >
              Book Consultation / Inquire
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
