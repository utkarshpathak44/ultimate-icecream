import './App.css'
import { useIceCreams } from "./IceCreamContext";


const Menu=()=>{
          const { setList } = useIceCreams();
    
    return (
    <div className=' flex h-40 border border-stone-950 items-center justify-center'>
        <div className='bg-stone-50 w-full flex rounded-4xl h-15 items-center gap-3 px-3'>
          <div>menu</div>
          <div>add ice cream</div>
        </div>
      </div>
    )
}

export default Menu