import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("data not fetched");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
