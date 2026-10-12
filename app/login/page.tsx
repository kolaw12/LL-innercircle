"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LuxuryDivider from "@/components/ui/LuxuryDivider";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-forest-gradient flex flex-col justify-between items-center px-7 sm:px-8 py-14 sm:py-16">
      <div className="w-full max-w-sm mx-auto flex-1 flex flex-col justify-center items-center">
        {/* Logo / Branding */}
        <div className="stagger-1 text-center mb-10">
          <h2 className="font-montserrat font-bold text-cream text-xl sm:text-2xl tracking-widest uppercase leading-tight">
            Lakowe Lakes
          </h2>
          <p className="font-montserrat text-bronze text-[11px] font-semibold tracking-[0.2em] uppercase mt-2">
            Inner Circle
          </p>
        </div>

        {/* Heading & Subtitle */}
        <div className="stagger-2 text-center mb-10">
          <h1 className="font-montserrat font-bold text-cream text-3xl sm:text-4xl leading-tight mb-2">
            Welcome Back
          </h1>
          <p className="font-montserrat font-medium text-bronze text-lg sm:text-xl leading-tight mb-3">
            to the Inner Circle
          </p>
          <p className="font-montserrat text-grey-light/70 text-sm leading-relaxed font-regular">
            Sign in to your member account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="stagger-3 w-full space-y-5">
          <div>
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your member email"
              className="w-full min-h-[50px] px-4 rounded-xl bg-cream text-charcoal placeholder-charcoal/40 font-montserrat text-sm border border-transparent focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/40 transition-premium shadow-card"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full min-h-[50px] px-4 pr-12 rounded-xl bg-cream text-charcoal placeholder-charcoal/40 font-montserrat text-sm border border-transparent focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/40 transition-premium shadow-card"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal/70 p-1 focus:outline-none transition-premium"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L17.772 17.772M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center justify-between pt-1">
            <Link
              href="/verify"
              className="font-montserrat text-bronze text-xs font-semibold hover:underline focus:outline-none focus:underline transition-premium"
            >
              Sign in with email code
            </Link>
            <a
              href="#forgot-password"
              className="font-montserrat text-cream/60 hover:text-bronze text-xs font-medium hover:underline focus:outline-none focus:underline transition-premium"
            >
              Forgot password?
            </a>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn-luxury-primary"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="stagger-4 w-full mt-10">
          <LuxuryDivider className="my-6" />
          <div className="text-center">
            <p className="font-montserrat text-grey-light/60 text-xs leading-relaxed">
              Need access?{" "}
              <a href="#contact-office" className="text-bronze hover:text-cream underline underline-offset-2 font-medium transition-premium">
                Contact the estate office
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
