import { useState } from "react";

import { useCallback } from "react";

type ClickHandler = React.MouseEvent<HTMLImageElement>;

// Hook para trocar os index das imagems...
const useImage = () => {
  const [indexImg, setIndexImg] = useState<number>(0);

  const replaceImage = useCallback((event: ClickHandler, index: number) => {
    event?.preventDefault();
    setIndexImg(index);
  }, []);

  return {
    replaceImage,
    indexImg,
  };
};

export default useImage;
