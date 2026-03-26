import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "American University - Museversity",
  description: "American University Landing Page - Education is not preparation for life; education is life itself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        {children}
      </body>
    </html>
  );
}
