import React, { useState } from "react";
import "../App.css";

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="contador-container">
      <h1>Contador: {count}</h1>
      <button onClick={incrementarContador}>Clique aqui</button>
    </div>
  );
};

export default Contador;
