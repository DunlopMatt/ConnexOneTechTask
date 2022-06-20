import { useState, useEffect } from "react";

export const useClientTime = () => {
  const [clientTime, setClientTime] = useState([]);
  
  const getClientTime = ( () => {
      let time = Math.floor(Date.now()/1000)
      setClientTime(time);
  })

  useEffect(() => {
    getClientTime();
    setInterval( getClientTime,1000);
  }, []);

  return {
    clientTime,
    getClientTime
  };
};
