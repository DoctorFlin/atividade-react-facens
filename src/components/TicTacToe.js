import { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
  };

  const checkWinner = (b) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for (let line of lines) {
      const [a,b1,c] = line;
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
        return b[a];
      }
    }
    return null;
  };

  const winner = checkWinner(board);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Jogo da Velha</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 60px)",
        gap: "5px",
        justifyContent: "center"
      }}>
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "60px",
              height: "60px",
              fontSize: "20px"
            }}
          >
            {cell}
          </button>
        ))}
      </div>

      <h3>
        {winner ? `Vencedor: ${winner}` : `Vez de: ${isX ? "X" : "O"}`}
      </h3>

      <button onClick={resetGame}>Reiniciar</button>
    </div>
  );
}

export default TicTacToe;