import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Favicon from 'src/app/favicon.ico';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Opiniones de fútbol | Ilan',
  description: 'Es una plataforma dedicada a compartir opiniones sobre partidos de fútbol y noticias del mundo deportivo. Construido con React y con las herramienas de Next.js',
  icons: [{ rel: 'icon', url: Favicon.src }],

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
