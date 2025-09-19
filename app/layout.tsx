import type { Metadata } from "next";
import  helvetica from "next/font/local";
import garet from "next/font/local";
import "./globals.css";

const mainfont = helvetica({
  src:"../public/helvetica-now/helveticanowtext-bold-demo.ttf",
});

const secondfont = garet({
  src:"../public/garet/Garet-Book.ttf",
});

export const metadata: Metadata = {
  title: "Loouis Lab",
  description: "Incubadora de projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainfont.className} ${secondfont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
