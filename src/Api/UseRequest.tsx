import { useEffect, useState } from "react";
import { API_BASE_URL } from "./baseUrl";
import { DadosProps } from "./Types";

const useRequest = (endPoint: string) => {
  const [dados, setDados] = useState<DadosProps[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      try {
        setIsLoading(true);
        const $esponse = await fetch(`${API_BASE_URL + endPoint}`, { signal });
        if (!$esponse.ok) throw new Error("Error no response!");
        const $json = (await $esponse.json()) as DadosProps[];
        setDados($json);
        setIsLoading(false);
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
    isLoading,
  };
};

export default useRequest;
