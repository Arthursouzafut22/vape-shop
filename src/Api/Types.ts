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
  find: (i: unknown) => void;
};

export type CepProps = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
};
