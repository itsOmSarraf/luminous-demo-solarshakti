// import NavBar from "@/components/navbar";
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'SolarShaktiiii',
  description: 'Monitor your solar energy generation and consumption',
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#FFFFFF] ${inter.className}`}>
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}