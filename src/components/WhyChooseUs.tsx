import React from 'react';
import {
  ShieldCheck,
  Sparkles,
  Leaf,
  Award,
  Gift,
  RefreshCw,
  Check,
  X as XIcon,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#a97e38]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#a97e38]" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-[#a97e38]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#a97e38]" />;
      case 'Gift':
        return <Gift className="w-6 h-6 text-[#a97e38]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-[#a97e38]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#a97e38]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-[#f7f2ea] border-b border-[#ebdccd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a662e] mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>The Aura & Glow Standard</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#241f1c] font-medium tracking-tight">
            Why Choose Aura & Glow
          </h2>
          <p className="mt-4 text-base text-[#5c5249] leading-relaxed">
            We hold ourselves to an uncompromising benchmark of purity, biocompatibility, and artisanal integrity across both our fine jewelry and skin care collections.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-[#faf8f5] rounded-2xl p-7 border border-[#ebdccd] shadow-xs hover:shadow-md hover:border-[#cfbeab] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f2e7d8] flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#ebdccd] text-[#241f1c]">
                    {item.metric}
                  </span>
                </div>

                <h3 className="font-display text-xl text-[#241f1c] font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#61574f] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0e6da] flex items-center gap-1.5 text-xs font-semibold text-[#8a662e]">
                <span>Guaranteed Standard</span>
                <span className="text-xs">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Comparison Table */}
        <div className="mt-16 bg-[#faf8f5] rounded-3xl border border-[#ebdccd] p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h4 className="font-display text-2xl text-[#241f1c] font-medium">
              The Aura & Glow Difference
            </h4>
            <p className="text-xs sm:text-sm text-[#73685f] mt-1">
              How our intentional atelier compares to conventional fast-fashion jewelry & mass cosmetic brands.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#ebdccd]">
                  <th className="py-3 px-4 font-semibold text-[#241f1c]">Quality Criteria</th>
                  <th className="py-3 px-4 font-semibold text-[#8a662e] bg-[#f5eee3] rounded-t-lg">
                    Aura & Glow Atelier
                  </th>
                  <th className="py-3 px-4 font-medium text-[#73685f]">Mass-Market Alternatives</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0e6da]">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#241f1c]">Jewelry Base & Plating</td>
                  <td className="py-3.5 px-4 text-[#241f1c] bg-[#f5eee3]/70 font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2e6d3c]" />
                    <span>Recycled 925 Silver + 2.5μm 18k Vermeil</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#8a7f76] flex items-center gap-2">
                    <XIcon className="w-4 h-4 text-[#a84444]" />
                    <span>Cheap brass / flash plated (tarnishes in weeks)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#241f1c]">Skin Sensitivity Test</td>
                  <td className="py-3.5 px-4 text-[#241f1c] bg-[#f5eee3]/70 font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2e6d3c]" />
                    <span>Certified hypoallergenic & dermatologist safe</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#8a7f76] flex items-center gap-2">
                    <XIcon className="w-4 h-4 text-[#a84444]" />
                    <span>High risk of contact dermatitis & nickel itch</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#241f1c]">Skincare Ingredients</td>
                  <td className="py-3.5 px-4 text-[#241f1c] bg-[#f5eee3]/70 font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2e6d3c]" />
                    <span>Cold-pressed oils, bio-identical ceramides, zero fillers</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#8a7f76] flex items-center gap-2">
                    <XIcon className="w-4 h-4 text-[#a84444]" />
                    <span>70%+ water, cheap mineral oil & synthetic perfume</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#241f1c]">Customer Service & Inquiries</td>
                  <td className="py-3.5 px-4 text-[#241f1c] bg-[#f5eee3]/70 font-semibold flex items-center gap-2 rounded-b-lg">
                    <Check className="w-4 h-4 text-[#2e6d3c]" />
                    <span>Direct atelier concierge response within 12h</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#8a7f76] flex items-center gap-2">
                    <XIcon className="w-4 h-4 text-[#a84444]" />
                    <span>Automated bot responses & no bespoke care</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
