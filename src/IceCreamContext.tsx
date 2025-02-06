import { createContext, useContext, useState, ReactNode } from "react";

interface IceCream {
  id: number;
  image: string;
  name: string;
  price: number;
  stock: number;
  about: string;
}

interface IceCreamContextType {
  iceCreamList: IceCream[];
  setList: any;
}

const IceCreamContext = createContext<IceCreamContextType | undefined>(undefined);

// Provider component
export const IceCreamProvider = ({ children }: { children: ReactNode }) => {
  const [iceCreamList, setList] = useState([]);

  return (
    <IceCreamContext.Provider value={{ iceCreamList, setList }}>
      {children}
    </IceCreamContext.Provider>
  );
};

export const useIceCreams = () => {
  const context = useContext(IceCreamContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};
