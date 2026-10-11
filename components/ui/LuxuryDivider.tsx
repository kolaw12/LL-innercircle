import React from "react";

interface LuxuryDividerProps {
  className?: string;
  variant?: "diamond" | "dot";
}

/**
 * Luxury Divider: A fine 1px line in muted gold/cream with a small
 * centered diamond (or dot) shape breaking the line at its midpoint.
 */
export default function LuxuryDivider({
  className = "",
  variant = "diamond",
}: LuxuryDividerProps) {
  return (
    <div
      className={`relative flex items-center justify-center my-6 w-full ${className}`}
      role="separator"
      aria-orientation="horizontal"
    >
      {/* Subtle 1px gold/cream line fading towards edges */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-bronze/30 to-transparent" />

      {/* Centered break shape */}
      {variant === "diamond" ? (
        <div className="absolute w-[5px] h-[5px] rotate-45 border border-bronze/70 bg-forest shadow-xs" />
      ) : (
        <div className="absolute w-[5px] h-[5px] rounded-full border border-bronze/70 bg-forest shadow-xs" />
      )}
    </div>
  );
}
