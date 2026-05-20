"use client";

import { useRouter } from "next/navigation";
import MapView from "@/components/MapView";
import ActionCard from "@/components/ActionCard";
import Button from "@/components/Button";
import { CarKeyIcon, BellIcon } from "@/components/Icons";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="mobile-screen bg-gray-50">
      <div className="flex-1 flex flex-col px-6 py-6 space-y-6">
        {/* Map View */}
        <div className="animate-fadeIn">
          <MapView />
        </div>

        {/* Action Cards */}
        <div
          className="grid grid-cols-2 gap-4 animate-fadeIn"
          style={{ animationDelay: "0.1s" }}
        >
          <ActionCard
            icon={<CarKeyIcon />}
            title="My Car"
            onClick={() => router.push("/my-car")}
          />
          <ActionCard
            icon={<BellIcon />}
            title="Request"
            onClick={() => router.push("/searching")}
            variant="yellow"
          />
        </div>

        {/* Actions & Upcoming Features */}
        <div
          className="flex-1 flex flex-col justify-end space-y-4 pb-8 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => router.push("/car-wash")}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-navy-dark"
          >
            Request Car Wash
          </Button>

          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              // Placeholder for upcoming features
            }}
            className="w-full bg-navy-dark hover:bg-navy text-white opacity-60 cursor-not-allowed"
          >
            Upcoming Features
          </Button>
        </div>
      </div>
    </div>
  );
}
