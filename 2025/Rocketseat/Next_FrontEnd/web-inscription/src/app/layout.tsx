import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "web-inscription",
  description: "Pagina de inscrição para eventos",
};

const oxanium = Oxanium({ 
  weight: ['500', '600'],
  subsets: ["latin"], 
  variable: "--font-oxanium",
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ["latin"], 
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
