import { useEffect, useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";

type ClickHandler = React.MouseEvent<HTMLImageElement>;

// Hook para trocar os index das imagems...
const useImage = () => {
  const [boderColor, setBoderColor] = useState<boolean>(false);
  const [indexImg, setIndexImg] = useState<number>(0);
  const refImage = useRef<HTMLImageElement | null>(null);

  const replaceImage = useCallback((event: ClickHandler, index: number) => {
    event?.preventDefault();
    setIndexImg(index);
    const element = event?.target as HTMLElement;
    switch (index) {
      case 0: {
        element.style.border = "2px solid red";
        break;
      }
      case 1: {
        element.style.border = "2px solid red";
        break
      }
      default: {
        element.style.border = "none";
      }
    }
  }, []);

  return {
    replaceImage,
    indexImg,
    refImage,
    boderColor,
  };
};

export default useImage;
