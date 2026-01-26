// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joaquín Zárate | Solutions Architect",
  description: "Portafolio de Ingeniería y Arquitectura de Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Font Awesome para los iconos del Búnker */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body>
         <Navbar />
        {children}
      </body>
    </html>
  );
}