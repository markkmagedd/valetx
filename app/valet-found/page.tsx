"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { ValetServiceIcon } from "@/components/Icons";

export default function ValetFoundPage() {
  const router = useRouter();

  return (
    <div className="mobile-screen bg-navy-dark text-white">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Success Icon */}
        <div className="relative flex items-center justify-center mb-12 animate-fadeIn">
          <div className="bg-yellow-500 rounded-3xl p-8 shadow-2xl">
            <ValetServiceIcon className="w-24 h-24" />
          </div>

          {/* Checkmark overlay */}
          <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-3">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <div
          className="text-center mb-8 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="heading-lg text-white mb-4">Valet Found!</h2>
          <p className="body-md text-gray-300 max-w-sm mx-auto">
            Your valet is on the way and will arrive shortly.
          </p>
        </div>

        {/* Valet Details */}
        <div
          className="w-full max-w-sm bg-white/10 rounded-2xl p-6 mb-8 animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Valet Name:</span>
              <span className="text-white font-semibold">Ahmed Hassan</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">ETA:</span>
              <span className="text-yellow-500 font-semibold">3 minutes</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Rating:</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-white">5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className="w-full max-w-sm space-y-4 animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              alert("Valet Phone Number:\n+20 100 123 4567");
            }}
            className="w-full"
          >
            Contact Valet
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => router.push("/home")}
            className="w-full"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
