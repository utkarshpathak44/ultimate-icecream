import { useState } from "react"

export const  ParticularIceCream=()=>{
    const [changed, setChanged]=useState<boolean>(false)

    return(
        <div className="w-full h-screen flex flex-row">
            <div className="h-full bg-stone-400"></div>
            <div className="flex flex-col">
                <label htmlFor="">Ice cream name</label>
                <input type="text" />
                <label htmlFor="">ice cream price</label>
                <input type="text" />
                <label htmlFor="">Stock</label>
                <input type="text" />
                <label htmlFor="">Ice cream Description</label>
                <textarea name="" id="" placeholder="description"></textarea>
                <button>Save Ice cream</button>
            </div>
        </div>
    )
}


        // Button code

  
        // tailwind.config.js code

       