import { useReducer } from "react";
import { useIceCreams } from "./IceCreamContext";

const initialData = {
  name: "",
  price: 0,
  stock: 0,
  about: "",
};

const iceCreamReducer = (
  state: typeof initialData,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "price":
      return { ...state, price: action.payload };
    case "stock":
      return { ...state, stock: action.payload };
    case "about":
      return { ...state, about: action.payload };
    default:
      throw new Error("Unknown action type");
  }
};

const AddIceCream = () => {
  const [iceCream, dispatchIceCream] = useReducer(iceCreamReducer, initialData);
  const { sendIceCream } = useIceCreams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchIceCream({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", iceCream);
    sendIceCream(iceCream);
  };

  return (
    <div className="w-full h-screen flex flex-row px-[15%] py-10 gap-10 bg-stone-500">
      <div
        className="h-100 w-100 bg-stone-600  flex   shadow-lg  animate-shimmer items-center justify-center 
                     border-2xl rounded-xl border-slate-400 
                    bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                    bg-[length:200%_100%] px-6 font-medium 
                    text-slate-400 transition-colors 
                    focus:outline-none focus:ring-2 focus:ring-slate-400 
                    focus:ring-offset-2 focus:ring-offset-slate-50p"
      >
        this is where the image will be displayed
      </div>
      <div className="flex flex-col w-200 h-200 bg-stone-600 p-6 rounded-xl shadow-lg gap-2">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-sm font-medium text-stone-400">
            Enter the ice cream name
          </label>
          <input
            type="text"
            name="name"
            className="text-white border border-stone-800 h-10 p-1 rounded"
            value={iceCream.name}
            onChange={handleChange}
          />
          <br />
          <label className="text-sm font-medium text-stone-400">
            Enter the price of the ice cream
          </label>
          <input
            type="number"
            name="price"
            className="text-white border border-stone-800 h-10 p-1 rounded"
            value={iceCream.price}
            onChange={handleChange}
          />
          <br />
          <label className="text-sm font-medium text-stone-400">
            Enter the amount of the stock
          </label>
          <input
            type="number"
            name="stock"
            className="text-white border border-stone-800 h-10 p-1 rounded"
            value={iceCream.stock}
            onChange={handleChange}
          />
          <br />
          <label className="text-sm font-medium text-stone-400">
            Enter the description of the ice cream
          </label>
          <input
            type="text"
            name="about"
            className="text-white border border-stone-800 h-10 p-1 rounded"
            value={iceCream.about}
            onChange={handleChange}
          />
          <br />
          <input
            type="submit"
            className="mt-4 bg-stone-800 hover:bg-stone-950 text-white py-2 rounded-lg transition-all cursor-pointer"
            value="Add Ice Cream"
          />
        </form>
      </div>
    </div>
  );
};

export default AddIceCream;
