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
          <div className="relative z-10 bg-yellow-500 rounded-full p-8 shadow-2xl">
            <svg
              className="w-16 h-16"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Car body */}
              <path
                d="M10 32 L16 20 L48 20 L54 32 L54 44 L10 44 Z"
                fill="#0f1c2e"
                stroke="#0f1c2e"
                strokeWidth="2"
              />
              {/* Car roof */}
              <path
                d="M20 20 L22 12 L42 12 L44 20"
                fill="#0f1c2e"
                stroke="#0f1c2e"
                strokeWidth="2"
              />
              {/* Windows */}
              <rect
                x="24"
                y="14"
                width="7"
                height="6"
                fill="white"
                opacity="0.3"
              />
              <rect
                x="33"
                y="14"
                width="7"
                height="6"
                fill="white"
                opacity="0.3"
              />
              {/* Wheels */}
              <circle cx="20" cy="44" r="5" fill="#0f1c2e" />
              <circle cx="20" cy="44" r="3" fill="#666" />
              <circle cx="44" cy="44" r="5" fill="#0f1c2e" />
              <circle cx="44" cy="44" r="3" fill="#666" />
            </svg>
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
