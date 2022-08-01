import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");

  const fetchData = async () => {
    try {
      setStatus("pending");
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setStatus("resolved");
    } catch (err) {
      console.log(err.message);
      setStatus("rejected");
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    isLoading: status === "idle" || status === "pending",
    isError: status === "rejected",
  };
}
