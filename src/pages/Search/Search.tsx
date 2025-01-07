import * as S from "./Styles";
import Cards from "../../Components/Cards/Cards";
import { AuthSearch } from "../../context/ProductSearchContext/ProductSearchContext";

const Search = () => {
  const { filteredProducts } = AuthSearch();

  return (
    <S.Section>
      <S.Wrapper>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => <Cards key={item.id} item={item} />)
        ) : (
          <p>Nenhum Produto encontrado...</p>
        )}
      </S.Wrapper>
    </S.Section>
  );
};

export default Search;
