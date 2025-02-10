import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(10);
  const [startTimer, setStartTimer] = useState<boolean>(false);


  useEffect(() => {
    if (!startTimer) return; 
    
    const timer = setInterval(() => {
      setCounter((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTimer]);


  const onStartTimer = () => {
    if(startTimer===false)
      setStartTimer(true);
  };



  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={onStartTimer} disabled={startTimer}>
          startTimer
        </button>
      </div>
    </div>
  );
};

export default Counter;
