import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Fruze - Exquisite Floral Arrangements",
  description: "Discover beautiful floral arrangements for every occasion at Fruze. We create stunning bouquets with grace and elegance.",
  keywords: ["flowers", "floral arrangements", "bouquets", "wedding flowers", "events"],
  authors: [{ name: "Fruze" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <footer className="py-6 md:py-0">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:h-16">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Fruze. All rights reserved.
                  </p>
                  <nav className="flex space-x-4 text-sm text-muted-foreground">
                    <a href="/privacy" className="hover:text-foreground transition-colors">
                      Privacy
                    </a>
                    <a href="/terms" className="hover:text-foreground transition-colors">
                      Terms
                    </a>
                  </nav>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
