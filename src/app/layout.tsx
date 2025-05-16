import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Jost } from "next/font/google"
import { Suspense } from "react"
import Loader from "@/components/Loader"
// import { ThemeProvider } from "@/components/theme-provider"

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Portfolio - James Smith",
  description: "Personal portfolio of James Smith, Software Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen text-white ${jost.className}`}>
        <Suspense fallback={<Loader />}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
