import { DadosProps } from "../../Api/Types";

export type SearchContextProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filteredProducts: DadosProps[];
  searchProduct: (event: React.FormEvent<HTMLFormElement>) => void;
};
