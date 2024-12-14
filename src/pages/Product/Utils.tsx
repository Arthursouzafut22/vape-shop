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
    const element = event?.target;
    setIndexImg(index);
    console.log(element)

    if(element) {
      // // setBoderColor(true)
      // element.style.border = "none"
      //  element.style.border = "2px solid red"

      // element.classList.toggle("ativo");

      
    }
    
    // if(!element !== element) {
    //   element.classList.remove("ativo");

    // }


  }, []);

  return {
    replaceImage,
    indexImg,
    refImage,
    boderColor
  };
};

export default useImage;
