import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cohort 12",
  description: "Graduation cohort 12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
