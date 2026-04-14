import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador de Cliques</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <br /><br />
      <button onClick={() => setCount(0)}>Resetar</button>
    </div>
  );
}

export default ClickCounter;