import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAKOWE LAKES | Inner Circle",
  description: "Refined private golf & lakeside estate member portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-montserrat bg-forest-gradient text-grey-light antialiased min-h-screen selection:bg-bronze/30 selection:text-cream">
        {children}
      </body>
    </html>
  );
}

