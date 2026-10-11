import React from "react";

interface SignatureMotifProps {
  className?: string;
  size?: number;
}

/**
 * Signature Motif: An understated, luxury line-art insignia combining
 * a gentle lake wave curve with a slender leaf / golf flag silhouette.
 * Kept under 24px per brand guidelines.
 */
export default function SignatureMotif({
  className = "text-bronze",
  size = 22,
}: SignatureMotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Gentle lake wave crest */}
      <path
        d="M2.5 16.5C5.8 14.2 9.2 18.2 13 16C16.2 14.1 19.4 15.6 21.5 15.2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Subtle lower secondary ripple */}
      <path
        d="M5.5 19.5C8 18.2 11 20.2 14.5 19C17 18.1 19 18.8 20 18.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.5"
      />
      {/* Slender leaf / golf pennant flag rising from the water crest */}
      <path
        d="M11.5 16V5.5C11.5 5.5 12.8 4 15.5 4.5C18.2 5 18 8 14.5 8.5C12.8 8.8 11.5 8.5 11.5 8.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf vein / subtle flag crease */}
      <path
        d="M11.5 6.5C13.5 6.8 15.2 6.5 16.5 6"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
    </svg>
  );
}
