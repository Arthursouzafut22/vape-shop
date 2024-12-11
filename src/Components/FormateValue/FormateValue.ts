const FormateValue = (value: number | undefined) => {
  return value?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

export default FormateValue;
