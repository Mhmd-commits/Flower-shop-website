"use client"

import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-24 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl mb-4">About Fruze</h1>
          <p className="text-muted-foreground text-lg">Where floral artistry meets elegance</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-2xl mb-4">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2020, Fruze began with a simple yet profound vision: to bring the timeless beauty
              of flowers into everyday life. Our journey started in a small studio, where our passion for
              floral artistry and dedication to quality quickly earned us a reputation for excellence.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to craft each arrangement with the same care and attention to detail
              that defined our early days. Every bloom is thoughtfully selected, every design carefully
              considered, ensuring that each creation tells its own unique story.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-2xl mb-4">Our Commitment</h2>
            <p className="text-muted-foreground">
              At Fruze, we believe in the power of flowers to transform spaces and touch hearts. We source
              our flowers from sustainable growers, ensuring that each stem meets our high standards for
              quality and environmental responsibility.
            </p>
            <p className="text-muted-foreground">
              Whether it's a wedding celebration, a corporate event, or a simple gesture of love, we
              pour our hearts into creating arrangements that capture the perfect moment and exceed
              expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
