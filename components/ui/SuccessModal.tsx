import React, { useEffect } from "react";
import SignatureMotif from "./SignatureMotif";
import LuxuryDivider from "./LuxuryDivider";

interface SuccessModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  description: string;
  referenceNumber?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title,
  description,
  referenceNumber,
  buttonText = "Continue",
  onButtonClick,
  secondaryButtonText,
  onSecondaryButtonClick,
}: SuccessModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/75 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="w-full max-w-sm bg-[#0c3520] border border-bronze/35 rounded-[28px] p-8 text-center shadow-card-lg space-y-5 animate-scale-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Checkmark Icon accompanied by signature motif */}
        <div className="relative mx-auto w-20 h-20">
          <div className="w-20 h-20 rounded-full bg-forest border-[1.5px] border-bronze flex items-center justify-center text-bronze shadow-md">
            <svg
              className="w-9 h-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          {/* Subtle signature motif accent badge */}
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#0c3520] border border-bronze/40 flex items-center justify-center shadow-xs">
            <SignatureMotif size={15} className="text-bronze" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h2
            id="modal-title"
            className="font-montserrat text-cream text-2xl font-bold leading-tight"
          >
            {title}
          </h2>

          {referenceNumber && (
            <p className="font-montserrat text-bronze text-[11px] font-semibold tracking-widest uppercase">
              Ref: #{referenceNumber}
            </p>
          )}

          <p className="font-montserrat text-cream/75 text-sm leading-relaxed pt-1 font-regular">
            {description}
          </p>
        </div>

        <LuxuryDivider className="my-4" />

        {/* Action Buttons */}
        <div className="pt-1 space-y-3">
          <button
            type="button"
            onClick={onButtonClick}
            className="btn-luxury-primary"
          >
            {buttonText}
          </button>

          {secondaryButtonText && onSecondaryButtonClick && (
            <button
              type="button"
              onClick={onSecondaryButtonClick}
              className="w-full font-montserrat text-xs text-cream/60 hover:text-bronze font-medium uppercase tracking-wider py-2 transition-premium focus:outline-none focus:underline"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
