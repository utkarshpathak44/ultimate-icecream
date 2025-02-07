import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(10);
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [pause, setPause] = useState<boolean>(false);
  let StoreValue=10;


  useEffect(() => {
    if (!startTimer) return; 
    
    const timer = setInterval(() => {
      setCounter((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTimer,pause]);


  const onStartTimer = () => {
    if(startTimer===false)
      setStartTimer(true);
  };

  const OnStopTimer=()=>{
    
    StoreValue=counter;
  }

  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={onStartTimer} disabled={startTimer}>
          startTimer
        </button>
        <button>
          stopTimer
        </button>
      </div>
    </div>
  );
};

export default Counter;
