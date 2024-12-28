export type DadosProps = {
  id: number;
  nome: string;
  preco: number;
  imagem: string[];
  sabores: string[];
  quantidade: number;
  desconto: number;
};

export type InfoProps = {
  paginaAtual: number;
  produtos: DadosProps[];
  totalPaginas: number;
  totalProdutos: number;
  find:(i: unknown) => void;
};
