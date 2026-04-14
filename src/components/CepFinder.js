import { useState } from "react";

function CepFinder() {
  const [cep, setCep] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const result = await response.json();

      if (result.erro) {
        setError("CEP não encontrado");
        setData(null);
      } else {
        setData(result);
        setError("");
      }
    } catch {
      setError("Erro na requisição");
      setData(null);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Buscador de CEP</h2>

      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div>
          <p><strong>Rua:</strong> {data.logradouro}</p>
          <p><strong>Bairro:</strong> {data.bairro}</p>
          <p><strong>Cidade:</strong> {data.localidade}</p>
          <p><strong>Estado:</strong> {data.uf}</p>
        </div>
      )}
    </div>
  );
}

export default CepFinder;