import { useClientTime } from "../hooks/useClientTime";
import { useServerTime } from "../hooks/useServerTime"

export default function Time() {

  const {serverTime} = useServerTime();
  const {clientTime} = useClientTime();

  const timeDiff = clientTime - serverTime
  
  var date = new Date(null);
  date.setSeconds(timeDiff); 
  var seconds = date.toISOString().substr(11, 8);


  if(!serverTime){
    return (
      <p>Loading</p>
    )
  }
  return (
    <div className="Time">
      <p>Server Time - {serverTime} </p>
      <p>Difference - {seconds} </p>
    </div>
  )
}
