import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { DadosProps } from "../../Api/UseRequest";
import { ContextProps } from "./Types";
import { reduceCart, initialArray } from "./cartReducer";
import { toast } from "react-toastify";

const ContextCart = createContext<ContextProps | null>(null);

const ShoppingCartContext = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reduceCart, initialArray);
  const [total, setTotal] = useState<number>(0);
  const [quantity, setQuantiTy] = useState<number>(1);

  //Total de compras no carrinho...
  useEffect(() => {
    (() => {
      const totalPrice = state.reduce((acc, item) => {
        return acc + item.preco * item.quantidade;
      }, 0);
      setTotal(totalPrice);
    })();
  }, [state]);

  //Adicionar produto no carrinho...
  function addProductCart(product: DadosProps) {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
      quanti: quantity,
    });
    toast.success(`Produto Adicionado Ao Carrinho.`);
  }

  //Remover produto do carrinho...
  function removeProduct(id: number) {
    dispatch({ type: "REMOVE_PRODUCT", id: id });
    toast.error(`Produto Removido Do Carrinho.`);
  }

  //Atualizar valor da quantidade..
  function updateIncrement(quantidade: number, product: DadosProps) {
    dispatch({
      type: "UPDATE_INCREMENT",
      quanti: quantidade,
      payload: product,
    });
  }

  //Atualizar valor da quantidade..
  function updateDescrement(quantidade: number, product: DadosProps) {
    dispatch({
      type: "UPDATE_DESCREMENT",
      quanti: quantidade,
      payload: product,
    });
  }

  return (
    <ContextCart.Provider
      value={{
        state,
        addProductCart,
        removeProduct,
        total,
        quantity,
        setQuantiTy,
        updateIncrement,
        updateDescrement,
      }}
    >
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
