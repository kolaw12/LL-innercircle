"use client";

import Link from "next/link";
import LuxuryDivider from "@/components/ui/LuxuryDivider";

interface Perk {
  id: string;
  brand: string;
  category: string;
  benefit: string;
  details: string;
  code: string;
}

export default function PartnerPerksPage() {
  const perks: Perk[] = [
    {
      id: "1",
      brand: "The Wine Reserve",
      category: "Dining & Spirits",
      benefit: "15% off private cellar reserves",
      details: "Enjoy exclusive sommelier selections and private cellar tastings at privileged member rates.",
      code: "CIRCLE-VINTAGE",
    },
    {
      id: "2",
      brand: "AeroLuxe Private Aviation",
      category: "Aviation & Travel",
      benefit: "Priority charter & complimentary ground transfer",
      details: "Seamless helicopter and light-jet charter bookings direct to the Lakowe helipad.",
      code: "LLG-HELIPAD",
    },
    {
      id: "3",
      brand: "Revivo Wellness Spa",
      category: "Wellness & Spa",
      benefit: "Complimentary hydrotherapy pass",
      details: "Receive a private vitality pool session with any booked signature wellness ritual.",
      code: "REVIVO-INNER",
    },
    {
      id: "4",
      brand: "Lakowe Pro Shop & Fitting",
      category: "Golf Gear",
      benefit: "Member pricing on custom club fittings",
      details: "Complimentary TrackMan swing analysis session when ordering custom equipment.",
      code: "CHAMP-PRO",
    },
  ];

  return (
    <div className="min-h-screen bg-forest-gradient text-grey-light flex flex-col justify-between pb-36">
      <main className="w-full max-w-md mx-auto px-7 sm:px-8 pt-10 space-y-8">
        {/* Header */}
        <header className="stagger-1 flex items-center justify-between pb-2">
          <Link
            href="/services"
            className="w-10 h-10 rounded-2xl bg-[#0c3520] border border-bronze/20 flex items-center justify-center text-bronze hover:bg-bronze/10 transition-premium shadow-card focus:outline-none focus:ring-2 focus:ring-bronze/50"
            aria-label="Back to Estate Services"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="font-montserrat text-cream text-xl font-bold leading-tight tracking-tight text-center">
            Partner Perks
          </h1>
          <div className="w-10" />
        </header>

        <p className="stagger-2 font-montserrat text-cream/70 text-sm text-center -mt-4 mb-2 max-w-[280px] mx-auto leading-relaxed font-regular">
          Privileged rates from our luxury partner brands
        </p>

        {/* Perks List */}
        <section className="stagger-3 space-y-4">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className="p-5 rounded-[20px] bg-[#0c3520] border border-bronze/15 shadow-card hover:shadow-card-lg transition-premium space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-montserrat text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm bg-forest border border-bronze/20 text-bronze">
                  {perk.category}
                </span>
                <span className="font-montserrat text-xs text-cream/40 font-mono tracking-wider">
                  {perk.code}
                </span>
              </div>

              <div>
                <h2 className="font-montserrat text-cream text-base font-semibold leading-tight">
                  {perk.brand}
                </h2>
                <p className="font-montserrat text-bronze text-xs font-medium mt-1">
                  {perk.benefit}
                </p>
                <p className="font-montserrat text-cream/60 text-xs mt-2 leading-relaxed font-regular">
                  {perk.details}
                </p>
              </div>

              <div className="pt-2">
                <LuxuryDivider variant="dot" className="opacity-40 my-2" />
                <div className="flex items-center justify-between pt-1">
                  <span className="font-montserrat text-[11px] text-cream/50">Show Circle ID upon arrival</span>
                  <button
                    type="button"
                    onClick={() => alert(`Copied privilege code: ${perk.code}`)}
                    className="font-montserrat text-[11px] text-bronze font-semibold uppercase tracking-wider hover:underline"
                  >
                    Copy Privilege Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Back Link */}
        <div className="stagger-4 pt-2 text-center space-y-4">
          <LuxuryDivider className="opacity-50" />
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-montserrat text-xs text-cream/60 hover:text-cream transition-premium uppercase tracking-wider"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Return to All Estate Services
          </Link>
        </div>
      </main>
    </div>
  );
}
