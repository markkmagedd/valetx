"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Button from "@/components/Button";

function FoundContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service") || "quick-wash";

  // Service details mapping
  const getServiceDetails = (id: string) => {
    switch (id) {
      case "quick-wash":
        return {
          name: 'Exterior "Quick Wash"',
          price: "70 EGP", // Midpoint of 50-90
          time: "15 Mins",
          specialist: "Tarek Mahmoud",
          eta: "6 mins",
          phone: "+20 100 987 6543",
        };
      case "interior-cleaning":
        return {
          name: "Interior Cleaning",
          price: "90 EGP", // Midpoint of 70-110
          time: "20 Mins",
          specialist: "Kamal Eldin",
          eta: "8 mins",
          phone: "+20 111 876 5432",
        };
      case "full-detail":
        return {
          name: "Full Interior Detail",
          price: "500 EGP", // Midpoint of 400-600
          time: "1.5 Hours",
          specialist: "Youssef Sherif",
          eta: "12 mins",
          phone: "+20 122 765 4321",
        };
      default:
        return {
          name: "Car Wash Service",
          price: "80 EGP",
          time: "25 Mins",
          specialist: "Mostafa Omar",
          eta: "10 mins",
          phone: "+20 100 111 2222",
        };
    }
  };

  const details = getServiceDetails(serviceId);

  return (
    <div className="mobile-screen bg-navy-dark text-white">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        
        {/* Success Icon Group */}
        <div className="relative flex items-center justify-center mb-10 animate-fadeIn">
          <div className="bg-yellow-500 rounded-3xl p-7 shadow-2xl">
            <svg
              className="w-20 h-20 text-navy-dark animate-pulse-slow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          {/* Success Checkmark Badge */}
          <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2.5 shadow-md">
            <svg
              className="w-6 h-6 text-white"
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

        {/* Success Header Message */}
        <div
          className="text-center mb-8 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="heading-lg text-white mb-2">Specialist Matched!</h2>
          <p className="body-md text-gray-300 max-w-sm mx-auto">
            A washing specialist has accepted your request and is heading to your vehicle.
          </p>
        </div>

        {/* Request & Specialist Summary Card */}
        <div
          className="w-full max-w-sm bg-white/10 rounded-2xl p-6 mb-8 animate-fadeIn space-y-4"
          style={{ animationDelay: "0.4s" }}
        >
          <div>
            <p className="text-xs text-yellow-500 font-bold uppercase tracking-wider mb-2">
              Service Confirmed
            </p>
            <div className="flex justify-between items-center">
              <span className="text-white font-bold text-lg">{details.name}</span>
              <span className="text-yellow-500 font-extrabold text-lg">{details.price}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Est. Duration: {details.time}</p>
          </div>

          <hr className="border-white/10" />

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Wash Specialist:</span>
              <span className="text-white font-semibold">{details.specialist}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Estimated Arrival:</span>
              <span className="text-green-400 font-semibold">{details.eta}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Specialist Rating:</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-white text-sm font-bold">4.9</span>
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
              alert(`Calling Specialist ${details.specialist}:\n${details.phone}`);
            }}
            className="w-full"
          >
            Contact Specialist
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => router.push("/home")}
            className="w-full border-white/20 text-white hover:bg-white/10"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function FoundPage() {
  return (
    <Suspense fallback={
      <div className="mobile-screen bg-navy-dark text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-300 font-semibold">Loading specialist profile...</p>
        </div>
      </div>
    }>
      <FoundContent />
    </Suspense>
  );
}
