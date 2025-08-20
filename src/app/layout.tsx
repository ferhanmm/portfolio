import type { Metadata } from "next";
import { Roboto_Slab } from 'next/font/google'
import "./globals.css";

const geist = Roboto_Slab({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ferhan Moton - Portfolio",
  description: "Portfolio of Ferhan Moton, IAM Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={geist.className + " antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
