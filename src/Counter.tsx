import { useState, useEffect } from "react";
const Counter = () => {
  const [counter, setCounter] = useState<number>(10);
  const [startTimer, setStartTimer] = useState<boolean>(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => (prev === 0 ? 0 : counter - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTimer]);
  const onStartTimer = () => {
    setStartTimer(true);
  };
  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={onStartTimer}>start timer</button>
      </div>
    </div>
  );
};

export default Counter