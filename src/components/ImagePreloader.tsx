import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
}

export default function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    // Preload images in the background
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    // Start preloading after a short delay to not block initial render
    const timeoutId = setTimeout(preloadImages, 100);
    
    return () => clearTimeout(timeoutId);
  }, [images]);

  return null; // This component doesn't render anything
}