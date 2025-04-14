"use client"

import { useCallback } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Flower } from "phosphor-react"

export function Hero() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-background dark:bg-background overflow-hidden"
      role="region"
      aria-label="Welcome to Fruze"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent-soft to-accent dark:from-accent dark:to-background opacity-50" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="mb-12"
            {...fadeInUp}
          >
            <div className="mx-auto w-32 h-32 mb-4">
              <Flower size={128} weight="fill" className="w-full h-full text-primary dark:text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground dark:text-foreground mb-4">
              Fruze
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground tracking-wider uppercase">
              Grown with Grace
            </p>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl font-medium text-foreground dark:text-foreground mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Exquisite floral arrangements for every occasion
          </motion.p>

          {/* CTA Button */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/gallery"
              className="inline-block bg-primary hover:bg-primary-light dark:bg-primary dark:hover:bg-primary-light text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200"
            >
              View Gallery
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-primary/10 dark:text-primary/20">
        <Flower size={96} weight="fill" />
      </div>
      <div className="absolute bottom-10 right-10 text-primary/10 dark:text-primary/20">
        <Flower size={64} weight="fill" />
      </div>
    </section>
  )
}
