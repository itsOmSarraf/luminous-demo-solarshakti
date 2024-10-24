import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'SolarShakti',
  description: 'Monitor your solar energy generation and consumption',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          bg-white 
          ${inter.className}
          max-w-md 
          mx-auto 
          min-h-screen 
          relative 
          overflow-x-hidden
          touch-manipulation
          antialiased
        `}
      >
        <div className="px-4 pb-safe-area-inset">
          {children}
        </div>
      </body>
    </html>
  );
}