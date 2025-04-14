"use client"

import { ShoppingCart } from "phosphor-react"
import type { Product } from "@/data/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="aspect-square relative overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-200 group-hover:scale-105"
          style={{ backgroundImage: `url(${product.image})` }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <button
            className="p-2 hover:bg-primary/10 rounded-full transition-colors duration-200"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
