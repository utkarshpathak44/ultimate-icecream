import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIceCreams } from "./IceCreamContext";

const initialData = {
  id: "",
  name: "",
  price: 0,
  stock: 0,
  about: "",
};

export const ParticularIceCream = () => {
  const [changed, setChanged] = useState<boolean>(false);
  const [IceCreamData, setIceCreamData] = useState<any>(initialData);

  const { id } = useParams();
  const { fetchParticularIceCream, updateParticularIceCream,deleteParticularIceCream } = useIceCreams();

  async function fetchData() {
    setChanged(true);
    try {
      const data = await fetchParticularIceCream(id);
      console.log(data)
      setIceCreamData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setChanged(false);
    }
  }

  function handleChange(e:any){
    setIceCreamData({...IceCreamData, [e.target.name]:e.target.value})
  }

  async function update(){
    updateParticularIceCream(IceCreamData)
  }

  async function deleteIceCream(){
    await deleteParticularIceCream(IceCreamData.id)
    setIceCreamData(initialData)
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="w-full h-screen flex flex-row px-[15%] py-10 gap-10 bg-stone-500">
      {/* image section */}
      <div
        className="h-100 w-100 bg-stone-600  flex   shadow-lg  animate-shimmer items-center justify-center 
                     border-2xl rounded-xl border-slate-400 
                    bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                    bg-[length:200%_100%] px-6 font-medium 
                    text-slate-400 transition-colors 
                    focus:outline-none focus:ring-2 focus:ring-slate-400 
                    focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="text-white text-lg font-semibold">
          Ice Cream Image
        </span>
      </div>

      {/* details section */}
      <div className="flex flex-col w-200 h-200 bg-stone-600 p-6 rounded-xl shadow-lg gap-2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Edit Ice Cream
        </h2>

        <label className="text-sm font-medium text-stone-400">ID</label>
        <input
          type="text"
          name="id"
          readOnly
          value={IceCreamData.id}
          className="text-white border border-stone-800 h-10 p-1 rounded"
        />

        <label className="text-sm font-medium text-stone-400">
          Ice Cream Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="text-white border border-stone-800 h-10 p-1 rounded"
          placeholder="Enter name"
          value={IceCreamData.name}
        />

        <label className="text-sm font-medium text-stone-400">Price</label>
        <input
          type="text"
          name="price"
          onChange={handleChange}
          className="text-white border border-stone-800 h-10 p-1 rounded"
          placeholder="Enter price"
          value={IceCreamData.price}
        />

        <label className="text-sm font-medium text-stone-400">Stock</label>
        <input
          type="text"
          name="stock"
          onChange={handleChange}
          className="text-white border border-stone-800 h-10 p-1 rounded"
          placeholder="Enter stock"
          value={IceCreamData.stock}
        />

        <label className="text-sm font-medium text-stone-400">
          Description
        </label>
        <textarea
        onChange={handleChange}
          className="text-white border border-stone-800 h-30 p-1 rounded"
          name="about"
          placeholder="Enter description"
          value={IceCreamData.about}
        ></textarea>

        <button className="mt-4 bg-stone-800 hover:bg-stone-950 text-white py-2 rounded-lg transition-all cursor-pointer" onClick={update}>
          Save Ice Cream
        </button>

        <button className="mt-4 bg-stone-900 hover:bg-stone-950 text-white py-2 rounded-lg transition-all cursor-pointer" onClick={deleteIceCream}>
          Delete Ice Cream
        </button>
      </div>
    </div>
  );
};

// Button code

// tailwind.config.js code
