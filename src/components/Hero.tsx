import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Gem, Leaf, Star } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onInquireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onInquireClick }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#f7f3ec] to-[#faf8f5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#ebdccd]">
      {/* Delicate background decorative elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#e7d7c1]/40 via-[#f0e2cf]/50 to-[#ecdac5]/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline / Badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 bg-[#f0e7dc] border border-[#ded1bf] px-4 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#a97e38]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5c5046]">
              Aura & Glow Atelier • San Francisco
            </span>
            <span className="text-[#a97e38]">•</span>
            <div className="flex items-center text-xs font-medium text-[#241f1c]">
              <Star className="w-3.5 h-3.5 fill-[#e3b873] text-[#e3b873] mr-1" />
              <span>4.9 on Google</span>
            </div>
          </div>
        </div>

        {/* Headline and Narrative */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#241f1c] font-normal tracking-tight leading-[1.15]">
            Sacred Adornments. <br className="hidden sm:inline" />
            <span className="italic font-light text-[#876229]">Luminous Botanical</span> Skin.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#5e544c] font-normal leading-relaxed max-w-2xl mx-auto">
            Aura & Glow harmonizes handcrafted 18k solid gold & vermeil jewelry with 100% clean, dermatologist-tested clinical skincare. Designed for sensitive souls who seek everyday timeless opulence.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-explore-collection-btn"
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#241f1c] text-[#f7f4ee] font-medium text-sm tracking-wider uppercase shadow-md hover:bg-[#3b332e] hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-inquire-btn"
              onClick={onInquireClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/80 backdrop-blur-xs text-[#241f1c] border border-[#d6c7b4] font-medium text-sm tracking-wider uppercase hover:bg-[#f3ece2] transition-all cursor-pointer"
            >
              <span>Customer Inquiries</span>
            </button>
          </div>
        </div>

        {/* Dual Visual Showcase: Jewelry + Skincare */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mt-6">
          {/* Jewelry Card */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#f0e7db] border border-[#ded1bf] shadow-sm hover:shadow-md transition-all">
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop"
                alt="Aura and Glow Handcrafted 18k Gold Fine Jewelry"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/95 to-[#faf8f5]/80">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a662e]">
                  <Gem className="w-3.5 h-3.5" />
                  Fine Jewelry
                </span>
                <span className="text-xs text-[#73685f]">From $110</span>
              </div>
              <h3 className="font-display text-2xl text-[#241f1c] font-medium">
                Ethical Gold & Baroque Pearls
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#61574f] leading-relaxed">
                Recycled 925 sterling silver dipped in 2.5 microns of 18k gold. Hypoallergenic, water-friendly, and non-reactive.
              </p>
            </div>
          </div>

          {/* Skincare Card */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#f0e7db] border border-[#ded1bf] shadow-sm hover:shadow-md transition-all">
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop"
                alt="Aura and Glow Clean Botanical Skincare Products"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/95 to-[#faf8f5]/80">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a662e]">
                  <Leaf className="w-3.5 h-3.5" />
                  Botanical Skincare
                </span>
                <span className="text-xs text-[#73685f]">From $46</span>
              </div>
              <h3 className="font-display text-2xl text-[#241f1c] font-medium">
                Radiant Elixirs & Barrier Care
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#61574f] leading-relaxed">
                Cold-pressed organic seed oils, lipid vitamin C, and multi-ceramides. Formulated for sensitive skin and deep hydration.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-12 pt-8 border-t border-[#e8ded1] grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#f2e9dc] flex items-center justify-center text-[#8a662e] mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-[#241f1c] uppercase tracking-wide">100% Hypoallergenic</span>
            <span className="text-[11px] text-[#73685f]">Zero nickel, lead, or allergens</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#f2e9dc] flex items-center justify-center text-[#8a662e] mb-2">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-[#241f1c] uppercase tracking-wide">Clean Formulations</span>
            <span className="text-[11px] text-[#73685f]">Dermatologist clinically tested</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#f2e9dc] flex items-center justify-center text-[#8a662e] mb-2">
              <Gem className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-[#241f1c] uppercase tracking-wide">Artisan Craft</span>
            <span className="text-[11px] text-[#73685f]">Recycled 18K solid vermeil</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#f2e9dc] flex items-center justify-center text-[#8a662e] mb-2">
              <Star className="w-5 h-5 fill-[#e3b873] text-[#e3b873]" />
            </div>
            <span className="text-xs font-semibold text-[#241f1c] uppercase tracking-wide">4.9 Google Rating</span>
            <span className="text-[11px] text-[#73685f]">380+ Verified Client Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};
