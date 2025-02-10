import { useState } from "react"

const getSolution=async(exp:string)=>{
    const promise= await fetch(`https://newton.now.sh/api/v2/simplify/${exp}`)
    return await promise.json()
}

const ApiTesting=()=>{
    const [expression,setExpression]=useState<string>("")
    const [result,setResult]=useState<number|string>("")
    const HandleSearch=async()=>{
        const k=await getSolution(expression)
        console.log(k)
        setResult(k.result)
    }

    return(
        <div>
            <input type="text" placeholder="Enter the equation to simplify" onChange={e=>setExpression(e.target.value)}/>
            <button onClick={HandleSearch}>Search</button>
            <div>{result}</div>
        </div>
    )
}

export default ApiTesting