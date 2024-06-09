import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Typography from "@mui/material/Typography";

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] }]}
      series={[
        {
          data: [98, 97, 90, 92, 83, 81, 85, 75, 71],
        },
      ]}
      width={500}
      height={300}
    />
  );
}
