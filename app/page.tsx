"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SignatureMotif from "@/components/ui/SignatureMotif";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  const handleTap = () => {
    router.push("/onboarding");
  };

  return (
    <main
      onClick={handleTap}
      className="min-h-screen bg-forest flex flex-col items-center justify-center px-8 cursor-pointer select-none relative overflow-hidden transition-colors"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleTap();
      }}
      aria-label="Lakowe Lakes Inner Circle - Tap to continue"
    >
      {/* Background ambient lighting */}
      <div className="absolute w-96 h-96 rounded-full bg-bronze/5 blur-3xl pointer-events-none -top-10 -right-10" />
      <div className="absolute w-80 h-80 rounded-full bg-bronze/5 blur-3xl pointer-events-none -bottom-10 -left-10" />

      {/* Centered Logo & Branding */}
      <div className="flex flex-col items-center text-center z-10 space-y-6">
        {/* Monogram Badge with layered secondary circle for depth */}
        <div className="stagger-1 relative w-28 h-28 flex items-center justify-center">
          {/* Secondary depth circle (offset behind main badge) */}
          <div className="absolute w-24 h-24 rounded-full bg-cream/10 -top-1 -right-1 transform translate-x-2 -translate-y-1 blur-[1px]" />
          
          {/* Main badge circle */}
          <div className="relative w-24 h-24 rounded-full bg-forest border-[1.5px] border-bronze/40 shadow-card-lg flex items-center justify-center backdrop-blur-md">
            {/* Elegant Monogram / Crest */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-montserrat font-bold text-cream text-3xl tracking-tight leading-none drop-shadow-sm">
                LL
              </span>
              <div className="w-6 h-[1.5px] bg-bronze mt-1 opacity-80" />
            </div>
          </div>
        </div>

        {/* Signature Motif (small, understated beneath main logo) */}
        <div className="stagger-2 flex items-center justify-center">
          <SignatureMotif size={22} className="text-bronze/80" />
        </div>

        {/* Titles */}
        <div className="stagger-3 space-y-1.5">
          <h1 className="font-montserrat font-bold text-cream text-2xl tracking-[0.2em] uppercase leading-tight drop-shadow-sm">
            Lakowe Lakes
          </h1>
          <p className="font-montserrat text-bronze text-xs font-semibold tracking-[0.3em] uppercase">
            Inner Circle
          </p>
        </div>

        {/* Tagline */}
        <p className="stagger-4 font-montserrat text-cream/70 text-xs tracking-wider max-w-[240px] font-regular leading-relaxed">
          A Private World, Just for Members
        </p>
      </div>

      {/* Subtle indicator at bottom */}
      <div className="stagger-5 absolute bottom-10 left-0 right-0 text-center pointer-events-none">
        <span className="font-montserrat text-[10px] text-cream/40 uppercase tracking-widest font-medium animate-pulse">
          Tap anywhere to continue
        </span>
      </div>
    </main>
  );
}
