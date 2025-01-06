import { CepProps } from "./Types";
import { useCallback, useState } from "react";

const useCep = () => {
  const [loading, setLoading] = useState(false);
  const [dadosCep, setDadosCep] = useState<CepProps | null>(null);
  const [erro, setErro] = useState(false);

  const requestCep = useCallback(async (cep: string) => {
    try {
      setLoading(true);
      const resCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const jsonCep = (await resCep.json()) as CepProps;

      if (!jsonCep.cep) {
        setLoading(false);
        return setErro(true);
      }

      setDadosCep(jsonCep);
      setLoading(false);
      setErro(false);
    } catch (erro) {
      console.error("Error em buscar cep", erro);
    }
  }, []);

  return {
    requestCep,
    loading,
    dadosCep,
    erro,
    setLoading,
  };
};

export default useCep;
