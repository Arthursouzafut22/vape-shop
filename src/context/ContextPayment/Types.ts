export type ContextPayProps = {
  pixQrCode: null | string;
  codigo: string;
  loading: boolean;
  amount: string;
  handlePayment: () => Promise<void>;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};
