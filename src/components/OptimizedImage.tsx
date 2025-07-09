import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  onError 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Check if image is already cached
    if (img.complete && img.naturalHeight !== 0) {
      setIsLoaded(true);
      return;
    }

    const handleLoad = () => setIsLoaded(true);
    const handleError = (e: Event) => {
      setHasError(true);
      if (onError) {
        onError(e as any);
      }
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src, onError]);

  if (hasError) {
    return (
      <div 
        className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${className}`}
        style={style}
      >
        <div className="text-gray-500 text-xs text-center p-2">
          Image not available
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Loading placeholder */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse ${className}`}
          style={style}
        />
      )}
      
      {/* Actual image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={style}
        onError={(e) => {
          setHasError(true);
          if (onError) onError(e);
        }}
        loading="eager" // Load immediately for better UX
        decoding="async" // Non-blocking decode
      />
    </div>
  );
}