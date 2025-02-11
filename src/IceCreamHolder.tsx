import React from "react";

interface IceCreamHolderProps {
  id: number;
  image: string;
  name: string;
  price: number;
  stock: number;
  about: string;
}

const IceCreamHolder: React.FC<IceCreamHolderProps> = ({
  image,
  name,
  price,
  stock,
  about,
  id,
}) => {
  return (
    <div
      key={id.toString()}
      className="bg-stone-400 w-full h-full flex flex-col p-5 pb-3 rounded-xl shadow-md overflow-hidden"
    >
      <div className="flex justify-center h-64 items-center border-stone-500 border rounded-xl ">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center rounded-xl bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                    bg-[length:200%_100%] font-medium 
                    text-slate-400 transition-colors 
                    focus:outline-none focus:ring-2 focus:ring-slate-400 
                    focus:ring-offset-2 focus:ring-offset-slate-50"
          loading="lazy"
        />
      </div>
      <div className="text-lg font-bold mt-2">{name}</div>
      <div className="flex items-center mt-1 gap-2">
        <div className="text-stone-600 font-semibold">${price}</div>
        <div className={stock ? "text-stone-600" : "text-red-400"}>
          {stock ? `${stock} in stock` : "Currently out of stock"}
        </div>
      </div>
      <div></div>
      <div className="text-gray-600 mt-2">{about}</div>
    </div>
  );
};

export default IceCreamHolder;
