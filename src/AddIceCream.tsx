import { useState } from "react";

const initialData={
    name:"",
    price:0,
    stock:0,
    description:""
}

const iceCreamReducer=(state:typeof initialData, action:any)=>{
    switch(action.type){
        case "name":
            return {...state, name:action.payload}
        case "price":
            return {...state, price:action.payload}
        case "stock":
            return {...state, stock:action.payload}
        case "description":
            return {...state, description:action.payload}
        default:
      throw new Error("Unknown action type");

    }

}

const AddIceCream = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-full flex-col md:flex-row">
      <div>this is where the image will be displayed</div>
      <div className="w-full">
        <form action="">
          <label htmlFor="">enter the ice cream name</label>
          <input type="text" className="custom-input" />
          <br />
          <label htmlFor="">enter the price of the ice cream</label>
          <input type="text" name="" id="" className="custom-input" />
          <br />
          <label htmlFor="">enter the amount of the stock</label>
          <input type="text" name="" id="" className="custom-input" />
          <br />
          <label htmlFor="">Enter the description of the ice cream</label>
          <input type="text" name="" id="" className="custom-input" />
          <br />

          <input
            type="submit"
            name=""
            id=""
            className="custom-button"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default AddIceCream;
