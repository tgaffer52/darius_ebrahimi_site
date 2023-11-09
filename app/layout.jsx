import React from "react";
import "./globals.css";

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
