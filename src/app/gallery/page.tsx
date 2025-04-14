"use client"

import { galleryItems } from "@/data/gallery"
import { GalleryItem } from "@/components/gallery-item"

export default function GalleryPage() {
  return (
    <div className="min-h-screen px-4 py-24 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Our Gallery</h1>
          <p className="text-muted-foreground text-lg">
            A showcase of our finest floral creations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
