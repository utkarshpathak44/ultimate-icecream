import "./App.css";
import IceCreamGrid from "./IceCreamGrid";
import Menu from "./Menu";
import { IceCreamProvider } from "./IceCreamContext";

function App() {
  return (
    <div className="bg-pink-500  h-screen px-5 sm:px-20 md:px-90 overflow-scroll">
      <div className="text-stone-800 w-full h-50 text-center border border-stone-950 font-display">
        Ultimate Ice cream
      </div>

      <IceCreamProvider>
        <Menu />
      </IceCreamProvider>
    </div>
  );
}

export default App;
