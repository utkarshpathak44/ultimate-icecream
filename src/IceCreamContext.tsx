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
  fetchParticularIceCream: any;
  updateParticularIceCream:any;
  deleteParticularIceCream:any;
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

  async function fetchParticularIceCream(id: string): Promise<IceCream | null> {
    try {
      const response = await axios.get<IceCream>(
        `http://localhost:5000/api/records/${id}`
      );
      return response.data;
    } catch (error) {
      // console.error("Error fetching ice cream:", error);
      return null;
    }
  }

  async function updateParticularIceCream(
    iceCream: IceCream
  ): Promise<IceCream> {
    try {
      const response = await axios.patch(
        "http://localhost:5000/api/records/"+iceCream.id,
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
      throw error;
    }
  }

  async function deleteParticularIceCream(id: string): Promise<any> {
    try {
      const response = await axios.delete(
        "http://localhost:5000/api/records/" + id,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // useEffect(() => {
  //   fetchIceCreams();
  // }, []);

  return (
    <IceCreamContext.Provider
      value={{
        iceCreamList,
        sendIceCream,
        fetchIceCreams,
        fetchParticularIceCream,
        updateParticularIceCream,
        deleteParticularIceCream
      }}
    >
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
