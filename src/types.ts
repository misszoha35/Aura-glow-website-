export type ProductCategory = 'all' | 'jewelry' | 'skincare' | 'giftsets';

export interface Product {
  id: string;
  name: string;
  category: 'jewelry' | 'skincare' | 'giftsets';
  subCategory: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  shortDescription: string;
  description: string;
  image: string;
  additionalImages?: string[];
  features: string[];
  specifications: Record<string, string>;
  ingredientsOrMaterials: string[];
  ritualGuide?: string;
  inStock: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verifiedGoogle: boolean;
  purchasedProduct: string;
  category: 'jewelry' | 'skincare' | 'both';
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: 'general' | 'bespoke_jewelry' | 'skincare_consultation' | 'bridal_gifting' | 'order_status';
  interestedCategory: 'both' | 'jewelry' | 'skincare';
  message: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
  newsletter: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'jewelry' | 'skincare' | 'orders' | 'general';
}
