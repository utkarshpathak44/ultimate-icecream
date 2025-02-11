import { useState } from "react";
import "./App.css";
import { useIceCreams } from "./IceCreamContext";
// import { BrowserRouter, Routes, Route } from "react-router";
import IceCreamGrid from "./IceCreamGrid";
import AddIceCream from "./AddIceCream";

const Menu = () => {
  const [addMenu, showAppMenu] = useState(false);
  const HandleGridClick=()=>{
    if(addMenu){
        showAppMenu(!addMenu)
    }
  }
  const handleMenuClick=()=>{
    if(!addMenu) showAppMenu(!addMenu)
  }

  return (
    <>
      <div className=" flex h-40  items-center justify-center px-[15%]">
        <div className="bg-stone-50 w-full flex rounded-4xl h-15 items-center gap-2 px-2">
          <div onClick={HandleGridClick} className="border rounded-4xl bg-stone-900 text-white p-3 cursor-pointer">menu</div>
          <div onClick={handleMenuClick} className="border rounded-4xl bg-stone-900 text-white p-3 cursor-pointer">add ice cream</div>
        </div>
      </div>
      {addMenu ? <AddIceCream/> : <IceCreamGrid />}
    </>
  );
};

export default Menu;


//language server protocol