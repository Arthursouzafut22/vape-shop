import { useEffect, useState } from "react";
import { API_BASE_URL } from "./baseUrl";

export type DadosProps = {
  id: number;
  nome: string;
  preco: number;
  imagem: string[];
  sabores: string[];
  quantidade: number;
  desconto: number;
};

const useRequest = (endPoint: string) => {
  const [dados, setDados] = useState<DadosProps[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      try {
        const $esponse = await fetch(`${API_BASE_URL + endPoint}`, { signal });
        if (!$esponse.ok) throw new Error("Error no response!");
        const $json = (await $esponse.json()) as DadosProps[];
        setDados($json);
      } catch (erro) {
        console.error("Error:", erro);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [endPoint]);

  return {
    dados,
  };
};

export default useRequest;
