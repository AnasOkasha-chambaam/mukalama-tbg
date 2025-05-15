import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mukalama | Podcast Website",
  description: "A podcast website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
