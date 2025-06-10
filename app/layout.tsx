import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Public Opinion Analytics Lab",
  description: "The website of the Public Opinion Analytics Lab",
  generator: 'v0.dev',
  icons: {
    icon: '/graph.jpg', // For traditional favicon
    // Optional: You can also add different sizes/types
    // apple: '/apple-icon.png',
    // shortcut: '/shortcut-icon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}