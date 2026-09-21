import { CustomerReview, FAQItem } from '../types';

export const BRAND_STORY = {
  name: "Aura & Glow",
  tagline: "Artisanal Jewelry & Radiant Skincare Atelier",
  headline: "Where Sacred Adornment Meets Botanical Luminosity",
  mission: "We believe true radiance is a holistic synergy. What you drape over your skin should be as noble, pure, and intentional as what you nourish it with.",
  foundingYear: "2021",
  rating: "4.9",
  totalReviews: "384+",
  googleRating: 4.9,
  address: "482 L’Aura Boulevard, Suite 104, Design District",
  city: "San Francisco, CA 94103",
  phone: "+1 (415) 890-2872",
  email: "concierge@auranglow.com",
  inquiriesEmail: "inquiries@auranglow.com",
  hours: [
    { days: "Monday – Friday", time: "10:00 AM – 6:30 PM PST" },
    { days: "Saturday", time: "11:00 AM – 6:00 PM PST" },
    { days: "Sunday", time: "By Private Appointment Only" }
  ]
};

export const WHOM_AUDIENCE = [
  {
    id: "connoisseur",
    tag: "For The Modern Connoisseur",
    title: "Timeless Adornment Without Compromise",
    description: "For individuals who demand sustainable luxury: jewelry made of recycled 18K solid gold and vermeil, pairing seamlessly with sensitive skin and conscious values.",
    highlight: "100% Recycled Precious Metals & Conflict-Free Gems",
    quote: "“Jewelry that doesn’t tarnish in the shower, doesn’t irritate my sensitive skin, and gets compliments daily.”",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "glow-seeker",
    tag: "For The Skin Purist",
    title: "Clinical Potency Rooted In Botanical Alchemy",
    description: "For those tired of 12-step chemical routines. We formulate minimalist, multi-active botanical elixirs that restore your skin barrier and bring forth a healthy, incandescent glow from within.",
    highlight: "Zero Fillers, Waterless Cold-Pressed Actives",
    quote: "“Within 10 days, my persistent redness faded into this supple, dew-drenched glow. I threw away my foundation.”",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gifting",
    tag: "For The Meaningful Gifter",
    title: "Heirlooms and Keepsakes Packaged with Soul",
    description: "For brides, milestone celebrations, anniversaries, or self-love rites. Each treasure arrives in velvet-lined archival keepsake boxes with custom hand-scribed calligraphy notes.",
    highlight: "Heirloom Presentation & Custom Engraving Available",
    quote: "“The unwrapping experience was magical. The presentation speaks volumes before you even touch the piece.”",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
  }
];

export const WHY_CHOOSE_US = [
  {
    iconName: "ShieldCheck",
    title: "Hypoallergenic & Skin-First Guarantee",
    description: "Every jewelry piece is strictly nickel-free, lead-free, and crafted with biocompatible posts. Our skincare is dermatologist tested on reactive skin.",
    metric: "0% Irritants"
  },
  {
    iconName: "Sparkles",
    title: "Ethical Sourcing & Conflict-Free",
    description: "We partner exclusively with RJC-certified (Responsible Jewellery Council) suppliers and fair-trade organic botanical growers worldwide.",
    metric: "100% Ethical"
  },
  {
    iconName: "Leaf",
    title: "Clean Botanical Actives, Zero Fillers",
    description: "Our skin elixirs use cold-pressed active seed oils and stable lipid vitamins without synthetic fragrances, PEGs, silicones, or microplastics.",
    metric: "Cruelty Free"
  },
  {
    iconName: "Award",
    title: "Verified 4.9-Star Google Reputation",
    description: "Over 380+ five-star verified Google reviews from clients who trust Aura & Glow for their wedding jewelry and daily skincare regimens.",
    metric: "4.9 ★★★★★"
  },
  {
    iconName: "Gift",
    title: "Artisanal Luxury Keepsake Packaging",
    description: "Unboxing should feel sacred. All orders arrive in FSC-certified drawer boxes, silk pouches, and can include personalized wax-sealed notes.",
    metric: "Gift Ready"
  },
  {
    iconName: "RefreshCw",
    title: "30-Day Happiness Guarantee & Lifetime Warranty",
    description: "Enjoy risk-free 30-day returns and exchanges, backed by our lifetime jewelry plating and craftsmanship pledge.",
    metric: "Lifetime Care"
  }
];

export const GOOGLE_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Elena Vasquez-Ross",
    location: "San Francisco, CA",
    rating: 5,
    date: "2 weeks ago",
    title: "The best jewelry purchase I have ever made!",
    content: "I discovered Aura and Glow on Google when looking for hypoallergenic everyday gold earrings. The Lumière Pearl Droplets are stunning and so lightweight! Plus, they sent a sample of the Luminous Nectar serum which convinced me to order the full bottle right after. The customer service is world-class.",
    verifiedGoogle: true,
    purchasedProduct: "Lumière Freshwater Pearl Droplets",
    category: "both"
  },
  {
    id: "rev-2",
    author: "Sophia Chen, MD",
    location: "Palo Alto, CA",
    rating: 5,
    date: "1 month ago",
    title: "Dermatologist approved: gentle yet transformative",
    content: "As a physician with sensitive skin, I am extremely critical of skincare ingredient lists. The Velvet Cloud Peptide Barrier Cream has zero synthetic fillers and genuinely repairs moisture retention. My skin has never looked more luminous under fluorescent clinic lights.",
    verifiedGoogle: true,
    purchasedProduct: "Velvet Cloud Peptide Barrier Cream",
    category: "skincare"
  },
  {
    id: "rev-3",
    author: "Marcus Sterling",
    location: "Oakland, CA",
    rating: 5,
    date: "3 weeks ago",
    title: "Outstanding anniversary gift experience",
    content: "Used their customer inquiry form to ask for custom advice for my wife's 10th anniversary. Their concierge team responded within two hours with styling photos and hand-wrote our note. My wife was in tears when she opened the Soleil Pendant and ritual set.",
    verifiedGoogle: true,
    purchasedProduct: "The Aura Radiance Signature Duo",
    category: "jewelry"
  },
  {
    id: "rev-4",
    author: "Amara Okonjo",
    location: "Berkeley, CA",
    rating: 5,
    date: "2 months ago",
    title: "Holy grail skincare + gorgeous daily rings",
    content: "I wear the Aethel Braided Ring every single day—washing hands, working out, no fading or green skin at all. And the Gua Sha set with Luminous Nectar has turned my morning ritual into my favorite 10 minutes of the day. A truly special brand.",
    verifiedGoogle: true,
    purchasedProduct: "Aethel Braided Ring & Gua Sha Set",
    category: "both"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What makes Aura & Glow jewelry hypoallergenic and tarnish-resistant?",
    answer: "We craft our pieces with a thick 2.5-micron layer of authentic 18k gold over recycled 925 sterling silver (Gold Vermeil) and medical-grade titanium ear posts. They are 100% free from nickel, cadmium, and lead, making them safe for even the most sensitive earlobes and skin.",
    category: "jewelry"
  },
  {
    question: "Are your skincare products suitable for sensitive or acne-prone skin?",
    answer: "Yes! Every single botanical formulation is tested on sensitive skin under dermatological observation. We abstain from pore-clogging mineral oils, synthetic perfumes, and parabens, choosing non-comedogenic squalane, cold-pressed seed oils, and skin-identical ceramides.",
    category: "skincare"
  },
  {
    question: "Can I place a bespoke or custom jewelry order through the inquiry form?",
    answer: "Absolutely. When submitting your contact form, select 'Bespoke Jewelry Customization'. Our master metalsmith will reach out within 12 business hours to schedule a complimentary digital or in-person design consultation.",
    category: "orders"
  },
  {
    question: "How long does standard and expedited shipping take?",
    answer: "Orders are hand-assembled and dispatched from our San Francisco atelier within 24–48 hours. Standard domestic shipping takes 2-4 business days (free on orders over $75). Expedited next-day courier delivery is also available at checkout.",
    category: "orders"
  },
  {
    question: "Can I visit your physical atelier showroom?",
    answer: "Yes! Our design showroom is located in San Francisco's Design District at 482 L’Aura Boulevard, Suite 104. Walk-ins are welcomed Monday through Saturday, or you can book an exclusive one-on-one styling consultation via our contact form.",
    category: "general"
  }
];
