"use client";

import Link from "next/link";
import LuxuryDivider from "@/components/ui/LuxuryDivider";
import SignatureMotif from "@/components/ui/SignatureMotif";

export default function MembershipPage() {
  const menuRows = [
    {
      id: "membership-details",
      label: "Member Privileges",
      subtitle: "Tier benefits and annual renewal",
      icon: (
        <svg className="w-5 h-5 text-cream/60 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      ),
    },
    {
      id: "booking-history",
      label: "Booking History",
      subtitle: "Past tee times, dining, and spa visits",
      icon: (
        <svg className="w-5 h-5 text-cream/60 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "payment-methods",
      label: "Payment & Billing",
      subtitle: "Saved cards and account statements",
      icon: (
        <svg className="w-5 h-5 text-cream/60 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h4M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
      ),
    },
    {
      id: "maintenance-requests",
      label: "Property Requests",
      subtitle: "Track open maintenance and repairs",
      icon: (
        <svg className="w-5 h-5 text-cream/60 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l2.496-3.03c.317-.384.74-.664 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655M11.42 15.17l-.766 1.208" />
        </svg>
      ),
    },
    {
      id: "settings",
      label: "Account Settings",
      subtitle: "Notifications, login, and privacy",
      icon: (
        <svg className="w-5 h-5 text-cream/60 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: "contact-estate-office",
      label: "Contact Estate Office",
      subtitle: "Direct phone and office assistance",
      icon: (
        <svg className="w-5 h-5 text-cream/60 group-hover:text-bronze transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-forest-gradient text-grey-light flex flex-col justify-between pb-32">
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
          <h1 className="font-montserrat text-cream text-xl font-bold text-center leading-tight tracking-tight">
            My Membership
          </h1>
          <div className="w-10" />
        </header>

        {/* Digital Membership Card */}
        <div className="stagger-2 relative py-2 -my-2">
          <div className="absolute inset-0 bg-glass-texture -z-10 rounded-[24px] opacity-100" />
          <section className="relative overflow-hidden glass-panel-hero p-6 space-y-6">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-bronze/10 rounded-full blur-3xl pointer-events-none" />

          {/* Card Brand Header */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-forest border border-bronze/20 flex items-center justify-center shadow-inner">
                <span className="font-montserrat text-cream font-bold text-sm">LL</span>
              </div>
              <span className="font-montserrat text-cream text-sm font-semibold tracking-wider uppercase">
                Lakowe Lakes
              </span>
            </div>
            <span className="font-montserrat text-bronze text-[10px] font-semibold tracking-widest uppercase border border-bronze/30 px-3 py-1.5 rounded-sm shadow-sm backdrop-blur-sm">
              Platinum Member
            </span>
          </div>

          {/* Card Main Info & QR Code */}
          <div className="flex items-center justify-between pt-2 relative z-10">
            <div className="flex items-center gap-4">
              {/* Initials Avatar */}
              <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center border border-bronze/30 shadow-md flex-shrink-0">
                <span className="font-montserrat text-forest text-xl font-bold">JA</span>
              </div>
              <div className="space-y-0.5">
                <h2 className="font-montserrat text-cream text-lg font-bold leading-none">
                  Johnson Alexander
                </h2>
                <p className="font-montserrat text-bronze text-[11px] font-semibold tracking-widest uppercase pt-1.5">
                  ID: LL-894021
                </p>
                <p className="font-montserrat text-cream/50 text-xs mt-0.5 font-medium">
                  Member since 2021
                </p>
              </div>
            </div>

            {/* Realistic QR Code */}
            <QrCodePlaceholder />
          </div>

          {/* Card Footer with Luxury Divider & Signature Motif */}
          <div className="relative z-10">
            <LuxuryDivider className="my-2" variant="diamond" />
            <div className="flex items-center justify-between font-montserrat text-xs text-cream/70 pt-1">
              <span className="font-medium flex items-center gap-1.5">
                <SignatureMotif size={16} className="text-bronze/80" />
                Estate Access: Full Privileges
              </span>
              <span className="text-bronze font-semibold tracking-widest uppercase text-[10px]">Valid Through: Dec 2028</span>
            </div>
          </div>
        </section>
        </div>

        {/* List-Row Navigation with Custom Diamond Dividers */}
        <section className="stagger-3 rounded-[20px] bg-[#0c3520] border border-bronze/15 overflow-hidden shadow-card-lg">
          {menuRows.map((row, index) => (
            <div key={row.id}>
              <Link
                href={`#${row.id}`}
                className="flex items-center justify-between p-5 hover:bg-bronze/5 transition-premium group focus:outline-none focus:bg-bronze/5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest border border-bronze/20 flex items-center justify-center group-hover:scale-105 transition-premium shadow-sm">
                    {row.icon}
                  </div>
                  <div>
                    <h3 className="font-montserrat text-cream text-sm font-semibold group-hover:text-bronze transition-premium">
                      {row.label}
                    </h3>
                    <p className="font-montserrat text-cream/50 text-xs mt-0.5 font-medium">
                      {row.subtitle}
                    </p>
                  </div>
                </div>
                <div className="text-bronze/40 group-hover:text-bronze group-hover:translate-x-1 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              {index < menuRows.length - 1 && (
                <div className="px-5">
                  <LuxuryDivider className="my-0" variant="diamond" />
                </div>
              )}
            </div>
          ))}
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
        <Link href="/membership" className="flex flex-col items-center gap-1.5 text-bronze relative">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="font-montserrat text-[10px] font-bold tracking-wider uppercase">Profile</span>
          <span className="absolute bottom-[3px] w-8 h-[2px] rounded-full bg-bronze"></span>
        </Link>
      </nav>
    </div>
  );
}

/** Realistic QR code placeholder with proper corner position markers */
function QrCodePlaceholder() {
  // 9x9 grid representing a simplified but realistic QR code pattern
  const grid = [
    [1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0],
    [1,0,1,1,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,0],
    [1,0,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,0,1],
    [0,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,1,0,1],
  ];

  const cellSize = 6;
  const totalSize = grid.length * cellSize;

  return (
    <div className="w-[72px] h-[72px] rounded-xl bg-cream p-1.5 flex items-center justify-center shadow-card border border-bronze/20 flex-shrink-0">
      <svg width={totalSize} height={totalSize} viewBox={`0 0 ${totalSize} ${totalSize}`}>
        {grid.map((row, y) =>
          row.map((cell, x) =>
            cell === 1 ? (
              <rect
                key={`${x}-${y}`}
                x={x * cellSize}
                y={y * cellSize}
                width={cellSize}
                height={cellSize}
                fill="#1a1a1a"
              />
            ) : null
          )
        )}
      </svg>
    </div>
  );
}
