import React from 'react';
import { Sparkles, Compass, ShieldCheck, Heart, Award } from 'lucide-react';
import { BRAND_STORY } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-[#ebdccd]">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
                alt="Aura and Glow Jewelry Artisan Craftsmanship"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping small accent card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 w-3/5 sm:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#faf8f5] bg-[#f4efe8]">
              <img
                src="https://images.unsplash.com/photo-1608248597359-247d483424d1?q=80&w=600&auto=format&fit=crop"
                alt="Botanical Skincare Extraction Laboratory"
                className="w-full aspect-square object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-[#241f1c] text-white text-center">
                <span className="text-[10px] uppercase tracking-widest text-[#e3b873] font-semibold block">
                  Ethical Atelier
                </span>
                <span className="text-xs font-medium">Est. {BRAND_STORY.foundingYear} • San Francisco</span>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#ebdccd]/60 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 lg:pl-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a662e] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#241f1c] font-medium tracking-tight leading-[1.2]">
              About Aura & Glow
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#524941] leading-relaxed font-light">
              Founded on the belief that how you treat your skin and how you adorn it are deeply intertwined reflections of self-respect.
            </p>

            <div className="mt-6 space-y-4 text-sm text-[#61574f] leading-relaxed">
              <p>
                Too often, fine jewelry irritates sensitive ears and necks with hidden nickel and toxic base metals, while conventional luxury skincare hides harsh petrochemicals behind synthetic perfume.
              </p>
              <p>
                At <strong>Aura & Glow</strong>, our San Francisco atelier bridges this divide. We combine the ancestral art of lost-wax goldsmithing with contemporary botanical cosmetic biochemistry.
              </p>
              <p>
                Each creation is either forged with recycled 18k solid vermeil and conflict-free gemstones or formulated with pure cold-pressed lipids and active plant vitamins. No shortcuts. No toxic fillers. Just enduring luminosity.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#ebdccd]">
              <div>
                <span className="font-display text-2xl text-[#241f1c] font-semibold block">100%</span>
                <span className="text-xs text-[#73685f] mt-0.5 block">Recycled 925 & 18k Vermeil</span>
              </div>
              <div>
                <span className="font-display text-2xl text-[#241f1c] font-semibold block">Zero</span>
                <span className="text-xs text-[#73685f] mt-0.5 block">Synthetic perfumes or nickel</span>
              </div>
              <div>
                <span className="font-display text-2xl text-[#241f1c] font-semibold block">380+</span>
                <span className="text-xs text-[#73685f] mt-0.5 block">5-Star Google Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
