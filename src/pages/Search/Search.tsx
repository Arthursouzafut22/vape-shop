import * as S from "./Styles";
import Cards from "../../Components/Cards/Cards";
import WrapperLinks from "../WrapperLinks/WrapperLinks";
import { AuthSearch } from "../../context/ProductSearchContext/ProductSearchContext";

const Search = () => {
  const { filteredProducts } = AuthSearch();

  return (
    <S.Section
      style={{ height: filteredProducts.length === 0 ? "80vh" : "initial" }}
    >
      <WrapperLinks />
      <h1>🔍Produtos encontrados: {filteredProducts.length}</h1>
      <S.Wrapper>
        {filteredProducts &&
          filteredProducts.map((item) => <Cards key={item.id} item={item} />)}
      </S.Wrapper>
      {filteredProducts.length === 0 && (
        <p className="result">Nenhum Produto encontrado...</p>
      )}
    </S.Section>
  );
};

export default Search;
