import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export const useFetch = (url: string, method: string, payload: unknown) => {
  const [data, setData] = useState<null | any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const response: AxiosResponse<any> = await axios.request({
          url: url,
          method: method,
          data: payload,
        });

        if (response.status !== 200) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const responseData = response.data;
        setIsPending(false);
        setData(responseData);
        setError(null);
      } catch (error: any) {
        setIsPending(false);
        setError(`Could not Fetch Data: ${error.message}`);
      }
    };

    fetchData();
  }, [url, method, payload]);

  return { data, isPending, error };
};
