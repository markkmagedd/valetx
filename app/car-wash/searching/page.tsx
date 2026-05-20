"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Button from "@/components/Button";

function SearchingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service") || "quick-wash";
  
  const [dots, setDots] = useState("");

  const getServiceName = (id: string) => {
    switch (id) {
      case "quick-wash":
        return 'Exterior "Quick Wash"';
      case "interior-cleaning":
        return "Interior Cleaning";
      case "full-detail":
        return "Full Interior Detail";
      default:
        return "Car Wash";
    }
  };

  // Animate the "Matching" text dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Navigate to washer matched page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/car-wash/found?service=${serviceId}`);
    }, 5000);

    return () => clearTimeout(timer);
  }, [router, serviceId]);

  return (
    <div className="mobile-screen bg-navy-dark text-white overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 relative">
        
        {/* Floating Bubbles Background Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
        </div>

        {/* Loading / Searching Animation */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Outer Ring */}
          <div className="absolute w-64 h-64 rounded-full border-4 border-yellow-500/20 animate-pulse-slow" />

          {/* Middle Ring */}
          <div
            className="absolute w-48 h-48 rounded-full border-4 border-yellow-500/30 animate-pulse-slow"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Inner Circle */}
          <div
            className="absolute w-32 h-32 rounded-full border-4 border-yellow-500/40 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />

          {/* Center Content with Bubbling/Washing Visual */}
          <div className="relative z-10 bg-yellow-500 rounded-full p-8 shadow-2xl relative overflow-hidden">
            <svg
              className="w-16 h-16 text-navy-dark"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Wash Brush / Sprayer representation */}
              <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" className="animate-spin-slow" />
              <path
                d="M16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Sparkles */}
              <path d="M12 12L13 14L15 15L13 16L12 18L11 16L9 15L11 14L12 12Z" fill="currentColor" />
              <path d="M36 30L37 32L39 33L37 34L36 36L35 34L33 33L35 32L36 30Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Status Text */}
        <div className="text-center mb-4 z-10">
          <h2 className="heading-lg text-white font-extrabold">Matching Washer{dots}</h2>
          <p className="text-gray-300 text-sm mt-2 font-medium px-4">
            Assigning a specialist for your <span className="text-yellow-500 font-semibold">{getServiceName(serviceId)}</span>
          </p>
        </div>

        {/* Small Tips Carousels/Cards */}
        <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-4 mb-16 text-center z-10 animate-fadeIn">
          <p className="text-xs text-yellow-500 font-bold uppercase tracking-wider mb-1">💡 Pro Tip</p>
          <p className="text-xs text-gray-300">
            Please make sure your vehicle is unlocked if you requested interior cleaning services.
          </p>
        </div>

        {/* Cancel Button */}
        <div className="w-full max-w-sm z-10">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => router.push(`/car-wash?service=${serviceId}`)}
            className="w-full border-white/20 text-white hover:bg-white/10"
          >
            Cancel
          </Button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-up {
          0% {
            transform: translateY(100px) scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-300px) scale(1.2);
            opacity: 0;
          }
        }
        .bubble {
          position: absolute;
          bottom: -50px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          animation: float-up 6s infinite ease-in-out;
        }
        .bubble-1 { left: 10%; width: 30px; height: 30px; animation-duration: 5s; }
        .bubble-2 { left: 30%; width: 15px; height: 15px; animation-duration: 7s; animation-delay: 1.5s; }
        .bubble-3 { left: 55%; width: 25px; height: 25px; animation-duration: 6s; animation-delay: 0.5s; }
        .bubble-4 { left: 75%; width: 20px; height: 20px; animation-duration: 8s; animation-delay: 2s; }
        .bubble-5 { left: 90%; width: 12px; height: 12px; animation-duration: 4s; animation-delay: 3s; }
      `}</style>
    </div>
  );
}

export default function SearchingPage() {
  return (
    <Suspense fallback={
      <div className="mobile-screen bg-navy-dark text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-300 font-semibold">Loading match parameters...</p>
        </div>
      </div>
    }>
      <SearchingContent />
    </Suspense>
  );
}
