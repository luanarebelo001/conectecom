import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AnalyticsProvider } from "../components/analytics-provider"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Conect Ecom - Agência de E-commerce",
  description: "Transformamos sua loja online em um negócio que vende de verdade",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <AnalyticsProvider
            config={{
              googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
              facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
              gtmId: process.env.NEXT_PUBLIC_GTM_ID,
              enableDevelopmentLogging: process.env.NODE_ENV === "development",
            }}
          >
            {children}
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  )
}
