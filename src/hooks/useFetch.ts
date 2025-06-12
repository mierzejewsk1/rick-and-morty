import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function fetchData() {
      setError(null);
      setIsFetching(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setData(data);
      } catch {
        setError("Something is wrong with getting data");
      }

      setIsFetching(false);
    }

    fetchData();
  }, [url]);

  return {
    isFetching,
    error,
    data,
  };
};
