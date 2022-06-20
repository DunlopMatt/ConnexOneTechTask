import { useState, useEffect } from "react";
import axios from "axios"

export const useMetrics = () => {
  const [metrics, setMetrics] = useState([]);

  
  const getMetrics = (async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:5000/metrics",
        headers: {
          Authorization: 'mysecrettoken'
        }
      })
      let data = response.data
      setMetrics(data);
    } catch (error){
      console.log(error)
    }
  })

  useEffect(() => {
    getMetrics();
    setInterval(getMetrics, 30000);
  }, []);

  return {
    metrics,
    getMetrics,
  };
};
