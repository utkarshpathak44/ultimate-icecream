
import './App.css'
import IceCreamGrid from './IceCreamGrid'

function App() {

  return (

    <div className='bg-pink-500  h-screen px-5 sm:px-20 md:px-90 overflow-scroll'>
      <div className='text-stone-800 w-full h-50 text-center border border-stone-950'>Ultimate Ice cream</div>
      <div className=' flex h-40 border border-stone-950 items-center justify-center'>
        <div className='bg-stone-50 w-full flex rounded-4xl h-15 items-center gap-3 px-3'>
          <div>menu</div>
          <div>add ice cream</div>
        </div>
      </div>

      <div className='text-stone-800 w-full h-50 text-center border border-stone-950'>choose your poison and enjoy</div>
      

      <IceCreamGrid/>

    </div>
  )
}

export default App
