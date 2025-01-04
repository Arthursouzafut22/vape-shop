export type ContextFreteProps = {
  handleFreteChange: (tipo: string, valor: number) => void;
  selectedFrete: {
    tipo: string;
    valor: number;
  };
};
