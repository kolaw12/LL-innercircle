"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SuccessModal from "@/components/ui/SuccessModal";
import LuxuryDivider from "@/components/ui/LuxuryDivider";

export default function VerifyOtpPage() {
  const router = useRouter();
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [resendNotification, setResendNotification] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus the first input box on load
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Take only the last character entered
    const char = value.slice(-1);
    if (!/^\d*$/.test(char)) return; // numbers only

    const newDigits = [...digits];
    newDigits[index] = char;
    setDigits(newDigits);

    // If character entered, auto-advance to next box
    if (char && index < 3) {
      setActiveIndex(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!digits[index] && index > 0) {
        // Move back to previous box on backspace if current is empty
        setActiveIndex(index - 1);
        inputRefs.current[index - 1]?.focus();
      } else {
        const newDigits = [...digits];
        newDigits[index] = "";
        setDigits(newDigits);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      setActiveIndex(index - 1);
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 3) {
      setActiveIndex(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").trim().slice(0, 4);
    if (/^\d+$/.test(pasted)) {
      const newDigits = [...digits];
      for (let i = 0; i < pasted.length; i++) {
        newDigits[i] = pasted[i];
      }
      setDigits(newDigits);
      const nextFocus = Math.min(pasted.length, 3);
      setActiveIndex(nextFocus);
      inputRefs.current[nextFocus]?.focus();
    }
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo: any 4 digits or prefilled code allows submission
    setShowSuccessModal(true);
  };

  const handleResend = () => {
    setDigits(["", "", "", ""]);
    setActiveIndex(0);
    inputRefs.current[0]?.focus();
    setResendNotification("A new 4-digit code was sent to member@lakowelakes.com");
    setTimeout(() => {
      setResendNotification("");
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-forest-gradient text-grey-light flex flex-col justify-between px-7 sm:px-8 py-12 sm:py-16">
      <div className="w-full max-w-sm mx-auto flex-1 flex flex-col justify-between">
        {/* Top Header */}
        <div>
          <div className="stagger-1 flex items-center justify-between pb-6">
            <Link
              href="/login"
              className="w-10 h-10 rounded-2xl bg-[#0c3520] border border-bronze/20 flex items-center justify-center text-bronze hover:bg-bronze/10 transition-premium shadow-card focus:outline-none focus:ring-2 focus:ring-bronze/50"
              aria-label="Back to Sign In"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="w-10" />
          </div>

          {/* Heading & Subtext */}
          <div className="stagger-2 text-center space-y-3 mt-4">
            <h1 className="font-montserrat text-cream text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
              Enter your 4-digit code
            </h1>
            <p className="font-montserrat text-cream/70 text-sm leading-relaxed max-w-[280px] mx-auto font-regular">
              We sent a 4-digit code to your email:{" "}
              <span className="text-cream font-medium block mt-1">member@lakowelakes.com</span>
            </p>
          </div>

          {/* Notification on Resend */}
          {resendNotification && (
            <div className="mt-4 p-3 rounded-xl bg-bronze/15 border border-bronze/30 text-center animate-fade-in">
              <p className="font-montserrat text-xs text-bronze font-medium">
                {resendNotification}
              </p>
            </div>
          )}

          {/* 4-digit OTP Inputs */}
          <form onSubmit={handleContinue} className="stagger-3 mt-12 space-y-8">
            <div className="flex items-center justify-center gap-3.5 sm:gap-4" onPaste={handlePaste}>
              {digits.map((digit, index) => {
                const isCurrentActive = activeIndex === index;
                const isFilled = digit.length > 0;

                return (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onFocus={() => setActiveIndex(index)}
                    aria-label={`Digit ${index + 1}`}
                    className={`w-14 h-16 rounded-2xl text-center font-montserrat text-2xl font-bold transition-premium focus:outline-none shadow-card ${
                      isFilled || isCurrentActive
                        ? "bg-[#0c3520] text-cream border-2 border-bronze ring-2 ring-bronze/30"
                        : "bg-[#0c3520]/80 text-cream/70 border border-bronze/20 hover:border-bronze/40"
                    }`}
                  />
                );
              })}
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              className="btn-luxury-primary"
            >
              Verify & Sign In
            </button>
          </form>
        </div>

        {/* Resend Link Section */}
        <div className="stagger-4 text-center pt-8 pb-4">
          <LuxuryDivider variant="diamond" className="opacity-40 mb-6" />
          <p className="font-montserrat text-cream/60 text-xs">
            Didn&apos;t get the code?{" "}
            <button
              type="button"
              onClick={handleResend}
              className="font-montserrat text-bronze font-semibold uppercase tracking-wider hover:underline focus:outline-none focus:underline ml-1 transition-premium"
            >
              Send again
            </button>
          </p>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Welcome to Inner Circle"
        description="Your member access is confirmed. Enjoy your time at the estate."
        buttonText="Go to Home"
        onButtonClick={() => {
          setShowSuccessModal(false);
          router.push("/dashboard");
        }}
      />
    </main>
  );
}
