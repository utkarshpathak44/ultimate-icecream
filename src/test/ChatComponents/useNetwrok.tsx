import { useEffect, useState } from "react";

export const useNetwork = (url:string) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    setState({...state, loading: true });

    const makeRequest = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if(isMounted){
            setState({...state, data, loading: false });

        }
      } catch (e) {
         if (isMounted) {
          setState({ data: null, loading: false, error:e });
        }
      }
    };
    makeRequest();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
};
