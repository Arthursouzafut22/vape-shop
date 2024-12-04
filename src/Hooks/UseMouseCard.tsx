import { useEffect, useRef } from "react";

const UseMouseCard = () => {
  const refCard = useRef<HTMLDivElement | null>(null);
  const refImg = useRef<HTMLImageElement | null>(null);
  const refButton = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!refCard && !refButton && refImg) return;

    function addMouseDiv(event?: MouseEvent) {
      if (event?.target && refButton.current && refImg.current) {
        refButton.current.style.display = "block";
        refButton.current.style.transform = "translateY(0)";
        refButton.current.style.opacity = "1";
        refImg.current.style.display = "none";
      }
    }

    function removeMouseDiv(event?: MouseEvent) {
      if (event?.target && refButton.current && refImg.current) {
        refButton.current.style.display = "none";
        refImg.current.style.display = "block";
      }
    }

    addMouseDiv();
    removeMouseDiv();

    refCard.current?.addEventListener("mouseenter", addMouseDiv);
    refCard.current?.addEventListener("mouseleave", removeMouseDiv);

    return () => {
      refCard.current?.removeEventListener("mouseenter", addMouseDiv);
      refCard.current?.removeEventListener("mouseleave", removeMouseDiv);
    };
  }, [refCard]);

  return {
    refCard,
    refButton,
    refImg,
  };
};

export default UseMouseCard;
