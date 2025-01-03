import { ReactNode } from "react";

export type ImageProps = {
  src: string;
  alt: string;
  fallback: ReactNode;
};
