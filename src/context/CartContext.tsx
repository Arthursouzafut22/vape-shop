import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { DadosProps } from "../Api/UseRequest";
import { ContextProps, Action } from "./Types";

const initialArray: DadosProps[] = [];

function reduceCart(state: DadosProps[], action: Action): DadosProps[] {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const search = state?.find(
        (item) => item.id === action.payload.id
      ) as DadosProps;

      return state.includes(search) ? state : [...state, action.payload];
    }
  }
}

const ContextCart = createContext<ContextProps | null>(null);

const ShoppingCartContext = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reduceCart, initialArray);

  //Adicionar produto no carrinho...
  function addProductCart(product: DadosProps) {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  }

  return (
    <ContextCart.Provider value={{ state, addProductCart }}>
      {children}
    </ContextCart.Provider>
  );
};

export const AuthCart = () => {
  const context = useContext(ContextCart);
  if (context === null) throw new TypeError("Error no Provider!");
  return context;
};

export default ShoppingCartContext;
