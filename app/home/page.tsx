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
            onClick={() => {
              // Navigate to car details (not implemented in this phase)
              console.log("My Car clicked");
            }}
          />
          <ActionCard
            icon={<BellIcon />}
            title="Request"
            onClick={() => router.push("/searching")}
            variant="yellow"
          />
        </div>

        {/* Request Valet Button */}
        <div
          className="flex-1 flex items-end pb-8 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => router.push("/searching")}
            className="w-full bg-navy-dark hover:bg-navy text-white"
          >
            Request Valet
          </Button>
        </div>
      </div>
    </div>
  );
}
