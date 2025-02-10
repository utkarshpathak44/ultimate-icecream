import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState<number>(10);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const k = useRef<any>(null);

  useEffect(() => {
    if (!isRunning) return;

    k.current = setInterval(() => {
      console.log("insidde set interval");
      setTime((p) => p==0?0:p-1);
    }, 1000);
    return () => clearInterval(k.current);
  }, [isRunning]);

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(k.current);
    }
    setIsRunning((r) => (r ? false : true));
    console.log(isRunning);
  };

  const handleReset = () => {
    setIsRunning((r) => (r ? false : false));
    setTime(10);
  };

  return (
    <div className=" flex p-10">
      <div className="flex flex-row  gap-3">
        <div className="text-7xl">{time}</div>
        <button
          type="button"
          onClick={handleStartStop}
          className="bg-stone-800 p-5"
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-stone-800 p-5"
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
