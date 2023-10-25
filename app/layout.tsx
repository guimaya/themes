import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

import "./globals.css"

import { cn } from "@/lib/utils"
import { HeaderOne } from "@/components/header-one"
import { ThemeProvider } from "@/components/providers"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeSwitcher } from "@/components/theme-switcher"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <HeaderOne />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          <TailwindIndicator />
        </ThemeProvider>
        <ThemeSwitcher />
      </body>
    </html>
  )
}
