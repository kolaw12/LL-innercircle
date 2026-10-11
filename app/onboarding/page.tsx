"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface OnboardingStep {
  id: number;
  image: string;
  alt: string;
  heading: string;
  description: string;
}

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 1,
    image: "/images/onboarding_course.png",
    alt: "Lakowe Lakes championship course and lush landscape",
    heading: "Your Estate,\nAlways Within Reach",
    description: "Book golf, dine, and manage your membership — all in one place.",
  },
  {
    id: 2,
    image: "/images/onboarding_concierge.png",
    alt: "Lakowe Lakes luxury villa and poolside concierge",
    heading: "A Concierge\nat Your Service",
    description: "Request anything, anytime. Our team responds directly to you.",
  },
  {
    id: 3,
    image: "/images/onboarding_lake.png",
    alt: "Lakowe Lakes serene lake and estate living",
    heading: "Welcome to\nthe Inner Circle",
    description: "Exclusive access, built around how you live.",
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.push("/login");
    }
  };

  const handleSkip = () => {
    router.push("/login");
  };

  const step = ONBOARDING_STEPS[currentStep];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-forest flex flex-col justify-between">
      {/* Background Images with smooth transitions */}
      <div className="absolute inset-0 z-0">
        {ONBOARDING_STEPS.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentStep ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-105"
            }`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Cinematic gradient overlay matching reference for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/85 via-45% to-transparent pointer-events-none" />
        {/* Subtle top vignette */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Top Bar: Skip link (screens 1 & 2) */}
      <header className="relative z-10 w-full max-w-md mx-auto px-6 pt-12 flex items-center justify-between">
        {/* Back navigation between steps */}
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-cream hover:bg-black/60 transition-premium shadow-md focus:outline-none focus:ring-2 focus:ring-bronze/50"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        ) : (
          <div className="w-10" />
        )}

        {/* Skip button on steps 1 and 2 */}
        {currentStep < 2 ? (
          <button
            type="button"
            onClick={handleSkip}
            className="font-montserrat text-xs text-cream/80 hover:text-cream font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 transition-premium focus:outline-none focus:ring-2 focus:ring-bronze/50"
          >
            Skip
          </button>
        ) : (
          <div className="w-10" />
        )}
      </header>

      {/* Bottom Content Area */}
      <div className="relative z-10 w-full max-w-md mx-auto px-7 sm:px-8 pb-14 flex flex-col items-center text-center space-y-6">
        {/* Text content with key-based subtle animation */}
        <div key={currentStep} className="stagger-1 space-y-3 animate-fade-in w-full">
          <h1 className="font-montserrat text-cream text-2xl sm:text-3xl font-bold leading-tight tracking-tight whitespace-pre-line drop-shadow-md">
            {step.heading}
          </h1>
          <p className="font-montserrat text-cream/80 text-sm leading-relaxed max-w-[290px] mx-auto font-regular drop-shadow-sm">
            {step.description}
          </p>
        </div>

        {/* Dot Progress Indicator (3 indicators, active one is elongated gold) */}
        <div className="stagger-2 flex items-center gap-2 py-2" role="tablist" aria-label="Walkthrough progress">
          {ONBOARDING_STEPS.map((_, index) => (
            <button
              key={index}
              role="tab"
              onClick={() => setCurrentStep(index)}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentStep
                  ? "w-7 bg-bronze shadow-sm"
                  : "w-2 bg-cream/40 hover:bg-cream/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentStep}
            />
          ))}
        </div>

        {/* Main Action Button */}
        <div className="stagger-3 w-full space-y-3 pt-1">
          <button
            type="button"
            onClick={handleNext}
            className="btn-luxury-primary"
          >
            {currentStep === 2 ? "Get Started" : "Continue"}
          </button>

          {/* Subtext on final screen */}
          {currentStep === 2 ? (
            <div className="pt-1">
              <Link
                href="/login"
                className="font-montserrat text-xs text-cream/70 hover:text-cream transition-premium"
              >
                Already have an account?{" "}
                <span className="text-bronze font-semibold uppercase tracking-wider underline underline-offset-4">
                  Sign In
                </span>
              </Link>
            </div>
          ) : (
            <div className="h-5" />
          )}
        </div>
      </div>
    </main>
  );
}
