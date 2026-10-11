"use client";

import Image from "next/image";
import Link from "next/link";
import LuxuryDivider from "@/components/ui/LuxuryDivider";
import SignatureMotif from "@/components/ui/SignatureMotif";

export default function DashboardPage() {
  const upcomingBookings = [
    {
      id: "1",
      title: "Championship 18-Hole",
      category: "Tee Time",
      date: "Tomorrow, Oct 12",
      time: "08:30 AM",
      location: "Lakeside Course",
      tag: "Confirmed",
    },
    {
      id: "2",
      title: "Lakeside Dining Reserve",
      category: "Restaurant",
      date: "Sat, Oct 14",
      time: "07:30 PM",
      location: "The Clubhouse Grill",
      tag: "Confirmed",
    },
    {
      id: "3",
      title: "Private Spa & Wellness",
      category: "Wellness",
      date: "Sun, Oct 15",
      time: "10:00 AM",
      location: "Estate Pavilion Spa",
      tag: "Pending",
    },
  ];

  const upcomingEvents = [
    {
      id: "1",
      title: "Annual Governor's Golf Cup",
      date: "Sat, Oct 21 • 09:00 AM",
      location: "Main Championship Fairway",
      description: "Exclusive 18-hole tournament with evening cocktail reception & prize ceremony.",
      image: "/images/golf_event.png",
      category: "Tournament",
    },
    {
      id: "2",
      title: "Lakeside Wine & Cellar Reserve",
      date: "Fri, Oct 27 • 06:30 PM",
      location: "Estate Clubhouse Lounge",
      description: "Sommelier-led tasting of vintage private cellars paired with artisanal charcuterie.",
      image: "/images/wine_tasting.png",
      category: "Gourmet Tasting",
    },
  ];

  return (
    <div className="min-h-screen bg-forest-gradient text-grey-light flex flex-col justify-between pb-28">
      <main className="w-full max-w-md mx-auto px-7 sm:px-8 pt-10 pb-10 space-y-9">
        {/* Top Header Bar */}
        <header className="stagger-1 flex items-center justify-between">
          <div className="w-10 h-10 rounded-2xl bg-[#0c3520] border border-bronze/20 flex items-center justify-center shadow-card flex-shrink-0">
            <span className="font-montserrat text-cream font-bold text-sm">LL</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-full border border-bronze/30 bg-[#0c3520]/60 flex items-center gap-1.5 shadow-sm backdrop-blur-sm">
            <SignatureMotif size={13} className="text-bronze" />
            <span className="font-montserrat text-bronze text-[10px] font-semibold tracking-widest uppercase">
              Platinum Member
            </span>
          </div>

          <Link href="/membership" className="relative w-10 h-10 rounded-full overflow-hidden border border-cream/20 shadow-card transition-premium focus:outline-none focus:ring-2 focus:ring-bronze flex-shrink-0">
            <Image
              src="/images/member_avatar.png"
              alt="Member Avatar"
              fill
              className="object-cover"
              sizes="40px"
            />
          </Link>
        </header>

        {/* Greeting Section */}
        <section className="stagger-2 space-y-3">
          <h1 className="font-montserrat text-cream text-4xl font-bold leading-[1.1] tracking-tight">
            Welcome back,<br />Johnson
          </h1>
          <p className="font-montserrat text-cream/50 text-sm leading-relaxed max-w-[240px] font-regular">
            What would you like to do today?
          </p>
        </section>

        {/* Quick-Action Tiles */}
        <section className="stagger-3 space-y-4 relative py-2">
          <div className="absolute inset-0 bg-glass-texture -z-10 rounded-[32px] opacity-70" />
          
          {/* Primary Action: Book Golf */}
          <Link
            href="/booking"
            className="group p-6 glass-panel-subtle transition-premium flex flex-col min-h-[140px] focus:outline-none focus:ring-2 focus:ring-bronze/40 hover:bg-cream/10"
          >
            <div className="w-12 h-12 mb-5 rounded-xl bg-transparent border border-bronze/30 flex items-center justify-center group-hover:scale-105 transition-premium shadow-sm">
              <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="18" r="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4l6 3-6 3" />
              </svg>
            </div>
            <div>
              <h3 className="font-montserrat text-cream text-xl font-semibold transition-premium leading-tight mb-1.5 drop-shadow-sm">
                Book Golf
              </h3>
              <p className="font-montserrat text-cream/80 text-[11px] font-medium tracking-wide">
                Championship Course
              </p>
            </div>
          </Link>

          {/* Secondary Actions (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/services"
              className="group p-4 glass-panel-subtle transition-premium flex flex-col min-h-[108px] focus:outline-none focus:ring-2 focus:ring-cream/20 items-center text-center justify-center hover:bg-cream/10"
            >
              <div className="w-9 h-9 mb-2.5 flex items-center justify-center transition-premium group-hover:scale-105">
                <svg className="w-5 h-5 text-cream/80 group-hover:text-cream transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.25">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
              </div>
              <h3 className="font-montserrat text-cream text-xs font-semibold transition-premium leading-tight drop-shadow-sm">Estate Services</h3>
            </Link>

            <Link
              href="/concierge"
              className="group p-4 glass-panel-subtle transition-premium flex flex-col min-h-[108px] focus:outline-none focus:ring-2 focus:ring-cream/20 items-center text-center justify-center hover:bg-cream/10"
            >
              <div className="w-9 h-9 mb-2.5 flex items-center justify-center transition-premium group-hover:scale-105">
                <svg className="w-5 h-5 text-cream/80 group-hover:text-cream transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3 className="font-montserrat text-cream text-xs font-semibold transition-premium leading-tight drop-shadow-sm">Concierge</h3>
            </Link>

            <Link
              href="/maintenance"
              className="group p-4 glass-panel-subtle transition-premium flex flex-col min-h-[108px] focus:outline-none focus:ring-2 focus:ring-cream/20 items-center text-center justify-center hover:bg-cream/10"
            >
              <div className="w-9 h-9 mb-2.5 flex items-center justify-center transition-premium group-hover:scale-105">
                <svg className="w-5 h-5 text-cream/80 group-hover:text-cream transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l2.496-3.03c.317-.384.74-.664 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655M11.42 15.17l-.766 1.208" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.83 9.17l1.586-1.586a1.5 1.5 0 10-2.122-2.122l-1.585 1.586m2.121 2.122l-3.03 2.496m-1.208-.766l2.496-3.03" />
                </svg>
              </div>
              <h3 className="font-montserrat text-cream text-xs font-semibold transition-premium leading-tight drop-shadow-sm">Fixes</h3>
            </Link>

            <Link
              href="/membership"
              className="group p-4 glass-panel-subtle transition-premium flex flex-col min-h-[108px] focus:outline-none focus:ring-2 focus:ring-cream/20 items-center text-center justify-center hover:bg-cream/10"
            >
              <div className="w-9 h-9 mb-2.5 flex items-center justify-center transition-premium group-hover:scale-105">
                <svg className="w-5 h-5 text-cream/80 group-hover:text-cream transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.25">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h4" />
                </svg>
              </div>
              <h3 className="font-montserrat text-cream text-xs font-semibold transition-premium leading-tight drop-shadow-sm">Profile</h3>
            </Link>
          </div>
        </section>

        <LuxuryDivider className="my-2" />

        {/* Upcoming Bookings */}
        <section className="stagger-4 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-montserrat text-cream text-lg font-semibold leading-tight">
              Upcoming Bookings
            </h2>
            <Link href="/booking" className="font-montserrat text-bronze text-xs font-semibold hover:underline underline-offset-2 transition-premium">
              View All
            </Link>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-none -mx-7 sm:-mx-8 px-7 sm:px-8">
            {upcomingBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex-shrink-0 w-[260px] p-6 rounded-[20px] bg-[#0c3520] border border-cream/10 shadow-card space-y-4 hover:shadow-card-lg transition-premium"
              >
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-cream/80 text-[10px] font-semibold tracking-wider uppercase border border-cream/20 px-2 py-0.5 rounded-sm">
                    {booking.category}
                  </span>
                  <span className="text-[10px] font-montserrat text-bronze font-semibold tracking-wide uppercase">
                    {booking.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-montserrat text-cream text-base font-semibold leading-tight line-clamp-1">
                    {booking.title}
                  </h3>
                  <p className="font-montserrat text-cream/50 text-xs mt-1.5 font-medium">
                    {booking.location}
                  </p>
                </div>

                <div className="pt-4 border-t border-cream/5 flex items-center justify-between text-[11px] text-cream/70 font-montserrat">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-cream/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium tracking-wide">{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cream/90 font-semibold">
                    <svg className="w-3.5 h-3.5 text-cream/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="tracking-wide">{booking.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <LuxuryDivider className="my-2" />

        {/* Estate Updates */}
        <section className="stagger-5 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-montserrat text-cream text-lg font-semibold leading-tight">
              Estate Updates
            </h2>
            <button className="font-montserrat text-bronze text-xs font-semibold hover:underline underline-offset-2 transition-premium">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-[20px] bg-[#0c3520] border border-cream/10 overflow-hidden shadow-card hover:shadow-card-lg group transition-premium"
              >
                <div className="relative w-full h-40 overflow-hidden bg-forest">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-80 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c3520] via-[#0c3520]/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-2 py-0.5 rounded-sm bg-forest/90 backdrop-blur-md border border-cream/20 text-cream/90 font-montserrat text-[9px] font-semibold tracking-widest uppercase">
                    {event.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-montserrat text-cream text-base font-semibold group-hover:text-cream transition-premium leading-tight">
                    {event.title}
                  </h3>
                  <div className="flex items-center justify-between text-[11px] text-cream/60 font-montserrat font-medium tracking-wide">
                    <span className="text-cream/90 font-semibold">{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                  <p className="font-montserrat text-cream/50 text-xs leading-relaxed line-clamp-2 pt-1">
                    {event.description}
                  </p>
                  <div className="pt-4 border-t border-cream/10 flex justify-end">
                    <button className="font-montserrat text-bronze text-xs font-semibold flex items-center gap-1.5 hover:gap-2 transition-all uppercase tracking-wider">
                      RSVP
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar — softened inactive states */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-forest/95 backdrop-blur-md border-t border-cream/10 px-6 py-3 flex items-center justify-between z-50">
        <Link href="/dashboard" className="flex flex-col items-center gap-1.5 text-bronze relative">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span className="font-montserrat text-[10px] font-bold tracking-wider uppercase">Home</span>
          <span className="absolute bottom-[3px] w-8 h-[2px] rounded-full bg-bronze"></span>
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
