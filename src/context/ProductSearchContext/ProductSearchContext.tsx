import { createContext, PropsWithChildren, useContext, useState } from "react";
import { SearchContextProps } from "./Types";
import useRequest from "../../Api/UseRequest";
import { DadosProps } from "../../Api/Types";
import { useNavigate } from "react-router-dom";

const UseSearchContext = createContext<SearchContextProps | null>(null);

export const AuthSearch = () => {
  const context = useContext(UseSearchContext);
  if (!context) throw new TypeError("Error no context Search!");
  return context;
};

const SearchContext = ({ children }: PropsWithChildren) => {
    const navigate = useNavigate();
  const { dados } = useRequest(`/products`);
  const [search, setSearch] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<DadosProps[]>([]);
  if (dados === null) return;

  const searchProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filterProducts = dados?.filter((i) =>
      i.nome.toLowerCase().includes(search?.toLowerCase())
    );
    setFilteredProducts(filterProducts);
    setSearch("");
    navigate("/search");
  };

  return (
    <UseSearchContext.Provider
      value={{
        search,
        searchProduct,
        filteredProducts,
        setSearch,
      }}
    >
      {children}
    </UseSearchContext.Provider>
  );
};

export default SearchContext;
