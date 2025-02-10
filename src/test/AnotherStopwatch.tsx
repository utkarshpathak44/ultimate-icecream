import { useState } from "react";

const whileFun=async(data)=>{
    while(data.isRunning){
        console.log(new Date.now())
    }
}

const AnotherStopWatch=()=>{
    const [time,setTime]=useState<number>(10);
    return(
        <div>
            <div>{time}</div>
            <div>
                <button>start</button>
                <button>stop</button>
            </div>
        </div>
    )
}