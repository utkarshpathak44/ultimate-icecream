import React, { useEffect, useState } from "react";
import IceCreamHolder from "./IceCreamHolder";
import { useIceCreams } from "./IceCreamContext";
import IceCreamHolderShimmer from "./iceCreamHolderShimmer";

const IceCreamGrid: React.FC = () => {
  const { iceCreamList, fetchIceCreams } = useIceCreams();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchData() {
    setIsLoading(true);
    try {
      await fetchIceCreams();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="text-stone-800 w-full h-50 text-center ">
        choose an ice cream
      </div>
      <div className="grid grid-cols-1 px-[15%] sm:grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading
          ? [...Array(9)].map((_) => <IceCreamHolderShimmer />)
          : iceCreamList.map((iceCream) => (
              <IceCreamHolder
                id={iceCream.id}
                image={`https://picsum.photos/id/${Math.floor(400*Math.random())}/200/300?grayscale&blur=4`}
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
