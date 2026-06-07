import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { time:"8AM", traffic:20 },
  { time:"10AM", traffic:50 },
  { time:"12PM", traffic:90 },
  { time:"2PM", traffic:70 },
  { time:"4PM", traffic:40 }
];

function TrafficChart() {

  return (

    <div className="card">

      <h2>Traffic Trends</h2>

      <LineChart
        width={700}
        height={250}
        data={data}
      >

        <XAxis dataKey="time"/>

        <YAxis/>

        <Tooltip/>

        <Line
          type="monotone"
          dataKey="traffic"
        />

      </LineChart>

    </div>

  );
}

export default TrafficChart;