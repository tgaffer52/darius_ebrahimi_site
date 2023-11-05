import React from "react";
import "./globals.css";
import { Libre_Baskerville, Inknut_Antiqua, Cinzel } from "next/font/google";
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

export const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  weight: "400",
  variable: "--font-baskerville",
});

export const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-inknut",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});

export const metadata = {
  title: "Darius Ebrahimi - Fantasy Author",
  description: "The official website of author Darius Ebrahimi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
