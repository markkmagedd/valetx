import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValetX - Your car, your way",
  description: "Premium valet parking service at your fingertips",
  applicationName: "ValetX",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ValetX",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
