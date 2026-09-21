import React, { useState } from 'react';
import { Sparkles, Star, MapPin, Phone, Mail, ArrowRight, Check } from 'lucide-react';
import { BRAND_STORY } from '../data/content';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /^\S+@\S+\.\S+$/.test(newsletterEmail)) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1f1b19] text-[#e8e0d5] pt-16 pb-12 border-t border-[#38312c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#362f2a]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-2xl font-medium tracking-wider text-white">
                AURA <span className="italic text-[#e3b873] font-light">&</span> GLOW
              </span>
              <Sparkles className="w-4 h-4 text-[#e3b873]" />
            </div>
            <p className="text-xs text-[#b8ada0] leading-relaxed max-w-sm">
              Artisanal 18k solid gold & vermeil jewelry paired with clean clinical botanical skincare. Handcrafted in our San Francisco atelier for timeless radiance.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2d2723] px-3.5 py-2 rounded-xl border border-[#453c36] text-xs">
              <div className="flex text-[#e3b873]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span className="text-[#a3978a]">on Google Reviews</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e3b873]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#b8ada0]">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('collection')} className="hover:text-white transition-colors cursor-pointer">
                  Jewelry & Skincare
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('whom')} className="hover:text-white transition-colors cursor-pointer">
                  Whom We Serve
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Aura & Glow
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-choose-us')} className="hover:text-white transition-colors cursor-pointer">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('reviews')} className="hover:text-white transition-colors cursor-pointer">
                  Google Verified Reviews
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Customer Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Atelier Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e3b873]">
              Atelier & Showroom
            </h4>
            <div className="space-y-2.5 text-xs text-[#b8ada0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e3b873] shrink-0 mt-0.5" />
                <span>
                  {BRAND_STORY.address}, <br />
                  {BRAND_STORY.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e3b873] shrink-0" />
                <a href="tel:+14158902872" className="hover:text-white transition-colors">
                  {BRAND_STORY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#e3b873] shrink-0" />
                <a href="mailto:inquiries@auranglow.com" className="hover:text-white transition-colors">
                  {BRAND_STORY.inquiriesEmail}
                </a>
              </div>
              <p className="text-[11px] text-[#8e8276] pt-1">
                Private styling consultations available Monday through Saturday.
              </p>
            </div>
          </div>

          {/* Newsletter / The Glow Letter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e3b873]">
              The Glow Journal
            </h4>
            <p className="text-xs text-[#b8ada0] leading-relaxed">
              Receive 10% off your first jewelry or skincare order and invitations to private showroom events.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-[#283d2c] border border-[#3e5f44] text-xs text-[#b0e8bc] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#66d17b]" />
                <span>Welcome to the Aura circle!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center rounded-xl bg-[#292320] border border-[#423933] overflow-hidden focus-within:border-[#e3b873]">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-3.5 py-2 text-xs text-white placeholder:text-[#7d7165] focus:outline-none bg-transparent"
                    required
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="px-3 py-2 text-[#e3b873] hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-[10px] text-[#7d7165] block">
                  Unsubscribe anytime. We honor your privacy.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright and disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8e8276]">
          <p>© {new Date().getFullYear()} Aura and Glow LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Ethical Sourcing Statement</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="text-[#e3b873]">Google Verified Merchant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
