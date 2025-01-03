import { API_BASE_URL } from "./baseUrl";

const createPixPayment = async (amount: string, description: string) => {
  try {
    const resposta = await fetch(API_BASE_URL + "/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        description,
      }),
    });

    const $json = await resposta.json();
    return $json;
  } catch (erro) {
    console.log("Error ao criar pagamento", erro);
    throw erro;
  }
};

export default createPixPayment;
