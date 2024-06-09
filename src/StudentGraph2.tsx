import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] }]}
      series={[
        {
          data: [98, 93, 90, 97, 96, 89, 80, 73, 75],
        },
      ]}
      width={500}
      height={300}
    />
  );
}
