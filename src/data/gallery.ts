export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  category?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Summer Wedding Collection",
    description: "Elegant white and pink roses with delicate baby's breath, perfect for romantic summer weddings",
    image: "/images/gallery/wedding-1.jpg",
    width: 1200,
    height: 800,
    category: "Wedding"
  },
  {
    id: "2",
    title: "Spring Garden Bouquet",
    description: "Vibrant tulips, daffodils, and ranunculus celebrating the colors of spring",
    image: "/images/gallery/spring-1.jpg",
    width: 800,
    height: 1200,
    category: "Seasonal"
  },
  {
    id: "3",
    title: "Modern Corporate Display",
    description: "Sophisticated orchid and bamboo arrangement for professional environments",
    image: "/images/gallery/corporate-1.jpg",
    width: 1200,
    height: 900,
    category: "Corporate"
  },
  {
    id: "4",
    title: "Classic Rose Collection",
    description: "Premium long-stem red roses arranged with eucalyptus and seasonal greens",
    image: "/images/gallery/roses-1.jpg",
    width: 900,
    height: 1200,
    category: "Classic"
  },
  {
    id: "5",
    title: "Tropical Paradise",
    description: "Exotic birds of paradise, protea, and tropical foliage in vibrant colors",
    image: "/images/gallery/tropical-1.jpg",
    width: 1200,
    height: 800,
    category: "Exotic"
  },
  {
    id: "6",
    title: "Winter Wonderland",
    description: "White roses, silver brunia, and pine accents for a magical winter celebration",
    image: "/images/gallery/winter-1.jpg",
    width: 800,
    height: 1000,
    category: "Seasonal"
  },
  {
    id: "7",
    title: "Birthday Celebration",
    description: "Cheerful mix of gerbera daisies, carnations, and chrysanthemums",
    image: "/images/gallery/birthday-1.jpg",
    width: 1000,
    height: 1000,
    category: "Celebration"
  },
  {
    id: "8",
    title: "Rustic Garden",
    description: "Wildflowers and native blooms in a vintage-inspired arrangement",
    image: "/images/gallery/rustic-1.jpg",
    width: 1200,
    height: 800,
    category: "Rustic"
  },
  {
    id: "9",
    title: "Luxury Peony Display",
    description: "Premium peonies in soft pink and cream tones with delicate foliage",
    image: "/images/gallery/peony-1.jpg",
    width: 900,
    height: 1200,
    category: "Luxury"
  }
];
