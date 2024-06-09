import * as React from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

type TickParamsSelectorProps = {
  tickLabelPlacement: "tick" | "middle";
  setTickPlacement: React.Dispatch<
    React.SetStateAction<"end" | "start" | "middle" | "extremities">
  >;
  setTickLabelPlacement: React.Dispatch<
    React.SetStateAction<"tick" | "middle">
  >;
};

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}: TickParamsSelectorProps) {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{ width: "100%" }}
    ></Stack>
  );
}

const dataset = [
  {
    grade: 68,
    month: "Math",
  },
  {
    grade: 78,
    month: "Science",
  },
  {
    grade: 95,
    month: "History",
  },
  {
    grade: 89,
    month: "English",
  },
];

const valueFormatter = (value: number | null) => `${value}%`;

const chartSetting = {
  yAxis: [
    {
      label: "Grade Percentage",
    },
  ],
  series: [{ dataKey: "grade", valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

export default function TickPlacementBars() {
  const [tickPlacement, setTickPlacement] = React.useState<"start">("start");
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState<
    "middle" | "tick"
  >("middle");

  return (
    <div style={{ width: "100%" }}>
      <TickParamsSelector
        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      />
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "month",
            tickPlacement,
            tickLabelPlacement,
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
