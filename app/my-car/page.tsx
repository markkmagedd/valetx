"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Image from "next/image";

export default function MyCarPage() {
  const router = useRouter();

  return (
    <div className="mobile-screen bg-gray-50">
      <div className="flex-1 flex flex-col px-6 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/home")}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-navy-dark">My Car</h1>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>

        {/* Car Image */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/car-hero.png"
              alt="My Car"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Car Details */}
        <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-navy-dark mb-4">
            Vehicle Information
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Make & Model</span>
              <span className="text-navy-dark font-semibold">
                Toyota Corolla
              </span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Year</span>
              <span className="text-navy-dark font-semibold">2024</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Color</span>
              <span className="text-navy-dark font-semibold">Pearl White</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">License Plate</span>
              <span className="text-navy-dark font-semibold">ABC 1234</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">VIN</span>
              <span className="text-navy-dark font-semibold text-sm">
                1G4ZX5SS8LU123456
              </span>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Parking Location</span>
              <span className="text-navy-dark font-semibold">Slot B-23</span>
            </div>
          </div>
        </div>

        {/* Service History */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-navy-dark mb-4">
            Recent Valet Services
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="bg-yellow-500 rounded-full p-2 mt-1">
                <svg
                  className="w-5 h-5 text-navy-dark"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-navy-dark">
                  City Mall Parking
                </p>
                <p className="text-sm text-gray-600">December 15, 2024</p>
                <p className="text-sm text-gray-500">Valet: Ahmed Hassan</p>
              </div>
              <span className="text-green-600 font-semibold">✓</span>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="bg-yellow-500 rounded-full p-2 mt-1">
                <svg
                  className="w-5 h-5 text-navy-dark"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-navy-dark">Downtown Plaza</p>
                <p className="text-sm text-gray-600">December 10, 2024</p>
                <p className="text-sm text-gray-500">Valet: Mohamed Ali</p>
              </div>
              <span className="text-green-600 font-semibold">✓</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="pb-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => router.push("/home")}
            className="w-full bg-navy-dark hover:bg-navy text-white"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
