import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useCallback,
} from "react";
import createPixPayment from "../../Api/CreatePixPayment ";

type ContextPayProps = {
  pixQrCode: null | string;
  codigo: string;
  loading: boolean;
  amount:string;
  handlePayment: () => Promise<void>;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

const UsePagePayment = createContext<ContextPayProps | null>(null);

export const AuthPayment = () => {
  const context = useContext(UsePagePayment);
  if (!context) throw new TypeError("Error no context page!");
  return context;
};

const PaymentContext = ({ children }: PropsWithChildren) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [pixQrCode, setPixQrCode] = useState(null);
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = useCallback(async () => {
    setLoading(true);
    const paymentData = await createPixPayment(amount, description);
    if (
      paymentData.qr_codes &&
      paymentData.qr_codes[0] &&
      paymentData.qr_codes[0].text &&
      paymentData.qr_codes[0].links
    ) {
      setCodigo(paymentData.qr_codes[0].text);
      setPixQrCode(paymentData.qr_codes[0].links[0].href);
      setLoading(false);
    } else {
      alert("Erro: QR Code não encontrado.");
    }
  }, [amount, description]);

  return (
    <UsePagePayment.Provider
      value={{
        pixQrCode,
        codigo,
        loading,
        handlePayment,
        setAmount,
        setDescription,
        amount
      }}
    >
      {children}
    </UsePagePayment.Provider>
  );
};

export default PaymentContext;
