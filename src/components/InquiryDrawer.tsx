import React from 'react';
import { X, Trash2, ArrowRight, Sparkles, Send } from 'lucide-react';
import { Product } from '../types';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  inquiryList: Product[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onProceedToForm: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  inquiryList,
  onRemoveItem,
  onClearAll,
  onProceedToForm,
}) => {
  if (!isOpen) return null;

  const totalValue = inquiryList.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1b1715]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf8f5] shadow-2xl flex flex-col justify-between border-l border-[#ebdccd]">
          {/* Top Header */}
          <div className="p-6 border-b border-[#ebdccd] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8a662e]" />
              <h3 className="font-display text-xl text-[#241f1c] font-medium">
                Inquiry Shortlist ({inquiryList.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#ede3d5] text-[#594e45] hover:text-[#241f1c] transition-colors cursor-pointer"
              aria-label="Close inquiry drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Content */}
          <div className="p-6 flex-1 overflow-y-auto">
            {inquiryList.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#f2e7d8] flex items-center justify-center text-[#8a662e] mx-auto mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-display text-lg text-[#241f1c] font-medium">
                  Your inquiry list is empty
                </h4>
                <p className="mt-1 text-xs text-[#6e6359] max-w-xs mx-auto">
                  Browse our jewelry and botanical skincare collections and click "Inquire" to shortlist pieces for bespoke sizing or consultation.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-[#7d7269] pb-2 border-b border-[#ebdccd]">
                  <span>Selected pieces</span>
                  <button
                    onClick={onClearAll}
                    className="text-[#a84444] hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {inquiryList.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3.5 rounded-xl bg-white border border-[#ebdccd] shadow-2xs items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover bg-[#f4ede3] shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8a662e] block">
                        {item.subCategory}
                      </span>
                      <h5 className="font-medium text-xs sm:text-sm text-[#241f1c] truncate">
                        {item.name}
                      </h5>
                      <span className="text-xs font-semibold text-[#241f1c] mt-0.5 block">
                        ${item.price}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#9e9287] hover:text-[#a84444] p-1.5 transition-colors cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Actions */}
          {inquiryList.length > 0 && (
            <div className="p-6 border-t border-[#ebdccd] bg-[#f5eee4] space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-[#241f1c]">
                <span>Estimated Value:</span>
                <span className="font-bold text-base">${totalValue}</span>
              </div>
              <p className="text-[11px] text-[#73685f]">
                Submitting this list attaches all items directly to your contact inquiry form for the atelier concierge.
              </p>

              <button
                onClick={() => {
                  onProceedToForm();
                  onClose();
                }}
                className="w-full py-3.5 px-4 rounded-full bg-[#241f1c] text-white hover:bg-[#3d3530] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#e3b873]" />
                <span>Attach & Open Inquiry Form</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
