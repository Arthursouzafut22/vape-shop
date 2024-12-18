import { DadosProps } from "../../Api/UseRequest";

export type ContextProps = {
  state: DadosProps[];
  addProductCart: (product: DadosProps) => void;
  removeProduct: (id: number) => void;
  total: number;
  setQuantiTy: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
  updateIncrement: (quantidade: number, product: DadosProps) => void;
  updateDescrement: (quantidade: number, product: DadosProps) => void;
};

export type Action =
  | { type: "ADD_PRODUCT"; payload: DadosProps; quanti: number }
  | { type: "REMOVE_PRODUCT"; id: number }
  | { type: "UPDATE_INCREMENT"; payload: DadosProps; quanti: number }
  | { type: "UPDATE_DESCREMENT"; payload: DadosProps; quanti: number };
