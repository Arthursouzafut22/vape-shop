import { createContext, PropsWithChildren, useContext, useState } from "react";
import { ContextFreteProps } from "./Types";

const UseFreteContext = createContext<ContextFreteProps | null>(null);

export const AuthFrete = () => {
  const context = useContext(UseFreteContext);
  if (!context) throw new TypeError("Error no context page!");
  return context;
};

const FreteContext = ({ children }: PropsWithChildren) => {
  const [selectedFrete, setSelectedFrete] = useState({
    tipo: "transportadora",
    valor: 49.9,
  });

  const handleFreteChange = (tipo: string, valor: number) => {
    setSelectedFrete({ tipo, valor });
  };

  return (
    <UseFreteContext.Provider
      value={{
        selectedFrete,
        handleFreteChange,
      }}
    >
      {children}
    </UseFreteContext.Provider>
  );
};

export default FreteContext;
