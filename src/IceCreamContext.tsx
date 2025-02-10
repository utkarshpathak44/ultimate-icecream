import axios from "axios";
import { IceCream } from "./types/types";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface IceCreamContextType {
  iceCreamList: IceCream[];
  fetchIceCreams: any;
  sendIceCream: any;
}

const IceCreamContext = createContext<IceCreamContextType | undefined>(
  undefined
);

// Provider component
export const IceCreamProvider = ({ children }: { children: ReactNode }) => {
  const [iceCreamList, setList] = useState<IceCream[]>([]);

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
      fetchIceCreams();
      return response.data;
    } catch (error) {
      console.error("Error sending ice cream:", error);
      throw error;
    }
  }

  async function fetchIceCreams() {
   await axios
      .get<IceCream[]>("http://localhost:5000/api/records")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ice cream records:", error);
      });
  }

  // useEffect(() => {
  //   fetchIceCreams();
  // }, []);

  return (
    <IceCreamContext.Provider value={{ iceCreamList, sendIceCream, fetchIceCreams }}>
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
