import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

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
  sendIceCream:any;
}

const IceCreamContext = createContext<IceCreamContextType | undefined>(
  undefined
);



async function sendIceCream(iceCream: IceCream): Promise<any> {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/records",
      iceCream,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending ice cream:", error);
    throw error;
  }
}


// Provider component
export const IceCreamProvider = ({ children }: { children: ReactNode }) => {
  const [iceCreamList, setList] = useState<IceCream[]>([]);




  useEffect(() => {
    axios
      .get<IceCream[]>("http://localhost:5000/api/records")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ice cream records:", error);
      });
  }, []);

  return (
    <IceCreamContext.Provider value={{ iceCreamList, setList, sendIceCream }}>
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
