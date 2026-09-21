import React from 'react';
import { Star, Plus, Check, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onToggleInquiry: (product: Product) => void;
  isInInquiry: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onToggleInquiry,
  isInInquiry,
}) => {
  return (
    <div className="group flex flex-col h-full bg-[#faf8f5] rounded-2xl border border-[#ebdccd] overflow-hidden hover:border-[#cfbeab] hover:shadow-md transition-all duration-300">
      {/* Image Container with Badges */}
      <div className="relative aspect-square overflow-hidden bg-[#f3ece2]">
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block bg-[#241f1c]/90 backdrop-blur-xs text-[#faf8f5] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-xs">
              {product.badge}
            </span>
          </div>
        )}

        <button
          onClick={() => onQuickView(product)}
          className="w-full h-full cursor-pointer focus:outline-none"
          aria-label={`View details for ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 bg-white/95 backdrop-blur-xs text-[#241f1c] text-xs font-semibold py-2.5 px-3 rounded-xl shadow-md hover:bg-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#8a662e]" />
            <span>Quick View & Ritual</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Subcategory & Rating */}
          <div className="flex items-center justify-between text-xs text-[#73685f] mb-1.5">
            <span className="uppercase tracking-wider text-[11px] font-medium text-[#8a662e]">
              {product.subCategory}
            </span>
            <div className="flex items-center gap-1 font-medium text-[#241f1c]">
              <Star className="w-3 h-3 fill-[#e3b873] text-[#e3b873]" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-[#8e847b]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h4
            onClick={() => onQuickView(product)}
            className="font-display text-lg sm:text-xl font-medium text-[#241f1c] group-hover:text-[#8a662e] transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h4>

          {/* Short Description */}
          <p className="mt-1.5 text-xs text-[#61574f] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key Feature Pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.features.slice(0, 2).map((feat, index) => (
              <span
                key={index}
                className="inline-block text-[10px] bg-[#f5efe6] text-[#5e544c] px-2 py-0.5 rounded-md font-medium"
              >
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Inquiry Action */}
        <div className="mt-5 pt-4 border-t border-[#f0e8dc] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-base sm:text-lg text-[#241f1c]">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#9c9187] line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={() => onToggleInquiry(product)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              isInInquiry
                ? 'bg-[#e4d6c4] text-[#241f1c] border border-[#cfbeab]'
                : 'bg-[#241f1c] text-white hover:bg-[#3d3530]'
            }`}
          >
            {isInInquiry ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#241f1c]" />
                <span>Shortlisted</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Inquire</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
