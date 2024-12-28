import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useCallback,
} from "react";
import { ContextProps } from "./Types";

const UsePageContext = createContext<ContextProps | null>(null);

export const AuthPage = () => {
  const context = useContext(UsePageContext);
  if (!context) throw new TypeError("Error no context page!");
  return context;
};

const PageContext = ({ children }: PropsWithChildren) => {
  const [page, setPage] = useState<number>(1);
  const [activePrev, setActivePrev] = useState(false);
  const [activeNext, setActiveNext] = useState(true);
  console.log(page);

  function scrollTop() {
    return window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  function checkActiveButton() {
    if (page === 1) {
      setActivePrev(false);
    } else if (page == 2) {
      setActivePrev(true);
      alert(true);
    } else if (page === 3) {
      setActiveNext(false);
    }
  }

  const replacePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { target } = event;
      const element = target as HTMLDivElement;
      setPage(Number(element.innerText));
      scrollTop();
      //   checkActiveButton();
    },
    []
  );

  // Back page...
  function prevPage() {
    setPage((back) => back - 1);
    checkActiveButton();
    scrollTop();
  }

  //Next page...
  function nextPage() {
    setPage((next) => next + 1);
    checkActiveButton();
    scrollTop();
  }

  return (
    <UsePageContext.Provider
      value={{ page, replacePage, nextPage, prevPage, activePrev, activeNext }}
    >
      {children}
    </UsePageContext.Provider>
  );
};

export default PageContext;
