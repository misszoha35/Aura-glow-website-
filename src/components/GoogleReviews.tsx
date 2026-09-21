import React, { useState } from 'react';
import { Star, CheckCircle, MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS, BRAND_STORY } from '../data/content';

export const GoogleReviews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'jewelry' | 'skincare'>('all');

  const filteredReviews = GOOGLE_REVIEWS.filter((rev) => {
    if (activeFilter === 'all') return true;
    return rev.category === activeFilter || rev.category === 'both';
  });

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Business Header Badge */}
        <div className="bg-[#f5efe6] rounded-3xl p-6 sm:p-10 border border-[#ebdccd] shadow-xs mb-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* Google stylized G icon */}
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center p-3 border border-[#e4d6c4]">
                <svg className="w-9 h-9" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-semibold text-lg sm:text-xl text-[#241f1c]">
                    Aura & Glow Fine Jewelry & Skincare Atelier
                  </span>
                  <span className="hidden sm:inline-block bg-[#e7f3ea] text-[#256c38] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    Verified Profile
                  </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                  <span className="font-bold text-xl text-[#241f1c]">{BRAND_STORY.googleRating}</span>
                  <div className="flex text-[#e3b873]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#73685f]">
                    Based on <strong>{BRAND_STORY.totalReviews}</strong> authentic Google client reviews
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#241f1c] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3d3530] transition-colors"
              >
                <span>Write / Send Inquiry</span>
              </a>
              <span className="text-xs text-[#73685f]">
                Showroom in San Francisco Design District
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Section Header & Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#241f1c] font-medium">
              Verified Client Experiences
            </h3>
            <p className="text-xs sm:text-sm text-[#73685f]">
              Real testimonials from customers across our jewelry and skincare collections.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                activeFilter === 'all'
                  ? 'bg-[#241f1c] text-white'
                  : 'bg-[#f0e7dc] text-[#5e544c] hover:bg-[#ebdccd]'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setActiveFilter('jewelry')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                activeFilter === 'jewelry'
                  ? 'bg-[#241f1c] text-white'
                  : 'bg-[#f0e7dc] text-[#5e544c] hover:bg-[#ebdccd]'
              }`}
            >
              Jewelry
            </button>
            <button
              onClick={() => setActiveFilter('skincare')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                activeFilter === 'skincare'
                  ? 'bg-[#241f1c] text-white'
                  : 'bg-[#f0e7dc] text-[#5e544c] hover:bg-[#ebdccd]'
              }`}
            >
              Skincare
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#ebdccd] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm text-[#241f1c]">{review.author}</h4>
                      {review.verifiedGoogle && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-[#256c38] font-semibold bg-[#e7f3ea] px-1.5 py-0.5 rounded">
                          <CheckCircle className="w-3 h-3" />
                          Google Verified
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-[#8a7f76]">{review.location} • {review.date}</span>
                  </div>

                  <div className="flex text-[#e3b873]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <h5 className="font-medium text-sm text-[#241f1c] mb-2 font-display">
                  "{review.title}"
                </h5>

                <p className="text-xs sm:text-sm text-[#61574f] leading-relaxed">
                  {review.content}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#f0e7dc] flex items-center justify-between text-xs text-[#8a7f76]">
                <span>Purchased item:</span>
                <span className="font-medium text-[#8a662e]">{review.purchasedProduct}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Location & Hours Showcase Card */}
        <div className="mt-14 rounded-3xl bg-[#f5eee4] border border-[#ebdccd] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#ebdccd] flex items-center justify-center text-[#8a662e] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-sm text-[#241f1c]">Atelier & Showroom</h5>
              <p className="text-xs text-[#61574f] mt-1 leading-relaxed">
                {BRAND_STORY.address} <br />
                {BRAND_STORY.city}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BRAND_STORY.address + ' ' + BRAND_STORY.city)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8a662e] mt-2 hover:underline"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#ebdccd] flex items-center justify-center text-[#8a662e] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-sm text-[#241f1c]">Showroom Hours</h5>
              <div className="text-xs text-[#61574f] mt-1 space-y-0.5">
                {BRAND_STORY.hours.map((h, i) => (
                  <p key={i}>
                    <strong>{h.days}:</strong> {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#ebdccd] flex items-center justify-center text-[#8a662e] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-sm text-[#241f1c]">Private Consultations</h5>
              <p className="text-xs text-[#61574f] mt-1 leading-relaxed">
                Call: <a href="tel:+14158902872" className="font-semibold text-[#241f1c] hover:underline">{BRAND_STORY.phone}</a> <br />
                Email: <a href="mailto:concierge@auranglow.com" className="font-semibold text-[#241f1c] hover:underline">{BRAND_STORY.email}</a>
              </p>
              <span className="inline-block text-[11px] text-[#256c38] font-medium mt-1">
                Average reply time under 12 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
