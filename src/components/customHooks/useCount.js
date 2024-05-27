import { useState } from "react";

export default function useCount(initialValue = 0) {
  const [contador, setcontador] = useState(initialValue);

  const incrementarContador = () => {
    setcontador((estadoAnterior) => estadoAnterior + 1);
  };

  const decrementarContador = () => {
    setcontador(contador - 1);
  };

  const reset = () => {
    setcontador(initialValue);
  };

  return { contador, incrementarContador, decrementarContador, reset };
}