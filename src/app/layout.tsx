import type { Metadata } from "next";
import "./globals.css";
import { font_body } from "@/font";


export const metadata: Metadata = {
  title: "Bike",
  description: "Bike Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font_body.variable}>
        {children}
      </body>
    </html>
  );
}
