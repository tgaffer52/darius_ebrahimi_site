import React from "react";
import "./globals.css";
import {
  Libre_Baskerville,
  Inknut_Antiqua,
  Cinzel,
  Cormorant_Garamond,
} from "next/font/google";
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

export const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  variable: "--font-baskerville",
});

export const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inknut",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});
export const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
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
