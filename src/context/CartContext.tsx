import { createContext, PropsWithChildren, useContext } from "react";

const ContextCart = createContext(null);

const CartStorage = ({ children }: PropsWithChildren) => {
  return <ContextCart.Provider value={null}>{children}</ContextCart.Provider>;
};

export const AuthCart = () => {
  const context = useContext(ContextCart);
  if (context === null) return null;
  return context;
};

export default CartStorage;
