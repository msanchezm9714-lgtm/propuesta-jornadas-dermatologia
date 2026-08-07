import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clienteData from "@/data/cliente.json";
import type { ClienteData } from "@/lib/types";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const data = clienteData as ClienteData;

export const metadata: Metadata = {
  title: data.meta.tituloPagina,
  description: data.meta.descripcionPagina,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
