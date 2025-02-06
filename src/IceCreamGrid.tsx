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

const iceCreamData: IceCream[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Vanilla Delight",
    price: 3.99,
    stock: 10,
    about: "Classic vanilla ice cream with a creamy taste.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Chocolate Heaven",
    price: 4.49,
    stock: 5,
    about: "Rich chocolate ice cream that melts in your mouth.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "Strawberry Surprise",
    price: 4.29,
    stock: 0,
    about: "Fresh strawberry ice cream with chunks of real fruit.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    name: "Mint Magic",
    price: 3.79,
    stock: 15,
    about: "Refreshing mint ice cream with chocolate chips.",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    name: "Cookie Crunch",
    price: 4.99,
    stock: 8,
    about: "Ice cream loaded with cookie pieces for extra crunch.",
  },
];

const IceCreamGrid: React.FC = () => {
      const { iceCreamList } = useIceCreams();
  return (
    <>
      <div className="text-stone-800 w-full h-50 text-center border border-stone-950">
        choose your poison and enjoy
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {iceCreamData.map((iceCream) => (
          <IceCreamHolder
            key={iceCream.id}
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
