import React from "react";
import Nav from "../components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

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
