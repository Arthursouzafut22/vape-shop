import { useState, useEffect } from "react";

const UseMedia = (media: string) => {
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    function matchMediaa() {
      const { matches } = matchMedia(media);
      setMobile(matches);
    }
    matchMediaa();
    window.addEventListener("resize", matchMediaa);

    return () => {
      window.removeEventListener("resize", matchMediaa);
    };
  }, [media, mobile]);

  return {
    mobile
  };
};

export default UseMedia;
