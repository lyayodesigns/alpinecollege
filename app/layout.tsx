import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpine Management College",
  description: "Alpine Management College Landing Page - Education is not preparation for life; education is life itself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans text-deep-midnight bg-snow-white uppercase overflow-x-hidden m-0 p-0">
        {children}
      </body>
    </html>
  );
}
