import React from "react";

const IceCreamHolderShimmer: React.FC = ({}) => {
  return (
    <div className="bg-stone-400 w-full h-full flex flex-col p-5 pb-3 rounded-xl shadow-md overflow-hidden">
      <div
        className="inline-flex animate-shimmer items-center justify-center 
                    rounded-md border-xl border-slate-400 
                    bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                    bg-[length:200%_100%] px-6 font-medium 
                    text-slate-400 transition-colors 
                    focus:outline-none focus:ring-2 focus:ring-slate-400 
                    focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <div className="h-64"></div>
      </div>
      <div className="text-lg font-bold mt-2 px-2"></div>
      <div className="flex items-center mt-1 gap-2">
        <div className="text-stone-500 font-semibold w-[40%] h-7 rounded-xl bg-stone-500"></div>
      </div>
      <div className="flex flex-row mt-2 gap-2">
        <div className="h-7 w-10 rounded-2xl bg-stone-500"></div>
        <div className="text-stone-500 font-semibold w-[30%] h-7  rounded-xl bg-stone-500"></div>
      </div>
      <div className="text-gray-500 mt-2 h-7 rounded-xl bg-stone-500"></div>
    </div>
  );
};

export default IceCreamHolderShimmer;
