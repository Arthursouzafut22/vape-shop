import { useState, useEffect, ReactNode } from "react";

type ImageProps = {
  src: string;
  alt: string;
  fallback: ReactNode;
};

const OptimizedImage: React.FC<ImageProps> = ({ src, alt, fallback }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.alt = alt;
    image.onload = () => setLoaded(true);
  }, [src, alt]);

  if (!loaded) return fallback;

  return <img src={src} alt={alt} />;
};

export default OptimizedImage;
