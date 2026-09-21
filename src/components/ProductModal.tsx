import React, { useState } from 'react';
import { X, Star, Check, Sparkles, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onToggleInquiry: (product: Product) => void;
  isInInquiry: boolean;
  onDirectInquiryClick: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onToggleInquiry,
  isInInquiry,
  onDirectInquiryClick,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const images = [product.image, ...(product.additionalImages || [])];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1b1715]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-[#faf8f5] w-full max-w-4xl rounded-2xl shadow-2xl border border-[#ebdccd] overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#241f1c] shadow-sm transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="md:w-1/2 bg-[#f4ede3] p-6 flex flex-col justify-between">
          <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-xs mb-4">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === img ? 'border-[#a97e38] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          )}

          {/* Guarantee Pill */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#6e6359] bg-[#ebdccd]/50 py-2 px-3 rounded-lg">
            <ShieldCheck className="w-4 h-4 text-[#8a662e]" />
            <span>30-Day Satisfaction Guarantee • Certified Ethical</span>
          </div>
        </div>

        {/* Right Column: Information & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8a662e]">
                {product.category === 'jewelry' ? 'Fine Jewelry Collection' : product.category === 'skincare' ? 'Botanical Skincare' : 'Limited Gift Box'}
              </span>
              <div className="flex items-center gap-1 text-xs font-medium text-[#241f1c]">
                <Star className="w-3.5 h-3.5 fill-[#e3b873] text-[#e3b873]" />
                <span>{product.rating}</span>
                <span className="text-[#8e847b]">({product.reviewsCount} Google & client reviews)</span>
              </div>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-[#241f1c] font-medium">
              {product.name}
            </h3>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-2xl font-semibold text-[#241f1c]">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#9c9187] line-through">
                  ${product.originalPrice}
                </span>
              )}
              <span className="text-xs text-[#2e6d3c] font-medium bg-[#e7f3ea] px-2 py-0.5 rounded">
                In Stock at SF Atelier
              </span>
            </div>

            <p className="mt-4 text-sm text-[#5a5047] leading-relaxed">
              {product.description}
            </p>

            {/* Ritual Guidance / Styling */}
            {product.ritualGuide && (
              <div className="mt-5 p-3.5 rounded-xl bg-[#f5eee4] border border-[#e4d6c4]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8a662e] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Aura Ritual</span>
                </div>
                <p className="text-xs text-[#524941] italic">
                  "{product.ritualGuide}"
                </p>
              </div>
            )}

            {/* Features list */}
            <div className="mt-5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#38312c] mb-2">
                Craftsmanship & Formulation Highlights
              </h5>
              <ul className="space-y-1.5">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#524941]">
                    <span className="text-[#8a662e] mt-0.5">✦</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications */}
            <div className="mt-5 pt-4 border-t border-[#ebdccd]">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#38312c] mb-2">
                Specifications
              </h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="bg-white/80 p-2 rounded-lg border border-[#eee4d6]">
                    <span className="text-[#8a7f76] block text-[10px] uppercase font-medium">{key}</span>
                    <span className="text-[#241f1c] font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="mt-8 pt-4 border-t border-[#ebdccd] flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onToggleInquiry(product)}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isInInquiry
                  ? 'bg-[#e4d6c4] text-[#241f1c] border border-[#cfbeab]'
                  : 'bg-white text-[#241f1c] border border-[#cfbeab] hover:bg-[#f3ece2]'
              }`}
            >
              {isInInquiry ? (
                <>
                  <Check className="w-4 h-4 text-[#241f1c]" />
                  <span>Added to Inquiry Shortlist</span>
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4 text-[#8a662e]" />
                  <span>Save to Inquiries</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                onDirectInquiryClick(product);
                onClose();
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-[#241f1c] text-[#faf8f5] hover:bg-[#3b332e] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Inquire with Atelier</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
