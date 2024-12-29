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

  function scrollTop() {
    setTimeout(() => {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }, 200);
  }

  function checkActiveButton(pageAtual: string) {
    setActiveNext(() => (Number(pageAtual) === 2 ? false : true));
    setActivePrev(() => (Number(pageAtual) === 2 ? true : false));
  }

  // Trocar de pagina...
  const replacePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { target } = event;
      const element = target as HTMLDivElement;
      setPage(Number(element.innerText));
      checkActiveButton(element.innerText);
      scrollTop();
    },
    []
  );

  // Back page...
  const prevPage = useCallback(() => {
    setPage((back) => back - 1);
    setActiveNext(true);
    setActivePrev(false);
    scrollTop();
  }, []);

  //Next page...
  const nextPage = useCallback(() => {
    setPage((next) => next + 1);
    setActiveNext(false);
    setActivePrev(true);
    scrollTop();
  }, []);

  return (
    <UsePageContext.Provider
      value={{ page, replacePage, nextPage, prevPage, activePrev, activeNext }}
    >
      {children}
    </UsePageContext.Provider>
  );
};

export default PageContext;
