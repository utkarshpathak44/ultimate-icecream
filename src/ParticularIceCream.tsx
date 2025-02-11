import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIceCreams } from "./IceCreamContext";

export const ParticularIceCream = () => {
  const [changed, setChanged] = useState<boolean>(false);
  const { id } = useParams();
  const { fetchParticularIceCream } = useIceCreams();

  async function fetchData() {
    setChanged(true);
    try {
      await fetchParticularIceCream(id);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setChanged(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="h-full bg-stone-400"></div>
      <div className="flex flex-col">
        <label htmlFor="">Ice cream name</label>
        <input type="text" />
        <label htmlFor="">ice cream price</label>
        <input type="text" />
        <label htmlFor="">Stock</label>
        <input type="text" />
        <label htmlFor="">Ice cream Description</label>
        <textarea name="" id="" placeholder="description"></textarea>
        <button>Save Ice cream</button>
      </div>
    </div>
  );
};

// Button code

// tailwind.config.js code
