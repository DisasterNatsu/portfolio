import type { Metadata } from "next";
import { Sora } from "next/font/google";

// components
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import TopLeftImg from "@/components/TopLeftImg";
import TransitionProvider from "@/provider/TransitionProvider";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TransitionProvider>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </TransitionProvider>
    </div>
  );
}
