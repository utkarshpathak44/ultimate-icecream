import { useState } from "react";
import "./App.css";
import { useIceCreams } from "./IceCreamContext";
// import { BrowserRouter, Routes, Route } from "react-router";
import IceCreamGrid from "./IceCreamGrid";
import AddIceCream from "./AddIceCream";

const Menu = () => {
  const { setList } = useIceCreams();
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
      <div className=" flex h-40 border border-stone-950 items-center justify-center">
        <div className="bg-stone-50 w-full flex rounded-4xl h-15 items-center gap-3 px-3">
          <div onClick={HandleGridClick}>menu</div>
          <div onClick={handleMenuClick}>add ice cream</div>
        </div>
      </div>
      {addMenu ? <AddIceCream/> : <IceCreamGrid />}
    </>
  );
};

export default Menu;
