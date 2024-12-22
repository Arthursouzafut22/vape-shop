import { GoStarFill } from "react-icons/go";
import * as S from "./Styles";
import { useLocation } from "react-router-dom";
import { CSSProperties, useEffect, useState } from "react";

const Icons = ({ id }: { id?: number }) => {
  const { pathname } = useLocation();
  const [margin, setMargin] = useState<CSSProperties>({});

  useEffect(() => {
    if (pathname !== `/product/${id}`) {
      const styleMargin: CSSProperties = { margin: "2px 0px 0px 0px" };
      setMargin(styleMargin);
    }
    if (pathname === `/product/${id}`) {
      const styleMargin: CSSProperties = { margin: "10px 0px" };
      setMargin(styleMargin);
    }
  }, [pathname, id]);

  return (
    <S.ContainerIcons style={margin}>
      {new Array(5)
        .fill(
          <GoStarFill
            style={{
              color: "#FFA800",
              fontSize:
                pathname !== `/product/${id}`
                  ? "clamp(0.81rem,4vw,1.0rem)"
                  : pathname === `/product/${id}`
                  ? "1.38rem"
                  : "",
            }}
          />
        )
        .map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
    </S.ContainerIcons>
  );
};

export default Icons;
