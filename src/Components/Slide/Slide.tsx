import * as S from "./Styles";
import useRequest from "../../Api/UseRequest";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Cards from "../Cards/Cards";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const Slide: React.FC = () => {
  const { dados } = useRequest("/vendidos");
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [activeNext, setActiveNext] = useState(true);
  const [activePrev, setActivePrev] = useState(false);

  useEffect(() => {
    if (!divRef.current) throw new Error("Error!");
    const divElement = divRef.current;
    const medida = divElement.getBoundingClientRect().width / 2 + 8;
    setWidth(Math.floor(medida));
  }, [width]);

  function next() {
    if (!divRef.current) return null;
    divRef.current.style.transform = `translateX(-${width}px)`;
    divRef.current.style.transition = `0.5s ease-in-out`;
    setActivePrev(true);
    setActiveNext(false);
  }

  function prev() {
    if (!divRef.current) return null;
    divRef.current.style.transform = `translateX(-${0}px)`;
    setActivePrev(false);
    setActiveNext(true);
  }

  return (
    <S.WrapperSlide>
      <h2>MAIS VENDIDOS</h2>

      <div className="wrapper" ref={divRef}>
        {dados &&
          dados.produtos.map((item) => <Cards item={item} key={item.id} />)}
      </div>

      {activePrev && (
        <S.ButtonPrev onClick={prev}>
          <GrCaretPrevious />
        </S.ButtonPrev>
      )}

      {activeNext && (
        <S.ButtonNext onClick={next}>
          <GrCaretNext />
        </S.ButtonNext>
      )}
    </S.WrapperSlide>
  );
};

export default Slide;
