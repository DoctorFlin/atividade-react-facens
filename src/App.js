import { useState } from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import TodoList from "./components/TodoList";
import Calculator from "./components/Calculator";
import TicTacToe from "./components/TicTacToe";
import CepFinder from "./components/CepFinder";

function App() {
  const [activeTool, setActiveTool] = useState("todo");

  return (
    <div className="app">
      <header className="app-header">
        <h1>Projeto React - Ferramentas Web</h1>
        <nav className="menu">
          <button onClick={() => setActiveTool("todo")}>To-Do List</button>
          <button onClick={() => setActiveTool("contador")}>Contador de Cliques</button>
          <button onClick={() => setActiveTool("jogo")}>Jogo da Velha</button>
          <button onClick={() => setActiveTool("calculadora")}>Calculadora</button>
          <button onClick={() => setActiveTool("cep")}>Buscador de CEP</button>
        </nav>
      </header>

      <main className="content">
        {activeTool === "todo" && <TodoList />}
        {activeTool === "contador" && <ClickCounter />}
        {activeTool === "jogo" && <TicTacToe />}
        {activeTool === "calculadora" && <Calculator />}
        {activeTool === "cep" && <CepFinder />}
      </main>
    </div>
  );
}

export default App;
