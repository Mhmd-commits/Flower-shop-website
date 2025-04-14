export type ImageFormat = 'webp' | 'jpg' | 'png' | 'avif';

export interface ImageWithFallback {
  src: string;
  fallback: string;
  blurDataURL?: string;
}

export interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export const getImageFormats = (basePath: string, formats: ImageFormat[]): ImageWithFallback => {
  const [primaryFormat, ...fallbackFormats] = formats;
  const basePathWithoutExt = basePath.substring(0, basePath.lastIndexOf('.')) || basePath;
  
  return {
    src: `${basePathWithoutExt}.${primaryFormat}`,
    fallback: `${basePathWithoutExt}.${fallbackFormats[0] || primaryFormat}`,
    blurDataURL: `data:image/svg+xml;base64,${Buffer.from(`
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f8f8f8"/>
        <circle cx="200" cy="200" r="50" fill="#e2e2e2"/>
      </svg>
    `).toString('base64')}`
  };
};

export const imageLoader = ({ src, width, quality = 75 }: ImageLoaderProps): string => {
  // Remove any existing query parameters
  const baseUrl = src.split('?')[0];
  return `${baseUrl}?w=${width}&q=${quality}`;
};

export const shimmer = (w: number, h: number): string => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f6f7f8" stop-opacity="0.5">
        <animate attributeName="offset" values="-2; 1" dur="2s" repeatCount="indefinite"/>
      </stop>
      <stop offset="50%" stop-color="#edeef1" stop-opacity="1">
        <animate attributeName="offset" values="-1.5; 1.5" dur="2s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#f6f7f8" stop-opacity="0.5">
        <animate attributeName="offset" values="-1; 2" dur="2s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
</svg>
`;

export const toBase64 = (str: string): string =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
