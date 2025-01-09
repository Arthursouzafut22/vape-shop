import { useState, useEffect } from "react";

const useStopwatch = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(1);

  useEffect(() => {
    function stopwatch() {
      if (segundos < 0) {
        setSegundos(59);
        setMinutos(minutos - 1);
      }
    }
    stopwatch();

    const timer = setTimeout(() => {
      setSegundos((prev) => prev - 1);
    }, 1000);

    if (minutos === 0 && segundos === 0) {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [segundos, minutos]);

  return {
    minutos,
    segundos,
    setSegundos,
    setMinutos,
  };
};

export default useStopwatch;
