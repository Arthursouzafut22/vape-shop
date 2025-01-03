import { ReactNode } from "react";
import { BsAppIndicator, BsQrCode } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";

type UiInfosProps = {
  icon: ReactNode;
  title: string;
};

export const infosPay: UiInfosProps[] = [
  {
    icon: <BsAppIndicator />,
    title: "Abra o app do seu banco e entre no ambiente Pix",
  },
  {
    icon: <BsQrCode />,
    title: "Escolha Pagar com QR Code e aponte a câmera para o código ao lado.",
  },
  {
    icon: <FaRegCircleCheck />,
    title: "Confirme as informações e finalize sua compra.",
  },
];
