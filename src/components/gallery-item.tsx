"use client"

import { motion } from "framer-motion"
import type { GalleryItem as GalleryItemType } from "@/data/gallery"

interface GalleryItemProps {
  item: GalleryItemType
}

export function GalleryItem({ item }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group cursor-pointer"
    >
      <div
        className="aspect-[4/3] rounded-lg overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
            <h3 className="font-serif text-xl mb-2">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
