import * as S from "./Styles";
import UseMedia from "../../Hooks/UseMedia";
import { useState } from "react";
import NavComponent from "./NavComponent";
import { HiMenu } from "react-icons/hi";

const Nav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const { mobile } = UseMedia("(max-width:1129px)");

  return (
    <>
      <S.Nav>
        {mobile && (
          <S.ButtonMobile onTouchStart={() => setActiveMenu(!activeMenu)}>
            <HiMenu
              style={{
                transform: activeMenu ? "rotate(810deg)" : "rotate(360deg)",
                transition: "0.5s",
              }}
            />
            Menu
          </S.ButtonMobile>
        )}

        {!mobile && <NavComponent mobile={mobile} />}
        {!mobile ||
          (activeMenu && (
            <NavComponent mobile={mobile} activeMenu={activeMenu} />
          ))}
      </S.Nav>
    </>
  );
};

export default Nav;
