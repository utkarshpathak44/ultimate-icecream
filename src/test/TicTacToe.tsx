import { useEffect, useState } from "react";

type cellValue = "X" | "O" | null;

const initialData: cellValue[] = new Array(9).fill(null);

const checkData: number[][] = [
  [0, 1, 2],
  [2, 5, 8],
  [8, 7, 6],
  [6, 3, 0],
  [1, 4, 7],
  [3, 4, 5],
  [0, 4, 8],
  [2, 4, 6],
];

const CheckState = (data: cellValue[]) =>
  checkData.some(
    (arr: number[]) =>
      data[arr[2]] != null &&
      data[arr[0]] === data[arr[1]] &&
      data[arr[1]] === data[arr[2]]
  );

const TicTacToe = () => {
  const [state, setState] = useState<cellValue[]>(initialData);
  const [turn, setTurn] = useState<boolean>(true);
  const [gameOver, setGameOver] = useState<boolean>(true);

  useEffect(() => {
    setGameOver(CheckState(state));
  }, [state]);

  const handleClick = (key: any) => {
    if (gameOver) return;
    if (state[key]) return;
    setState((prevState) =>
      prevState.map((cell, i) => (i === key ? (turn ? "X" : "O") : cell))
    );
    setTurn(prev=>!prev);
  };

  return (
    <div>
      <div>{gameOver ? `game over ${!turn ? "X" : "O"} won` : ""}</div>
      <div className="grid grid-cols-3 gap-5 w-40">
        {state.map((cell, key) => (
          <div
            className="bg-stone-900 text-white text-3xl w-20 h-20 flex items-center justify-center border-white"
            onClick={() => handleClick(key)}
            key={key}
          >
            {cell ? cell : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
