import React, { useState, useMemo } from 'react';
import { Sparkles, SlidersHorizontal, Gem, Leaf, Gift } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  onQuickView: (product: Product) => void;
  onToggleInquiry: (product: Product) => void;
  inquiryList: Product[];
  searchTerm: string;
  onSelectCategory?: (category: ProductCategory) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onQuickView,
  onToggleInquiry,
  inquiryList,
  searchTerm,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const categories: { id: ProductCategory; label: string; icon?: React.ReactNode; count: number }[] = [
    { id: 'all', label: 'All Collections', count: PRODUCTS.length },
    {
      id: 'jewelry',
      label: 'Fine Jewelry',
      icon: <Gem className="w-3.5 h-3.5" />,
      count: PRODUCTS.filter((p) => p.category === 'jewelry').length,
    },
    {
      id: 'skincare',
      label: 'Radiant Skincare',
      icon: <Leaf className="w-3.5 h-3.5" />,
      count: PRODUCTS.filter((p) => p.category === 'skincare').length,
    },
    {
      id: 'giftsets',
      label: 'Gift Sets & Rituals',
      icon: <Gift className="w-3.5 h-3.5" />,
      count: PRODUCTS.filter((p) => p.category === 'giftsets').length,
    },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchTerm.trim() === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.features.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, searchTerm, sortBy]);

  const isInInquiry = (id: string) => inquiryList.some((item) => item.id === id);

  return (
    <section id="collection" className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a662e] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Atelier Pieces</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#241f1c] font-medium tracking-tight">
            Handcrafted Jewelry & Botanical Formulations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#61574f] leading-relaxed">
            Every piece is designed to be lived in: hypoallergenic solid vermeil adornments and cold-pressed bio-active skin solutions.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-[#ebdccd] mb-10">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer ${
                    active
                      ? 'bg-[#241f1c] text-[#faf8f5] shadow-sm'
                      : 'bg-[#f2ece2] text-[#4f453d] hover:bg-[#ebdccd]'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      active ? 'bg-white/20 text-white' : 'bg-[#e4d7c6] text-[#241f1c]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2 text-xs text-[#5e544c]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8a662e]" />
            <span className="font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#f2ece2] border border-[#e2d5c3] text-[#241f1c] text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#8a662e] cursor-pointer"
            >
              <option value="featured">Featured Curations</option>
              <option value="rating">Highest Rated (Google/Clients)</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Search Notice if active */}
        {searchTerm && (
          <div className="mb-6 p-3 rounded-xl bg-[#f2ece2] flex items-center justify-between text-xs text-[#524941]">
            <span>
              Showing results for: <strong className="text-[#241f1c]">"{searchTerm}"</strong> ({filteredProducts.length} items found)
            </span>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onToggleInquiry={onToggleInquiry}
                isInInquiry={isInInquiry(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#f7f2ea] rounded-2xl border border-dashed border-[#d9cab7]">
            <p className="text-base text-[#5c534a]">No creations found matching your filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#241f1c] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#3b332e] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
