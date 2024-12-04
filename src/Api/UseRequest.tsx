import { useEffect, useState } from "react";

export type DadosProps = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
};

const UseRequest = (endPoint: string) => {
  const [dados, setDados] = useState<DadosProps[] | null>(null);
  const baseUrl = "http://localhost:3000";

  useEffect(() => {
    (async () => {
      try {
        const $esponse = await fetch(`${baseUrl + endPoint}`);
        if (!$esponse.ok) throw new Error("Error no response!");
        const $Json = (await $esponse.json()) as DadosProps[];
        setDados($Json);
      } catch (erro) {
        console.error("Error", erro);
      }
    })();
  }, [endPoint]);

  return {
    dados,
  };
};

export default UseRequest;
