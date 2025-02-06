import React from "react";
import IceCreamHolder from "./IceCreamHolder";
import { useIceCreams } from "./IceCreamContext";

interface IceCream {
  id: number;
  image: string;
  name: string;
  price: number;
  stock: number;
  about: string;
}

const IceCreamGrid: React.FC = () => {
  const { iceCreamList } = useIceCreams();

  return (
    <>
      <div className="text-stone-800 w-full h-50 text-center border border-stone-950">
        choose your poison and enjoy
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {iceCreamList.map((iceCream) => (
          <IceCreamHolder
            id={iceCream.id}
            image={iceCream.image}
            name={iceCream.name}
            price={iceCream.price}
            stock={iceCream.stock}
            about={iceCream.about}
          />
        ))}
      </div>
    </>
  );
};

export default IceCreamGrid;
