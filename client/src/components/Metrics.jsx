import { useMetrics } from "../hooks/useMetrics"

export default function Metrics() {

  const {metrics} = useMetrics();
  console.log(metrics)
  if(!metrics) {
    return ( 
      <p>Loading</p>
    )
  }
  return (
    <div className="Metrics">
      <pre>{metrics}</pre>
    </div>
  )
}
