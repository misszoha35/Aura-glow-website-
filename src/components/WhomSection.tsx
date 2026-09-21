import React, { useState } from 'react';
import { WHOM_AUDIENCE } from '../data/content';
import { Sparkles, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

interface WhomSectionProps {
  onInquireClick: () => void;
}

export const WhomSection: React.FC<WhomSectionProps> = ({ onInquireClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="whom" className="py-20 bg-[#f4efe8] border-y border-[#ebdccd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a662e] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Intentional Craftsmanship</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#241f1c] font-medium tracking-tight">
            Whom We Create For
          </h2>
          <p className="mt-4 text-base text-[#61574f] leading-relaxed">
            Aura & Glow was born for those who seek depth over disposable trends. We curate for individuals who honor their physical vessel with both pure botanical nourishment and ethical personal adornment.
          </p>
        </div>

        {/* Audience Personas Tabs / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WHOM_AUDIENCE.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between bg-[#faf8f5] rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md ${
                activeTab === idx ? 'border-[#a97e38] ring-1 ring-[#a97e38]/30' : 'border-[#ebdccd]'
              }`}
              onMouseEnter={() => setActiveTab(idx)}
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#eee4d6]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#241f1c]/90 backdrop-blur-xs text-[#faf8f5] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {item.tag}
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#241f1c] font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5e534a] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8a662e] bg-[#f5eee4] px-3 py-2 rounded-xl mb-4">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#8a662e]" />
                    <span>{item.highlight}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#f0e7db]">
                  <p className="text-xs italic text-[#786e66] leading-relaxed">
                    {item.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Aura Radiance Ritual Strip */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#241f1c] via-[#2f2824] to-[#241f1c] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#e3b873] text-xs font-semibold tracking-widest uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>The Aura & Glow Daily Synergy</span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-normal text-[#f4efe8]">
              Where Skin Care Meets Jewelry Adornment
            </h4>
            <p className="mt-2 text-sm text-[#d4c9bd] leading-relaxed">
              Step 1: Awaken skin with our cold-pressed Luminous Nectar Vitamin C serum. <br />
              Step 2: Sculpt and release tension with the chilled Rose Quartz Gua Sha. <br />
              Step 3: Fasten your 18k Soleil Vermeil Pendant against glowing skin for effortless everyday elegance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={onInquireClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#a97e38] hover:bg-[#b88c45] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              <span>Personalized Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
