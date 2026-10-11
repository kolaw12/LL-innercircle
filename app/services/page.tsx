"use client";

import Link from "next/link";

import LuxuryDivider from "@/components/ui/LuxuryDivider";

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
  icon: JSX.Element;
}

export default function ServicesPage() {
  const serviceCategories: ServiceCategory[] = [
    {
      id: "dining",
      title: "Dining & In-Room Orders",
      description: "Order from Winebar, Revivo, or The Clubhouse",
      href: "/services/request?category=dining",
      icon: (
        <svg className="w-5 h-5 text-cream/70 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "transport",
      title: "Transport",
      description: "Airport pickup, golf carts, local rides",
      href: "/services/request?category=transport",
      icon: (
        <svg className="w-5 h-5 text-cream/70 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h.01M16 17h.01M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11M5 11h14M5 11v6a1 1 0 001 1h1m12-7v6a1 1 0 01-1 1h-1" />
        </svg>
      ),
    },
    {
      id: "wellness",
      title: "Wellness",
      description: "Spa, massage, personal training",
      href: "/services/request?category=wellness",
      icon: (
        <svg className="w-5 h-5 text-cream/70 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: "events",
      title: "Event Services",
      description: "Catering, decor, and photography for your event",
      href: "/services/request?category=events",
      icon: (
        <svg className="w-5 h-5 text-cream/70 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M19 3v4M3 10h18M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l1.5 1.5L16 13" />
        </svg>
      ),
    },
    {
      id: "property",
      title: "Home & Property",
      description: "Interior design, property management, rentals",
      href: "/services/request?category=property",
      icon: (
        <svg className="w-5 h-5 text-cream/70 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "marketplace",
      title: "Member Marketplace",
      description: "Buy, sell, or lease within the Circle",
      href: "/services/request?category=marketplace",
      icon: (
        <svg className="w-5 h-5 text-cream/70 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: "perks",
      title: "Partner Perks",
      description: "Exclusive discounts from our partner brands",
      href: "/services/perks",
      badge: "Exclusive",
      icon: (
        <svg className="w-5 h-5 text-cream/70 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0H4a2 2 0 00-2 2v2a2 2 0 002 2h8m0-4h8a2 2 0 012 2v2a2 2 0 01-2 2h-8" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-forest-gradient text-grey-light flex flex-col justify-between pb-36">
      <main className="w-full max-w-md mx-auto px-7 sm:px-8 pt-10 space-y-8">
        {/* Header */}
        <header className="stagger-1 flex items-center justify-between pb-2">
          <Link
            href="/dashboard"
            className="w-10 h-10 rounded-2xl bg-[#0c3520] border border-bronze/20 flex items-center justify-center text-bronze hover:bg-bronze/10 transition-premium shadow-card focus:outline-none focus:ring-2 focus:ring-bronze/50"
            aria-label="Back to Dashboard"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="font-montserrat text-cream text-xl font-bold leading-tight tracking-tight text-center">
            Estate Services
          </h1>
          <div className="w-10" />
        </header>

        <p className="stagger-2 font-montserrat text-cream/70 text-sm text-center -mt-4 mb-2 max-w-[280px] mx-auto leading-relaxed font-regular">
          Everything you need, arranged by the Estate
        </p>

        {/* Services List */}
        <section className="stagger-3 space-y-3">
          {serviceCategories.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="p-4 rounded-[20px] bg-[#0c3520] border border-bronze/15 shadow-card hover:shadow-card-lg transition-premium group flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-bronze/40 hover:border-bronze/35 active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-forest border border-bronze/20 flex items-center justify-center group-hover:scale-105 transition-premium shadow-sm flex-shrink-0">
                  {service.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="font-montserrat text-cream text-sm font-semibold group-hover:text-bronze transition-premium leading-tight truncate">
                      {service.title}
                    </h2>
                    {service.badge && (
                      <span className="font-montserrat text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-bronze/15 text-bronze border border-bronze/30 flex-shrink-0">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-montserrat text-cream/60 text-xs mt-1 leading-snug font-medium line-clamp-1">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="text-bronze/40 group-hover:text-bronze group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 pl-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </section>

        {/* Luxury Divider */}
        <div className="stagger-4 pt-1">
          <LuxuryDivider className="opacity-50" />
        </div>

        {/* Need custom assistance card */}
        <section className="stagger-4 p-5 rounded-[20px] bg-[#0c3520]/60 border border-bronze/20 shadow-card space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-montserrat text-xs text-bronze uppercase tracking-widest font-semibold">
              Bespoke Assistance
            </span>
            <span className="font-montserrat text-[11px] text-cream/50 font-medium">24/7 Available</span>
          </div>
          <p className="font-montserrat text-xs text-cream/80 leading-relaxed font-regular">
            Looking for something specific? Speak directly with your dedicated Estate Concierge.
          </p>
          <div className="pt-1">
            <Link
              href="/concierge"
              className="inline-flex items-center gap-1.5 font-montserrat text-xs text-bronze font-semibold hover:underline underline-offset-4 uppercase tracking-wider"
            >
              Open Concierge Chat
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-forest/95 backdrop-blur-md border-t border-cream/10 px-6 py-3 flex items-center justify-between z-50">
        <Link href="/dashboard" className="flex flex-col items-center gap-1.5 text-cream/50 hover:text-cream/70 transition-premium">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="font-montserrat text-[10px] font-medium tracking-wider uppercase">Home</span>
        </Link>
        <Link href="/booking" className="flex flex-col items-center gap-1.5 text-cream/50 hover:text-cream/70 transition-premium">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-montserrat text-[10px] font-medium tracking-wider uppercase">Bookings</span>
        </Link>
        <Link href="/concierge" className="flex flex-col items-center gap-1.5 text-cream/50 hover:text-cream/70 transition-premium">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="font-montserrat text-[10px] font-medium tracking-wider uppercase">Concierge</span>
        </Link>
        <Link href="/membership" className="flex flex-col items-center gap-1.5 text-cream/50 hover:text-cream/70 transition-premium">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="font-montserrat text-[10px] font-medium tracking-wider uppercase">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
