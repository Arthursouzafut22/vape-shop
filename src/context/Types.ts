import { DadosProps } from "../Api/UseRequest";

export type ContextProps = {
  state: DadosProps[];
  addProductCart: (product: DadosProps) => void;
};


export type Action =
  | { type: 'ADD_PRODUCT'; payload: DadosProps}
//   | { type: 'REMOVE_PRODUCT'; id: number }
//   | { type: 'CLEAR_CART' };
