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
    // const element = event?.target as HTMLElement;
    setIndexImg(index);
    if(index === 0 ) {
      setBoderColor(true)
      setBoderColor(false)
    }else if(index === 1){
      setBoderColor(true);
    }
    

    


  }, []);

  return {
    replaceImage,
    indexImg,
    refImage,
    boderColor
  };
};

export default useImage;
