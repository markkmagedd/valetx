"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import { ValetServiceIcon } from "@/components/Icons";

export default function SearchingPage() {
  const router = useRouter();
  const [dots, setDots] = useState("");

  // Animate the "Searching..." text
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Navigate to valet found page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/valet-found");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="mobile-screen bg-navy-dark text-white">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Loading Animation */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Outer ring */}
          <div className="absolute w-64 h-64 rounded-full border-4 border-white/20 animate-pulse-slow" />

          {/* Middle ring */}
          <div
            className="absolute w-48 h-48 rounded-full border-4 border-white/30 animate-pulse-slow"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Inner circle */}
          <div
            className="absolute w-32 h-32 rounded-full border-4 border-white/40 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />

          {/* Center content */}
          <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
            <ValetServiceIcon className="w-24 h-24" />
          </div>
        </div>

        {/* Searching Text */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white">Searching{dots}</h2>
        </div>

        {/* Cancel Button */}
        <div className="w-full max-w-sm">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => router.push("/home")}
            className="w-full"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
