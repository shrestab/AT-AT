import * as React from "react";
import Chip from "@mui/material/Chip";
import { BarChart } from "@mui/x-charts/BarChart";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chart from "./Chart";
import Paper from "@mui/material/Paper";
import OverviewTable from "./OverviewTable";
import OverviewCardQuestions from "./OverviewCardQuestions";
import OverviewCardWeaknesses from "./OverviewCardWeaknesses";
import { Route, Link, BrowserRouter, Routes, Switch } from "react-router-dom";

export default function Overview() {
  return (
    <>
      <Typography
        variant="h4"
        style={{ textAlign: "center", fontFamily: "Arial Narrow sans-serif" }}
      >
        Overall Grades
      </Typography>
      <Typography
        style={{ textAlign: "center", fontFamily: "Arial Narrow sans-serif" }}
      >
        (<Link to="/studentlist">Students</Link>)
      </Typography>
      <OverviewTable />
      <br />
      <br />
      <br />
      <Typography
        variant="h4"
        style={{ textAlign: "center", fontFamily: "Arial Narrow sans-serif" }}
      >
        Common Failed Questions
      </Typography>
      <OverviewCardQuestions />
      <br />
      <br />
      <br />
      <br />
      <Typography
        variant="h4"
        style={{ textAlign: "center", fontFamily: "Arial Narrow sans-serif" }}
      >
        Overall Weaknesses
      </Typography>
      <OverviewCardWeaknesses />
      <br />
      <br />
    </>
  );
}
