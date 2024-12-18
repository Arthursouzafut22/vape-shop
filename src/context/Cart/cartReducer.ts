import { DadosProps } from "../../Api/UseRequest";
import { Action } from "./Types";

export const initialArray: DadosProps[] = [];

export function reduceCart(state: DadosProps[], action: Action): DadosProps[] {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        return state.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantidade: item.quantidade + action.quanti }
            : item;
        });
      } else {
        return [...state, { ...action.payload, quantidade: action.quanti }];
      }
    }
    case "REMOVE_PRODUCT": {
      return state.filter((item) => item.id !== action.id);
    }
    case "UPDATE_INCREMENT": {
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item;
      });
    }
    case "UPDATE_DESCREMENT": {
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantidade: item.quantidade - 1 }
          : item;
      });
    }
    default:
      return state;
  }
}
