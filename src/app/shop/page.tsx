import { products } from "@/data/products"
import { ProductCard } from "@/components/product-card"

export default function ShopPage() {
  return (
    <div className="min-h-screen px-4 py-24 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Our Collection</h1>
            <p className="text-muted-foreground">Discover our handcrafted floral arrangements</p>
          </div>
          <div className="mt-4 md:mt-0">
            {/* Filter options will go here */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
