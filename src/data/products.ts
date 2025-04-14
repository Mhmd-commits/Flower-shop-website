export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  inStock?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Spring Bliss Bouquet",
    description: "A delightful mix of spring flowers including tulips, daffodils, and ranunculus in pastel colors",
    price: 79.99,
    image: "/images/spring-bliss.jpg",
    category: "seasonal",
    featured: true,
    inStock: true
  },
  {
    id: "2",
    name: "Rose Romance",
    description: "Classic arrangement of premium red roses with eucalyptus accents and baby's breath",
    price: 89.99,
    image: "/images/rose-romance.jpg",
    category: "classic",
    featured: true,
    inStock: true
  },
  {
    id: "3",
    name: "Peaceful Orchid",
    description: "Elegant white phalaenopsis orchid in a modern ceramic pot with moss accents",
    price: 69.99,
    image: "/images/peaceful-orchid.jpg",
    category: "plants",
    inStock: true
  },
  {
    id: "4",
    name: "Rustic Wildflowers",
    description: "Charming arrangement of seasonal wildflowers in a vintage-inspired mason jar",
    price: 59.99,
    image: "/images/rustic-wildflowers.jpg",
    category: "rustic",
    inStock: true
  },
  {
    id: "5",
    name: "Succulent Garden",
    description: "Artfully arranged collection of premium succulents in a contemporary concrete planter",
    price: 49.99,
    image: "/images/succulent-garden.jpg",
    category: "plants",
    inStock: true
  },
  {
    id: "6",
    name: "Luxury Peony Bouquet",
    description: "Stunning arrangement of fresh peonies in soft pink and white with silver dollar eucalyptus",
    price: 129.99,
    image: "/images/luxury-peony.jpg",
    category: "premium",
    featured: true,
    inStock: true
  },
  {
    id: "7",
    name: "Tropical Paradise",
    description: "Exotic arrangement featuring birds of paradise, protea, and tropical foliage",
    price: 99.99,
    image: "/images/tropical-paradise.jpg",
    category: "exotic",
    inStock: true
  },
  {
    id: "8",
    name: "Birthday Celebration",
    description: "Vibrant mix of gerbera daisies, carnations, and chrysanthemums in festive colors",
    price: 69.99,
    image: "/images/birthday-celebration.jpg",
    category: "celebration",
    inStock: true
  },
  {
    id: "9",
    name: "Modern Minimalist",
    description: "Clean and contemporary arrangement of calla lilies in a sleek glass vase",
    price: 79.99,
    image: "/images/modern-minimalist.jpg",
    category: "modern",
    inStock: true
  },
  {
    id: "10",
    name: "Wedding Collection",
    description: "Elegant white and blush roses with premium foliage, perfect for special occasions",
    price: 149.99,
    image: "/images/wedding-collection.jpg",
    category: "wedding",
    featured: true,
    inStock: true
  }
];
