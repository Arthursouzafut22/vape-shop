import { useEffect, useState } from "react";
import { API_BASE_URL } from "./baseUrl";
import { DadosProps, InfoProps } from "./Types";

const useRequest = (endPoint: string) => {
  const [dados, setDados] = useState<DadosProps[] | InfoProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      try {
        setIsLoading(true);
        const $esponse = await fetch(`${API_BASE_URL + endPoint}`, { signal });
        if (!$esponse.ok) throw new Error("Error no response!");
        const $json = await $esponse.json();

        if (!Array.isArray($json)) {
          setDados($json as InfoProps);
        }
        setDados($json as DadosProps[]);
        setIsLoading(false);
      } catch (erro) {
        console.error("Error:", erro);
        setIsLoading(false);
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
