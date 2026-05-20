"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/Button";

interface WashService {
  id: string;
  name: string;
  price: string;
  time: string;
  includes: string[];
  description: string;
}

const WASH_SERVICES: WashService[] = [
  {
    id: "quick-wash",
    name: 'Exterior "Quick Wash"',
    price: "50 – 90 EGP",
    time: "15 Mins",
    description: "Ideal for a quick external shine and dust removal.",
    includes: ["Shampoo & rinse", "Tire shine", "Microfiber cloth dry"],
  },
  {
    id: "interior-cleaning",
    name: "Interior Cleaning",
    price: "70 – 110 EGP",
    time: "20 Mins",
    description: "Deep cabin vacuuming and surface disinfection.",
    includes: ["Dashboard polish", "Thorough vacuuming", "Glass cleaner & wipe"],
  },
  {
    id: "full-detail",
    name: "Full Interior Detail",
    price: "400 – 600 EGP",
    time: "1 - 2 Hours",
    description: "Complete premium restoration of all internal materials.",
    includes: ["Fabric & leather cleaners", "Steam treatment", "Upholstery shampoo"],
  },
];

export default function CarWashSelectionPage() {
  const router = useRouter();
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
  };

  const handleConfirm = () => {
    if (selectedServiceId) {
      router.push(`/car-wash/searching?service=${selectedServiceId}`);
    }
  };

  return (
    <div className="mobile-screen bg-gray-50">
      <div className="flex-1 flex flex-col px-6 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/home")}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors active:scale-95"
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
          <h1 className="text-2xl font-bold text-navy-dark">Car Wash Services</h1>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>

        {/* Info Box */}
        <div className="bg-navy-dark text-white rounded-2xl p-5 shadow-md flex items-center space-x-4 animate-fadeIn">
          <div className="bg-yellow-500 text-navy-dark rounded-xl p-3 shrink-0">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Buick Envision</h2>
            <p className="text-sm text-gray-300">License Plate: ABC 1234</p>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-4 flex-1 overflow-y-auto pb-4">
          <p className="text-gray-600 font-medium px-1">Select a service option:</p>
          {WASH_SERVICES.map((service, index) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => handleSelectService(service.id)}
                className={`p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98] animate-fadeIn ${
                  isSelected
                    ? "border-yellow-500 bg-yellow-50/50"
                    : "border-gray-200 bg-white"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-navy-dark text-lg">{service.name}</h3>
                  <div className="text-right">
                    <p className="font-extrabold text-navy-dark text-lg">
                      {service.price}
                    </p>
                    <p className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full inline-block mt-1">
                      🕒 {service.time}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-4">{service.description}</p>

                {/* Inclusions */}
                <div className="space-y-1.5 border-t border-gray-100 pt-3">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Includes:
                  </p>
                  <ul className="grid grid-cols-1 gap-1 text-sm text-gray-700">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-green-500 font-extrabold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={handleConfirm}
            disabled={!selectedServiceId}
            className="w-full bg-navy-dark hover:bg-navy text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {selectedServiceId ? "Find Wash Specialist" : "Select a Service"}
          </Button>
        </div>
      </div>
    </div>
  );
}
