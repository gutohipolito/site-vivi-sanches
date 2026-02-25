import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import NextImage from "next/image";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica Sanches - Nutrição, saúde e Estética.",
  description: "Clínica especializada em nutrição estratégica, emagrecimento e performance com base científica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${bodoni.variable} ${inter.variable} antialiased`}
      >
        {children}

        {/* Floating CTA (Global Avatar) */}
        <a
          href="https://wa.me/5511940057497"
          target="_blank"
          className="fixed bottom-8 right-8 z-[60] group flex items-center justify-center p-1"
        >
          {/* Pulse Effect Behind */}
          <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-ping"></div>

          {/* Avatar Container */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-2xl shadow-black/20 overflow-hidden transform group-hover:scale-110 transition-transform duration-500">
            <NextImage
              src="/images/clinica/capa-hero-vivi-sanches.png"
              alt="Fale Conosco"
              width={80}
              height={80}
              quality={60}
              sizes="80px"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Online Indicator */}
          <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center shadow-sm">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          </div>

          {/* Tooltip (Optional, on hover) */}
          <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <span className="text-xs font-bold text-deep-charcoal uppercase tracking-widest">Agende Agora</span>
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform rotate-45 -translate-y-1/2"></div>
          </div>
        </a>
      </body>
    </html>
  );
}
