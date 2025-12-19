"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="mobile-screen bg-navy-dark text-white">
      <div className="flex-1 flex flex-col items-center justify-between px-6 py-8 pb-12">
        {/* Logo */}
        <div className="mt-8 animate-fadeIn">
          <Logo />
        </div>

        {/* Hero Car Image */}
        <div
          className="flex-1 flex items-center justify-center my-8 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative w-full max-w-sm">
            <Image
              src="/car-hero.png"
              alt="White SUV"
              width={400}
              height={300}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div
          className="w-full space-y-6 animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="text-center space-y-3">
            <h1 className="heading-lg text-white">Valet Service</h1>
            <p className="heading-md text-white font-normal">
              Your car, your way
            </p>
            <p className="body-md text-gray-300 max-w-sm mx-auto px-4">
              Premium valet parking at your fingertips. Request a professional
              valet with just one tap and enjoy hassle-free parking wherever you
              go.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => router.push("/home")}
              className="w-full"
            >
              Request Valet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
