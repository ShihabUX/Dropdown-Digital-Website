import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dropdown Digital | Remote Control for Your Business",
  description: "We build powerful web admin dashboards and scalable MVPs. Launch your startup fast or upgrade your enterprise with AI brains.",
  keywords: ["Web Development", "MVP", "Dashboard", "AI", "Startup", "Enterprise", "Dhaka", "Bangladesh"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased selection:bg-[#FF1E1E] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
