import { useReducer } from "react";
import { useIceCreams } from "./IceCreamContext";


const initialData = {
  name: "",
  price: 0,
  stock: 0,
  description: "",
};

const iceCreamReducer = (state: typeof initialData, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "price":
      return { ...state, price: action.payload };
    case "stock":
      return { ...state, stock: action.payload };
    case "description":
      return { ...state, description: action.payload };
    default:
      throw new Error("Unknown action type");
  }
};

const AddIceCream = () => {
  const [iceCream, dispatchIceCream] = useReducer(iceCreamReducer, initialData);
  const { sendIceCream } = useIceCreams();


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatchIceCream({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", iceCream);
    sendIceCream(iceCream)
  };

  return (
    <div className="flex w-full flex-col md:flex-row">
      <div>this is where the image will be displayed</div>
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <label>Enter the ice cream name</label>
          <input type="text" name="name" className="custom-input" value={iceCream.name} onChange={handleChange} />
          <br />
          <label>Enter the price of the ice cream</label>
          <input type="number" name="price" className="custom-input" value={iceCream.price} onChange={handleChange} />
          <br />
          <label>Enter the amount of the stock</label>
          <input type="number" name="stock" className="custom-input" value={iceCream.stock} onChange={handleChange} />
          <br />
          <label>Enter the description of the ice cream</label>
          <input type="text" name="description" className="custom-input" value={iceCream.description} onChange={handleChange} />
          <br />
          <input type="submit" className="custom-button" value="Add Ice Cream" />
        </form>
      </div>
    </div>
  );
};

export default AddIceCream;
