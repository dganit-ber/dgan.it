import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dgan — Frontend Developer",
  description:
    "dgan — Frontend Developer. Building fast, accessible, and beautiful web experiences.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "dgan — Frontend Developer",
    description: "Building fast, accessible, and beautiful web experiences.",
    type: "website",
  },
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
