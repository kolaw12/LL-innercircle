"use client";

import { useState } from "react";
import Link from "next/link";
import LuxuryDivider from "@/components/ui/LuxuryDivider";
import SignatureMotif from "@/components/ui/SignatureMotif";

export default function BookingPage() {
  const [selectedCourse, setSelectedCourse] = useState("18-Hole Championship Course");
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState(2);
  const [selectedDate, setSelectedDate] = useState("2026-10-14");
  const [selectedTime, setSelectedTime] = useState("08:30 AM");

  const dates = [
    { dateStr: "2026-10-12", day: "Mon", num: "12" },
    { dateStr: "2026-10-13", day: "Tue", num: "13" },
    { dateStr: "2026-10-14", day: "Wed", num: "14" },
    { dateStr: "2026-10-15", day: "Thu", num: "15" },
    { dateStr: "2026-10-16", day: "Fri", num: "16" },
    { dateStr: "2026-10-17", day: "Sat", num: "17" },
    { dateStr: "2026-10-18", day: "Sun", num: "18" },
  ];

  const courses = [
    "18-Hole Championship Course",
    "9-Hole Mashie Course",
    "Driving Range & Practice Bays"
  ];

  const timeSlots = [
    { time: "07:00 AM", available: true },
    { time: "07:30 AM", available: true },
    { time: "08:00 AM", available: false },
    { time: "08:30 AM", available: true },
    { time: "09:00 AM", available: true },
    { time: "09:30 AM", available: false },
    { time: "10:00 AM", available: true },
    { time: "10:30 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "11:30 AM", available: true },
    { time: "12:00 PM", available: true },
    { time: "12:30 PM", available: false },
    { time: "01:00 PM", available: true },
    { time: "01:30 PM", available: true },
    { time: "02:00 PM", available: true },
    { time: "02:30 PM", available: false },
    { time: "03:00 PM", available: true },
    { time: "03:30 PM", available: true },
    { time: "04:00 PM", available: true },
    { time: "04:30 PM", available: false },
    { time: "05:00 PM", available: true },
  ];

  return (
    <div className="min-h-screen bg-forest-gradient text-grey-light flex flex-col justify-between pb-32">
      <main className="w-full max-w-md mx-auto px-7 sm:px-8 pt-10 space-y-9">
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
            Book a Tee Time
          </h1>
          <div className="w-10" />
        </header>

        {/* Course Filter */}
        <section className="stagger-2 relative z-40">
          <label className="font-montserrat text-[10px] text-bronze font-semibold uppercase tracking-widest block mb-3">
            Select Course
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
              className={`w-full min-h-[52px] px-5 pr-12 rounded-2xl bg-[#0c3520] text-cream border font-montserrat text-sm focus:outline-none transition-premium flex items-center shadow-sm text-left ${isCourseDropdownOpen ? 'border-bronze ring-1 ring-bronze/50' : 'border-bronze/30 hover:border-bronze/60'}`}
            >
              <span className="truncate">{selectedCourse}</span>
            </button>
            <div className={`absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-bronze transition-transform duration-300 ${isCourseDropdownOpen ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Custom Dropdown Menu */}
            {isCourseDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setIsCourseDropdownOpen(false)} 
                />
                <div className="absolute top-full left-0 right-0 mt-2 z-40 bg-[#0c3520] border border-bronze/30 rounded-2xl shadow-card-lg overflow-hidden py-2 animate-fade-in origin-top">
                  {courses.map((course) => (
                    <button
                      key={course}
                      type="button"
                      onClick={() => {
                        setSelectedCourse(course);
                        setIsCourseDropdownOpen(false);
                      }}
                      className={`w-full px-5 py-3.5 text-left font-montserrat text-sm transition-premium flex items-center justify-between hover:bg-bronze/10 focus:bg-bronze/10 focus:outline-none ${selectedCourse === course ? 'text-bronze font-semibold' : 'text-cream/90 font-medium'}`}
                    >
                      <span className="truncate">{course}</span>
                      {selectedCourse === course && (
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
        </section>

        {/* Players Filter */}
        <section>
          <label className="font-montserrat text-[13px] text-cream/70 font-medium block mb-3">
            Number of Players
          </label>
          <div className="grid grid-cols-4 gap-2.5">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setSelectedPlayers(num)}
                className={`min-h-[48px] rounded-xl text-sm font-montserrat font-semibold transition-premium border focus:outline-none focus:ring-2 focus:ring-bronze/40 ${
                  selectedPlayers === num
                    ? "bg-[#0c3520] text-bronze border-bronze shadow-card"
                    : "bg-transparent text-cream/60 border-bronze/10 hover:border-bronze/30 hover:text-cream"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </section>

        {/* Date Selector */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-montserrat text-cream text-lg font-semibold leading-tight">October 2026</h2>
            <span className="font-montserrat text-xs text-cream/50 font-medium">Select date</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 pt-1 scrollbar-none -mx-6 px-6">
            {dates.map((d) => {
              const isSelected = selectedDate === d.dateStr;
              return (
                <button
                  key={d.dateStr}
                  onClick={() => setSelectedDate(d.dateStr)}
                  className={`flex-shrink-0 w-[64px] h-[84px] rounded-xl flex flex-col items-center justify-center gap-1.5 transition-premium border focus:outline-none focus:ring-2 focus:ring-bronze/40 ${
                    isSelected
                      ? "bg-[#0c3520] text-cream border-bronze shadow-card"
                      : "bg-transparent text-cream/50 border-bronze/15 hover:border-bronze/30 hover:text-cream"
                  }`}
                >
                  <span className={`font-montserrat text-[10px] tracking-widest uppercase ${isSelected ? "text-bronze font-semibold" : "font-medium"}`}>
                    {d.day}
                  </span>
                  <span className={`font-montserrat text-xl leading-none ${isSelected ? "font-bold" : "font-medium"}`}>{d.num}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Available Time Slots */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-montserrat text-cream text-lg font-semibold leading-tight">Available Times</h2>
            <span className="font-montserrat text-xs text-cream/50 font-medium">30 min intervals</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {timeSlots.map((slot) => {
              const isSelected = selectedTime === slot.time;
              return (
                <button
                  key={slot.time}
                  disabled={!slot.available}
                  onClick={() => setSelectedTime(slot.time)}
                  className={`min-h-[48px] rounded-xl text-[11px] font-montserrat font-semibold transition-premium border flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-bronze/40 ${
                    !slot.available
                      ? "bg-transparent text-cream/20 border-cream/5 cursor-not-allowed line-through"
                      : isSelected
                      ? "bg-[#0c3520] text-bronze border-bronze shadow-card"
                      : "bg-transparent text-cream/70 border-bronze/20 hover:border-bronze/40 hover:text-cream"
                  }`}
                >
                  {slot.time}
                </button>
              );
            })}
          </div>
        </section>

        {/* Booking Summary */}
        <section className="stagger-4 p-5 rounded-2xl bg-[#0c3520]/50 border border-bronze/20 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-montserrat text-xs text-cream/70 font-semibold uppercase tracking-wider">
              Summary
            </span>
            <SignatureMotif size={18} className="text-bronze/70" />
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="font-montserrat text-cream/60">Selected Time:</span>
            <span className="font-montserrat font-bold text-bronze">{selectedTime}</span>
          </div>
          <LuxuryDivider className="my-2" />
          <div className="flex items-center justify-between text-xs">
            <span className="font-montserrat text-cream/60">Details:</span>
            <span className="font-montserrat font-medium text-cream">{selectedPlayers} Guests • {selectedCourse.split(' ')[0]}</span>
          </div>
        </section>
      </main>

      {/* Fixed Bottom Confirm Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-forest/95 backdrop-blur-md border-t border-bronze/20 p-5 z-50 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <button
          type="button"
          onClick={() => alert(`Tee time confirmed for ${selectedDate} at ${selectedTime} (${selectedCourse})`)}
          className="btn-luxury-primary"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
