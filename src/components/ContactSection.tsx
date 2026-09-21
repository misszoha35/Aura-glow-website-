import React, { useState } from 'react';
import {
  Send,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  MessageSquare,
  X,
  Gem,
  Leaf,
} from 'lucide-react';
import { Product, InquiryFormState } from '../types';
import { BRAND_STORY } from '../data/content';

interface ContactSectionProps {
  inquiryList: Product[];
  onRemoveFromInquiry: (id: string) => void;
  preselectedProduct?: Product | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  inquiryList,
  onRemoveFromInquiry,
  preselectedProduct,
}) => {
  const [formData, setFormData] = useState<InquiryFormState>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    interestedCategory: 'both',
    message: preselectedProduct
      ? `Hello, I would like to inquire about the ${preselectedProduct.name} ($${preselectedProduct.price}). Specifically regarding...`
      : '',
    preferredContact: 'email',
    newsletter: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceNumber: string;
    fullName: string;
    email: string;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a brief message (minimum 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate concierge processing & dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      const refNumber = `AG-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedData({
        referenceNumber: refNumber,
        fullName: formData.fullName,
        email: formData.email,
      });
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        interestedCategory: 'both',
        message: '',
        preferredContact: 'email',
        newsletter: true,
      });
      setErrors({});
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f5eee4] border-t border-[#ebdccd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a662e] mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Customer Inquiries & Atelier Concierge</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#241f1c] font-medium tracking-tight">
            Connect With Aura & Glow
          </h2>
          <p className="mt-4 text-base text-[#61574f] leading-relaxed">
            Have questions about custom jewelry sizing, bespoke heirloom designs, skin sensitivities, or routine pairing? Our San Francisco concierge will personally assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Atelier Coordinates & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#faf8f5] rounded-3xl p-6 sm:p-8 border border-[#ebdccd] shadow-xs">
              <h3 className="font-display text-2xl text-[#241f1c] font-medium mb-4">
                Atelier Concierge
              </h3>
              <p className="text-xs sm:text-sm text-[#61574f] leading-relaxed mb-6">
                Whether you are curating a bridal suite, selecting an heirloom gift, or crafting a non-irritating daily skincare ritual, our artisans are ready to help.
              </p>

              <div className="space-y-4 text-sm text-[#4a4038]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8a662e] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#241f1c]">Atelier Address</strong>
                    <span className="text-xs text-[#6e6359]">
                      {BRAND_STORY.address} <br />
                      {BRAND_STORY.city}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#8a662e] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#241f1c]">Direct Telephone</strong>
                    <a href="tel:+14158902872" className="text-xs text-[#8a662e] hover:underline font-medium">
                      {BRAND_STORY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#8a662e] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#241f1c]">Electronic Mail</strong>
                    <a href="mailto:inquiries@auranglow.com" className="text-xs text-[#8a662e] hover:underline font-medium">
                      {BRAND_STORY.inquiriesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#8a662e] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#241f1c]">Response Window</strong>
                    <span className="text-xs text-[#6e6359]">
                      All customer inquiries received are reviewed by our team and answered within 12 business hours.
                    </span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="mt-8 pt-6 border-t border-[#ebdccd] flex items-center gap-3 text-xs text-[#61574f]">
                <Shield className="w-4 h-4 text-[#8a662e] shrink-0" />
                <span>Your personal details are treated with strict confidentiality. We never sell or share client data.</span>
              </div>
            </div>

            {/* Shortlisted Inquiries Summary Box */}
            {inquiryList.length > 0 && (
              <div className="bg-[#faf8f5] rounded-2xl p-5 border border-[#ebdccd] shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8a662e]">
                    Shortlisted Items Included in Inquiry ({inquiryList.length})
                  </span>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {inquiryList.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3 p-2 bg-[#f4ece2] rounded-xl text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-9 h-9 rounded-md object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <span className="font-medium text-[#241f1c] block line-clamp-1">{item.name}</span>
                          <span className="text-[10px] text-[#786e66]">${item.price} • {item.subCategory}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveFromInquiry(item.id)}
                        className="text-[#998b80] hover:text-[#241f1c] p-1"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Customer Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#ebdccd] shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6" id="customer-inquiry-form">
                <div>
                  <h3 className="font-display text-2xl text-[#241f1c] font-medium">
                    Customer Inquiry Form
                  </h3>
                  <p className="text-xs text-[#73685f] mt-1">
                    Please fill out the details below and an atelier concierge will assist you.
                  </p>
                </div>

                {/* Inquiry Type and Product Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#403731] mb-1.5">
                      Type of Inquiry *
                    </label>
                    <select
                      id="inquiry-type-select"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                      className="w-full bg-[#f8f5f0] border border-[#e2d5c3] text-[#241f1c] text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#8a662e] cursor-pointer"
                    >
                      <option value="general">General Customer Inquiry</option>
                      <option value="bespoke_jewelry">Bespoke Jewelry Customization & Sizing</option>
                      <option value="skincare_consultation">Skincare Regimen & Sensitivity Consultation</option>
                      <option value="bridal_gifting">Bridal, Milestone & Heirloom Gifting</option>
                      <option value="order_status">Order Status & Atelier Appointment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#403731] mb-1.5">
                      Interested Products
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, interestedCategory: 'jewelry' })}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                          formData.interestedCategory === 'jewelry'
                            ? 'bg-[#241f1c] text-white border-[#241f1c]'
                            : 'bg-[#faf8f5] text-[#524941] border-[#e2d5c3] hover:bg-[#f0e7db]'
                        }`}
                      >
                        <Gem className="w-3.5 h-3.5" />
                        <span>Jewelry</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, interestedCategory: 'skincare' })}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                          formData.interestedCategory === 'skincare'
                            ? 'bg-[#241f1c] text-white border-[#241f1c]'
                            : 'bg-[#faf8f5] text-[#524941] border-[#e2d5c3] hover:bg-[#f0e7db]'
                        }`}
                      >
                        <Leaf className="w-3.5 h-3.5" />
                        <span>Skincare</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, interestedCategory: 'both' })}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                          formData.interestedCategory === 'both'
                            ? 'bg-[#241f1c] text-white border-[#241f1c]'
                            : 'bg-[#faf8f5] text-[#524941] border-[#e2d5c3] hover:bg-[#f0e7db]'
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Both</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#403731] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="inquiry-full-name"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Clara Montgomery"
                      className={`w-full bg-[#f8f5f0] border text-[#241f1c] text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#8a662e] ${
                        errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-[#e2d5c3]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#403731] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="inquiry-email-address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="clara@example.com"
                      className={`w-full bg-[#f8f5f0] border text-[#241f1c] text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#8a662e] ${
                        errors.email ? 'border-red-500 bg-red-50/50' : 'border-[#e2d5c3]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Phone & Preferred Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#403731] mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (415) 000-0000"
                      className="w-full bg-[#f8f5f0] border border-[#e2d5c3] text-[#241f1c] text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#8a662e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#403731] mb-1.5">
                      Preferred Reply Channel
                    </label>
                    <select
                      id="preferred-contact-method"
                      value={formData.preferredContact}
                      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as any })}
                      className="w-full bg-[#f8f5f0] border border-[#e2d5c3] text-[#241f1c] text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#8a662e] cursor-pointer"
                    >
                      <option value="email">Email Concierge</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp Message</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#403731]">
                      Inquiry Details & Questions *
                    </label>
                    <span className="text-[10px] text-[#8a7f76]">
                      {inquiryList.length > 0 ? `${inquiryList.length} shortlisted item(s) attached` : ''}
                    </span>
                  </div>
                  <textarea
                    id="inquiry-message-textarea"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the pieces you're interested in, custom ring sizing, skin type concerns, or wedding gifting timeline..."
                    className={`w-full bg-[#f8f5f0] border text-[#241f1c] text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#8a662e] resize-y ${
                      errors.message ? 'border-red-500 bg-red-50/50' : 'border-[#e2d5c3]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.message}</span>
                  )}
                </div>

                {/* Checkbox for Newsletter */}
                <div className="flex items-center gap-2">
                  <input
                    id="inquiry-newsletter-checkbox"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                    className="w-4 h-4 rounded text-[#8a662e] focus:ring-[#8a662e] border-[#cfbeab]"
                  />
                  <label htmlFor="inquiry-newsletter-checkbox" className="text-xs text-[#61574f] cursor-pointer">
                    Receive invitations to private atelier showroom previews and botanical seasonal launches.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  id="submit-inquiry-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full bg-[#241f1c] text-[#faf8f5] hover:bg-[#3d3530] text-xs sm:text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry to Concierge...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#e3b873]" />
                      <span>Send Customer Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Success Modal */}
      {submittedData && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1b1715]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf8f5] w-full max-w-md rounded-3xl p-6 sm:p-8 border border-[#ebdccd] shadow-2xl text-center relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSubmittedData(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#7a6f65] hover:text-[#241f1c] hover:bg-[#eee3d5] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#e7f3ea] text-[#256c38] mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-widest text-[#8a662e] block mb-1">
              Inquiry Received
            </span>
            <h4 className="font-display text-2xl text-[#241f1c] font-medium">
              Thank You, {submittedData.fullName}
            </h4>

            <p className="mt-2 text-xs sm:text-sm text-[#61574f] leading-relaxed">
              Your inquiry has been assigned to our San Francisco atelier concierge. A personal specialist will reply to{' '}
              <strong className="text-[#241f1c]">{submittedData.email}</strong> within 12 business hours.
            </p>

            <div className="my-6 p-4 rounded-xl bg-[#f2e9dc] border border-[#e2d5c3] text-left">
              <div className="flex justify-between items-center text-xs pb-2 border-b border-[#e2d5c3]">
                <span className="text-[#7a6f65]">Reference Number:</span>
                <strong className="font-mono text-[#241f1c]">{submittedData.referenceNumber}</strong>
              </div>
              <div className="flex justify-between items-center text-xs pt-2">
                <span className="text-[#7a6f65]">Concierge Desk:</span>
                <span className="text-[#256c38] font-medium">Active & Queued</span>
              </div>
            </div>

            <button
              onClick={() => setSubmittedData(null)}
              className="w-full py-3 bg-[#241f1c] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#3d3530] transition-colors cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
