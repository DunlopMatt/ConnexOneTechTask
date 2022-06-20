import { useState, useEffect } from "react";
import axios from "axios"

export const useServerTime = () => {
  const [serverTime, setServerTime] = useState([]);
  
  const getServerTime = (async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:5000/time",
        headers: {
          Authorization: 'mysecrettoken'
        }
      })
      let data = response.data.serverTime
      setServerTime(data);
    } catch (error){
      console.log(error)
    }
  })

  useEffect(() => {
    getServerTime();
    setInterval( getServerTime,30000);
  }, []);

  return {
    serverTime,
    getServerTime
  };
};
