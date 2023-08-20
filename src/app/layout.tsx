"use client";

import "./globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@/themes/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
