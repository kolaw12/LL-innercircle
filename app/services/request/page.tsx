"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import SuccessModal from "@/components/ui/SuccessModal";
import LuxuryDivider from "@/components/ui/LuxuryDivider";

const CATEGORY_CONFIG: Record<string, { title: string; defaultService: string; options: string[] }> = {
  dining: {
    title: "Dining & In-Room Orders",
    defaultService: "Table Reservation",
    options: [
      "Table Reservation",
      "Room Service Order",
      "Private Chef Request",
      "Lakeside Picnic Hamper",
      "Sommelier Wine Delivery",
    ],
  },
  transport: {
    title: "Transport",
    defaultService: "Airport Pickup",
    options: [
      "Airport Pickup",
      "Golf Cart Request",
      "Local Chauffeur Ride",
      "Estate Shuttle Service",
      "Helipad VIP Transfer",
    ],
  },
  wellness: {
    title: "Wellness",
    defaultService: "Spa & Massage Appointment",
    options: [
      "Spa & Massage Appointment",
      "Personal Training Session",
      "Private Yoga & Meditation",
      "Physiotherapy Consultation",
      "Hydrotherapy & Sauna Session",
    ],
  },
  events: {
    title: "Event Services",
    defaultService: "Private Catering & Dining",
    options: [
      "Private Catering & Dining",
      "Event Decoration & Floral",
      "Event Photography & Video",
      "Pavilion Venue Reservation",
      "Cocktail Reception Setup",
    ],
  },
  property: {
    title: "Home & Property",
    defaultService: "Housekeeping & Turn-down",
    options: [
      "Housekeeping & Turn-down",
      "Interior Design Consultation",
      "Property Inspection & Maintenance",
      "Lakeside Villa Sub-lease Assistance",
      "Landscape & Garden Care",
    ],
  },
  marketplace: {
    title: "Member Marketplace",
    defaultService: "List Item for Sale",
    options: [
      "List Item for Sale",
      "Member Item Valuation",
      "Golf Equipment Exchange",
      "Estate Vehicle Trading",
      "Private Circle Classifieds",
    ],
  },
};

function ServiceRequestContent() {
  const searchParams = useSearchParams();
  const categoryKey = searchParams.get("category") || "dining";
  const config = CATEGORY_CONFIG[categoryKey] || {
    title: "Estate Service",
    defaultService: "General Estate Request",
    options: [
      "General Estate Request",
      "Special Arrangement",
      "Private Concierge Booking",
      "Estate Staff Inquiry",
    ],
  };

  const [serviceType, setServiceType] = useState(config.defaultService);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `SR-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceNumber(randomRef);
    setIsSubmitted(true);
  };

  const router = useRouter();


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
          <h1 className="font-montserrat text-cream text-lg font-bold leading-tight tracking-tight text-center truncate max-w-[240px]">
            Request: {config.title}
          </h1>
          <div className="w-10" />
        </header>

        <p className="stagger-2 font-montserrat text-cream/70 text-sm text-center -mt-4 mb-2 max-w-[280px] mx-auto leading-relaxed font-regular">
          Tell us what you need — our team will arrange it.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="stagger-3 space-y-6">
          {/* Service Type Dropdown */}
          <div className="space-y-2 relative z-40">
            <label className="font-montserrat text-[10px] text-bronze font-semibold uppercase tracking-widest block pl-1">
              Service Type
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full min-h-[52px] px-5 pr-12 rounded-2xl bg-[#0c3520] text-cream border font-montserrat text-sm focus:outline-none transition-premium flex items-center shadow-sm text-left ${
                  isDropdownOpen ? "border-bronze ring-1 ring-bronze/50" : "border-bronze/30 hover:border-bronze/60"
                }`}
              >
                <span className="truncate">{serviceType}</span>
              </button>
              <div
                className={`absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-bronze transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Custom Dropdown Menu */}
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute top-full left-0 right-0 mt-2 z-40 bg-[#0c3520] border border-bronze/30 rounded-2xl shadow-card-lg overflow-hidden py-2 animate-fade-in origin-top">
                    {config.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setServiceType(option);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-5 py-3.5 text-left font-montserrat text-sm transition-premium flex items-center justify-between hover:bg-bronze/10 focus:bg-bronze/10 focus:outline-none select-none ${
                          serviceType === option ? "text-bronze font-semibold" : "text-cream/90 font-medium"
                        }`}
                      >
                        <span className="truncate">{option}</span>
                        {serviceType === option && (
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Preferred Date & Time */}
          <div className="space-y-2">
            <label htmlFor="dateTime" className="font-montserrat text-[13px] text-cream/70 font-medium block pl-1">
              Preferred Date & Time
            </label>
            <input
              id="dateTime"
              type="text"
              required
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              placeholder="e.g. Tomorrow at 7:30 PM, or Oct 15 Morning"
              className="w-full min-h-[52px] px-5 rounded-2xl bg-cream text-charcoal placeholder-charcoal/40 font-montserrat text-sm border-2 border-transparent focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/50 transition-premium shadow-card"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label htmlFor="location" className="font-montserrat text-[13px] text-cream/70 font-medium block pl-1">
              Location
            </label>
            <input
              id="location"
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Cottage 14, Clubhouse, Lodge Room 2"
              className="w-full min-h-[52px] px-5 rounded-2xl bg-cream text-charcoal placeholder-charcoal/40 font-montserrat text-sm border-2 border-transparent focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/50 transition-premium shadow-card"
            />
          </div>

          <LuxuryDivider className="my-6 opacity-50" />

          {/* Details */}
          <div className="space-y-2">
            <label htmlFor="details" className="font-montserrat text-[13px] text-cream/70 font-medium block pl-1">
              Details
            </label>
            <textarea
              id="details"
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Any specific requests or notes..."
              className="w-full p-5 rounded-2xl bg-cream text-charcoal placeholder-charcoal/40 font-montserrat text-sm border-2 border-transparent focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/50 transition-premium shadow-card resize-none"
            />
          </div>

          {/* Add Reference Photo */}
          <div className="space-y-2">
            <label className="font-montserrat text-[13px] text-cream/70 font-medium block pl-1">
              Add Reference Photo (Optional)
            </label>
            {photoPreview ? (
              <div className="relative w-full h-40 rounded-2xl overflow-hidden border border-bronze/50 shadow-card group">
                <Image src={photoPreview} alt="Service Request Preview" fill className="object-cover" />
                <button
                  type="button"
                  onClick={() => setPhotoPreview(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-cream hover:bg-black transition-premium shadow-md focus:outline-none focus:ring-2 focus:ring-cream"
                  aria-label="Remove photo"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center min-h-[120px] rounded-2xl border border-dashed border-bronze/40 bg-transparent hover:bg-bronze/5 cursor-pointer transition-premium p-5 group focus-within:ring-2 focus-within:ring-bronze/50">
                <input type="file" accept="image/*" onChange={handlePhotoUpload} className="sr-only" />
                <svg className="w-8 h-8 text-bronze/60 group-hover:scale-110 group-hover:text-bronze transition-all duration-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-montserrat text-xs text-cream/60 font-medium text-center uppercase tracking-wider">
                  Tap to add a reference photo
                </span>
              </label>
            )}
          </div>
        </form>
      </main>

      {/* Fixed Bottom Submit */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-forest/95 backdrop-blur-md border-t border-bronze/20 p-5 z-50 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <button
          onClick={handleSubmit}
          type="button"
          className="btn-luxury-primary"
        >
          Submit Request
        </button>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSubmitted}
        onClose={() => setIsSubmitted(false)}
        title="Request Submitted"
        referenceNumber={referenceNumber}
        description={`We have received your request for ${serviceType} at ${location || "your estate location"}. Our team will confirm shortly.`}
        buttonText="Return to Estate Services"
        onButtonClick={() => router.push("/services")}
        secondaryButtonText="Submit Another Request"
        onSecondaryButtonClick={() => {
          setIsSubmitted(false);
          setLocation("");
          setDetails("");
          setDateTime("");
          setPhotoPreview(null);
        }}
      />
    </div>
  );
}

export default function ServiceRequestPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-forest-gradient flex items-center justify-center text-cream font-montserrat text-sm">
        Loading service request...
      </div>
    }>
      <ServiceRequestContent />
    </Suspense>
  );
}
