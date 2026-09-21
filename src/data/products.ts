import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- JEWELRY ---
  {
    id: 'jewel-01',
    name: 'Soleil Radiant Pendant Necklace',
    category: 'jewelry',
    subCategory: 'Necklaces',
    price: 185,
    originalPrice: 220,
    rating: 4.9,
    reviewsCount: 68,
    badge: 'Bestseller',
    shortDescription: 'Handcrafted 18k gold vermeil sunburst pendant with a luminous ethically sourced white sapphire.',
    description: 'Inspired by golden hour dawn, the Soleil Pendant radiates warmth and presence. Forged from thick 18k yellow gold over sterling silver, centering a brilliant-cut, conflict-free sapphire that captures light from every angle.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591475152-4735232d3a36?q=80&w=1000&auto=format&fit=crop'
    ],
    features: [
      '18k Heavy Gold Vermeil (2.5 microns)',
      'Ethically mined conflict-free white sapphire (0.25ct)',
      'Adjustable 16"-18" cable chain with lobster clasp',
      'Hypoallergenic & water-resistant finish'
    ],
    specifications: {
      'Base Metal': 'Recycled 925 Sterling Silver',
      'Plating': '18K Yellow Gold Vermeil (2.5μm)',
      'Gemstone': 'Ethical Lab-Grown White Sapphire',
      'Chain Length': '40cm + 5cm extender',
      'Origin': 'Handcrafted in Studio Atelier'
    },
    ingredientsOrMaterials: [
      'Recycled 925 Sterling Silver base',
      'Thick 18K Gold Vermeil outer casing',
      'Brilliant-cut White Sapphire'
    ],
    ritualGuide: 'Wear solo as your everyday signature or layer with our Aura Satellite Choker for an elevated evening look.',
    inStock: true
  },
  {
    id: 'jewel-02',
    name: 'Lumière Freshwater Pearl Droplets',
    category: 'jewelry',
    subCategory: 'Earrings',
    price: 140,
    rating: 5.0,
    reviewsCount: 42,
    badge: 'Artisan Pick',
    shortDescription: 'Naturally contoured baroque freshwater pearls suspended from organic molten gold huggie hoops.',
    description: 'No two baroque pearls are identical. Carefully hand-selected for iridescent luster and organic curvature, these lightweight huggies sway gracefully, framing your face with subtle modern opulence.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Hand-selected AAA Grade Baroque Freshwater Pearls',
      'Solid hypoallergenic posts safe for sensitive ears',
      'Detachable pearl drops for 2-in-1 styling as simple gold huggies',
      'Nickel-free & cadmium-free certified'
    ],
    specifications: {
      'Pearl Type': 'Natural Cultured Freshwater Baroque Pearl',
      'Pearl Size': 'Approx 11-13mm each',
      'Hoop Diameter': '14mm',
      'Metal': '18k Gold Plated Recycled Brass & Silver'
    },
    ingredientsOrMaterials: [
      'Genuine Freshwater Pearls',
      '18K Gold Vermeil Huggie Hoops',
      'Surgical Grade Titanium Ear Posts'
    ],
    ritualGuide: 'Detachable pearls allow effortless transition: wear the plain gold hoops during morning meetings, then attach the baroque drops for dinner.',
    inStock: true
  },
  {
    id: 'jewel-03',
    name: 'Aethel Braided Sculptural Ring',
    category: 'jewelry',
    subCategory: 'Rings',
    price: 110,
    rating: 4.8,
    reviewsCount: 53,
    badge: 'Trending',
    shortDescription: 'Interlocking ribbon texture symbolizing infinite beauty and inner resilience.',
    description: 'An tactile, comfortable statement ring with a smooth comfort-fit interior. Designed to catch light with its braided undulating ridges.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Ergonomic comfort-fit curved band',
      'High-polish mirror gold finish',
      'Tarnish-resistant protective nanotechnology seal',
      'Available in sizes 5 through 9'
    ],
    specifications: {
      'Band Width': '6.2mm tapering to 4mm',
      'Metal': '18K Yellow Gold Vermeil',
      'Weight': '4.8g',
      'Finish': 'Polished high luster'
    },
    ingredientsOrMaterials: [
      '18k Heavy Gold Vermeil over 925 Sterling Silver'
    ],
    ritualGuide: 'Pairs harmoniously on index or middle finger alongside our Celestial Diamond Eternity Band.',
    inStock: true
  },
  {
    id: 'jewel-04',
    name: 'Elysian Rose Quartz Talisman Bracelet',
    category: 'jewelry',
    subCategory: 'Bracelets',
    price: 165,
    originalPrice: 195,
    rating: 4.9,
    reviewsCount: 37,
    shortDescription: 'Natural rose quartz crystal bezel-set on a delicate figaro chain of polished 18k gold.',
    description: 'Renowned as the stone of unconditional love and gentle healing, our hand-cut rose quartz talisman is bezel-framed to protect the gemstone while letting skin-warmth illuminate its soft blush hues.',
    image: 'https://images.unsplash.com/photo-1611591475152-4735232d3a36?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Natural Brazilian Rose Quartz with bespoke facet cut',
      'Adjustable wrist clasp fitting 6.0" to 7.5"',
      'Secure bezel setting that will not snag silk or knitwear'
    ],
    specifications: {
      'Stone': 'Natural Rose Quartz (8x10mm)',
      'Metal': '18k Gold Vermeil',
      'Closure': 'Spring Ring with Heart Charm'
    },
    ingredientsOrMaterials: [
      'Natural Rose Quartz',
      'Recycled 925 Sterling Silver & 18K Gold'
    ],
    ritualGuide: 'Charge under gentle morning light and wear daily as a quiet anchor for intentional self-kindness.',
    inStock: true
  },

  // --- SKINCARE ---
  {
    id: 'skin-01',
    name: 'Luminous Nectar Botanical Glow Elixir',
    category: 'skincare',
    subCategory: 'Facial Oils & Serums',
    price: 88,
    originalPrice: 98,
    rating: 5.0,
    reviewsCount: 114,
    badge: 'Award Winner',
    shortDescription: 'Cold-pressed squalane, marula seed, and 15% active vitamin C for incandescent dewy radiance.',
    description: 'Our holy-grail facial oil transforms dull, depleted skin in just a few golden drops. Formulated with ultra-stable lipid-soluble Vitamin C (THD Ascorbate), rare kalahari melon seed oil, and plant-derived olive squalane, it locks in moisture without feeling heavy or clogging pores.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1608248597359-247d483424d1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop'
    ],
    features: [
      '15% Stable Vitamin C (Tetrahexyldecyl Ascorbate)',
      '100% Pure Plant Squalane & Organic Marula Oil',
      'Zero synthetic fragrances, parabens, or silicones',
      'Dermatologist tested & non-comedogenic'
    ],
    specifications: {
      'Volume': '30 ml / 1.0 fl. oz.',
      'Skin Types': 'All skin types, especially dry, sensitive, or dull',
      'Scent': 'Subtle natural neroli blossom and sweet orange peel',
      'Shelf Life': '18 months (Store out of direct sunlight)'
    },
    ingredientsOrMaterials: [
      'Plant Squalane (Olive)',
      'Sclerocarya Birrea (Marula) Seed Oil',
      'Tetrahexyldecyl Ascorbate (Vitamin C)',
      'Rosa Canina (Rosehip) Fruit Extract',
      'Citrus Aurantium (Neroli) Flower Oil',
      'Tocopherol (Non-GMO Vitamin E)'
    ],
    ritualGuide: 'Warm 3-4 drops between clean palms and press gently into face, neck, and décolletage every morning before your gold jewelry.',
    inStock: true
  },
  {
    id: 'skin-02',
    name: 'Velvet Cloud Peptide Barrier Cream',
    category: 'skincare',
    subCategory: 'Moisturizers',
    price: 74,
    rating: 4.9,
    reviewsCount: 89,
    badge: 'Bestseller',
    shortDescription: 'Multi-molecular hyaluronic acid, 5 bio-identical ceramides, and soothing gotu kola (Centella).',
    description: 'A deeply restorative yet whipped cloud cream that repairs compromised lipid barriers and locks in 48-hour hydration. Melts effortlessly into skin leaving a luminous, non-greasy satin finish.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Tri-Peptide Complex (Matrixyl 3000 + Copper Peptides)',
      '5 Essential Skin-Identical Ceramides (EOP, NP, AP, AS, NS)',
      'Organic Centella Asiatica & Colloidal Oatmeal',
      'Safe for eczema-prone & sensitized skin'
    ],
    specifications: {
      'Volume': '50 ml / 1.7 oz.',
      'Texture': 'Air-whipped cushion cream',
      'Fragrance': 'Unscented & Essential Oil-Free',
      'Packaging': 'Frosted recyclable amber glass jar'
    },
    ingredientsOrMaterials: [
      'Purified Aloe Leaf Juice',
      'Ceramide Complex NP/AP/EOP',
      'Hydrolyzed Sodium Hyaluronate',
      'Centella Asiatica Extract',
      'Niacinamide (Vitamin B3 3%)',
      'Shea Butter Ethyl Esters'
    ],
    ritualGuide: 'Smooth a dime-sized amount over serum both morning and evening. Provides the perfect hydrated canvas before sunscreen.',
    inStock: true
  },
  {
    id: 'skin-03',
    name: 'Rose Quartz Sculpting Gua Sha & Roller Set',
    category: 'skincare',
    subCategory: 'Tools & Rituals',
    price: 52,
    rating: 4.9,
    reviewsCount: 76,
    shortDescription: 'Hand-carved Grade-A natural Brazilian rose quartz designed to relieve facial tension and drain lymph.',
    description: 'Elevate your skincare regimen into an opulent daily self-care ritual. This dual-sided roller and winged contouring gua sha tool boost micro-circulation, sculpt cheekbones, and enhance serum absorption.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop',
    features: [
      '100% Genuine Certified Rose Quartz Stone (Grade A)',
      'Reinforced welded zinc alloy frame (no squeaks)',
      'Ergonomic scalloped edge for jawline and brow bone sculpt',
      'Includes velvet storage pouch and step-by-step facial mapping chart'
    ],
    specifications: {
      'Material': 'Natural Rose Quartz Gemstone',
      'Hardware': 'Brushed Champagne Gold Finish',
      'Weight': 'Gua Sha 65g, Roller 75g',
      'Cleaning': 'Wash with warm mild soapy water, dry with soft cloth'
    },
    ingredientsOrMaterials: [
      '100% Natural Rose Quartz',
      'Champagne Gold Anodized Zinc Alloy'
    ],
    ritualGuide: 'Store in your refrigerator for 10 minutes before use. Apply Luminous Nectar oil first, then gently glide upward and outward from chin to ear.',
    inStock: true
  },
  {
    id: 'skin-04',
    name: 'Golden Hour Chamomile Cleansing Balm',
    category: 'skincare',
    subCategory: 'Cleansers',
    price: 46,
    rating: 4.8,
    reviewsCount: 64,
    shortDescription: 'Melt-away botanical balm that dissolves waterproof makeup and impurities without stripping skin.',
    description: 'Transforming from a rich golden butter to a silky oil, and finally emulsifying into a gentle milk upon contact with water. Packed with organic blue tansy, German chamomile, and evening primrose oil.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Effortlessly melts SPF, long-wear foundation, and eye makeup',
      'Infused with calming Azulene from German Chamomile',
      'Rinses completely clean without any residue or film',
      'Includes organic bamboo muslin cleansing cloth'
    ],
    specifications: {
      'Volume': '90 ml / 3.0 oz.',
      'Texture': 'Velvety melting butter to milk',
      'pH Level': 'Skin-neutral 5.5'
    },
    ingredientsOrMaterials: [
      'Camellia Sinensis (Green Tea) Seed Oil',
      'Oenothera Biennis (Evening Primrose) Oil',
      'Matricaria Chamomilla Flower Extract',
      'Candelilla Wax',
      'Polyglyceryl-4 Oleate'
    ],
    ritualGuide: 'Massage a scoop onto dry skin for 60 seconds. Dampen the included muslin cloth in warm water and gently sweep across your face.',
    inStock: true
  },

  // --- CURATED GIFT SETS ---
  {
    id: 'set-01',
    name: 'The Aura Radiance Signature Duo',
    category: 'giftsets',
    subCategory: 'Limited Edition Bundles',
    price: 245,
    originalPrice: 273,
    rating: 5.0,
    reviewsCount: 31,
    badge: 'Curated Gift Box',
    shortDescription: 'Our bestselling Soleil Radiant Gold Pendant paired with the Luminous Nectar Vitamin C Glow Elixir.',
    description: 'The ultimate celebration of inner and outer radiance. Beautifully housed in our signature textured keepsake gift box tied with an ivory grosgrain ribbon and personalized calligraphy card.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Soleil Radiant Pendant Necklace (18k Gold Vermeil + White Sapphire)',
      'Luminous Nectar Botanical Glow Elixir (30ml Full Size)',
      'Embossed keepsake luxury drawer gift box with mirror',
      'Complimentary handwritten gift message'
    ],
    specifications: {
      'Packaging': 'FSC-Certified eco-luxury rigid box',
      'Gift Value': '$273 if purchased separately',
      'Savings': 'Save $28 + Free Priority Shipping'
    },
    ingredientsOrMaterials: [
      '18k Gold Vermeil & White Sapphire',
      '100% Organic Botanical Vitamin C & Squalane Elixir'
    ],
    ritualGuide: 'The complete glow routine: massage the serum onto your collarbones and neck, then fasten the shimmering Soleil pendant.',
    inStock: true
  },
  {
    id: 'set-02',
    name: 'Celestial Self-Love Evening Ritual Set',
    category: 'giftsets',
    subCategory: 'Limited Edition Bundles',
    price: 198,
    originalPrice: 226,
    rating: 4.9,
    reviewsCount: 28,
    badge: 'Best for Gifting',
    shortDescription: 'Elysian Rose Quartz Talisman Bracelet accompanied by our Rose Quartz Sculpting Set and Velvet Barrier Cream.',
    description: 'An indulgent ritual set curated to calm the nervous system and nourish skin at twilight. Contains the Talisman Bracelet, Sculpting Set, and 50ml Velvet Cloud Cream.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Elysian Rose Quartz Talisman Bracelet (18k Gold Vermeil)',
      'Rose Quartz Sculpting Roller & Winged Gua Sha Tool',
      'Velvet Cloud Peptide Barrier Cream (50ml)',
      'Satin travel bag and keepsake ritual guide'
    ],
    specifications: {
      'Presentation': 'Deluxe satin-lined magnetic closure presentation box',
      'Edition': 'Signature Atelier Curation'
    },
    ingredientsOrMaterials: [
      'Natural Brazilian Rose Quartz & 18k Vermeil',
      'Tri-Peptide, Ceramide & Centella formulation'
    ],
    ritualGuide: 'Wind down your day with our guided 5-step facial lymph drainage ritual before wearing your gentle Rose Quartz talisman to rest.',
    inStock: true
  }
];
