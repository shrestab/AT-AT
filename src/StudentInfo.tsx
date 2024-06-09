import * as React from "react";
import StudentGraph1 from "./StudentGraph1";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import StudentGraph2 from "./StudentGraph2";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";
const handleClick = () => {
  console.info("You clicked the Chip.");
};

export default function StudentPage() {
  var query = useLocation();
  var user = query.search ? query.search.split("=")[1] : "Alex";
  return (
    <>
      <Paper
        elevation={3}
        style={{
          textAlign: "center",
          width: 350,
          height: 200,
          margin: "auto",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, paddingTop: "35px", fontWeight: "bold" }}
        >
          {user}
        </Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <br />
          Overall Grade: B
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        style={{
          textAlign: "center",
          width: 400,
          height: 200,
          marginBottom: "30px",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, paddingTop: "35px" }}
        >
          <b>Subjects Requiring Improvement:</b>
        </Typography>
        <ul style={{ textAlign: "left" }}>
          <li>Science</li>
          <li>Math</li>
        </ul>
      </Paper>
      <div>
        <table style={{ margin: "auto" }}>
          <tr>
            <th colSpan="2" style={{ width: "auto" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Science:
              </Typography>
              Tests failed:
            </th>
          </tr>
          <tr>
            <td style={{ width: "auto" }}>
              <Paper
                elevation={3}
                style={{
                  textAlign: "center",
                  width: 400,
                  height: 200,
                  marginBottom: "30px",
                }}
              >
                <ul>
                  Photosynthesis: 20/45
                  <br />
                  Things that need to improve on:
                  <ul style={{ color: "red" }}>
                    <li>Critical Thinking</li>
                    <li>Understanding of the Concepts</li>
                    <li>Summarization of the topic</li>
                  </ul>
                </ul>
                <Stack alignItems="center">
                  <Stack direction="column" spacing={1}>
                    <Chip
                      label="Generate Flash Cards"
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={handleClick}
                    />
                  </Stack>
                </Stack>
              </Paper>
            </td>
            <td style={{ width: "auto" }}>
              <Paper
                elevation={3}
                style={{
                  textAlign: "center",
                  width: 400,
                  height: 200,
                  marginBottom: "30px",
                }}
              >
                Things that he is good at:
                <ul style={{ color: "green" }}>
                  <ul>
                    <li>Finding evidence</li>
                    <li>Labeling diagrams</li>
                  </ul>
                </ul>
              </Paper>
            </td>
          </tr>
          <tr>
            <td style={{ width: "auto" }}>
              <Paper
                elevation={3}
                style={{
                  textAlign: "center",
                  width: 400,
                  height: 200,
                  marginBottom: "30px",
                }}
              >
                Space: 15/37 Things that need to improve on:
                <ul>
                  <ul style={{ color: "red" }}>
                    <li>Critical Thinking</li>
                    <li>Understanding of the Concepts</li>
                    <li>Summarization of the topic</li>
                  </ul>
                </ul>
                <Stack alignItems="center">
                  <Stack direction="column" spacing={1}>
                    <Chip
                      label="Generate Flash Cards"
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={handleClick}
                    />
                  </Stack>
                </Stack>
              </Paper>
            </td>
            <td style={{ width: "auto" }}>
              <Paper
                elevation={3}
                style={{
                  textAlign: "center",
                  width: 400,
                  height: 200,
                  marginBottom: "30px",
                }}
              >
                Things that he is good at:
                <ul style={{ color: "green" }}>
                  <ul>
                    <li>Finding evidence</li>
                    <li>Labeling diagrams</li>
                  </ul>
                </ul>
              </Paper>
            </td>
          </tr>
        </table>
        <table style={{ margin: "auto" }}>
          <tr>
            <th colspan="2" style={{ width: "auto" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Math:
              </Typography>
              Tests failed:
            </th>
          </tr>
          <tr>
            <td style={{ width: "auto" }}>
              <Paper
                elevation={3}
                style={{
                  textAlign: "center",
                  width: 400,
                  height: 200,
                  marginBottom: "30px",
                }}
              >
                Fractions: 13/20
                <br />
                Things that need to improve on:
                <ul style={{ color: "red" }}>
                  <ul>
                    <li>Critical Thinking</li>
                    <li>Understanding of the Concepts</li>
                    <li>Summarization of the topic</li>
                  </ul>
                </ul>
                <Stack alignItems="center">
                  <Stack direction="column" spacing={1}>
                    <Chip
                      label="Generate Flash Cards"
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={handleClick}
                    />
                  </Stack>
                </Stack>
              </Paper>
            </td>
            <td style={{ width: "auto" }}>
              <Paper
                elevation={3}
                style={{
                  textAlign: "center",
                  width: 400,
                  height: 200,
                  marginBottom: "30px",
                }}
              >
                <ul>
                  Things that he is good at:
                  <ul style={{ color: "green" }}>
                    <li>Finding evidence</li>
                    <li>Labeling diagrams</li>
                  </ul>
                </ul>
              </Paper>
            </td>
          </tr>
          <tr>
            <td style={{ width: "auto" }}>
              <Paper
                elevation={3}
                style={{
                  textAlign: "center",
                  width: 400,
                  height: 200,
                  marginBottom: "30px",
                }}
              >
                Graphs: 25/40 Things that need to improve on:
                <ul style={{ color: "red" }}>
                  <ul>
                    <li>Critical Thinking</li>
                    <li>Understanding of the Concepts</li>
                    <li>Summarization of the topic</li>
                  </ul>
                </ul>
                <Stack alignItems="center">
                  <Stack direction="column" spacing={1}>
                    <Chip
                      style={{ margin: "auto" }}
                      label="Generate Flash Cards"
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={handleClick}
                    />
                  </Stack>
                </Stack>
              </Paper>
            </td>
            <td style={{ width: "auto" }}>
              <Paper
                elevation={3}
                style={{
                  textAlign: "center",
                  width: 400,
                  height: 200,
                  marginBottom: "30px",
                }}
              >
                <ul>
                  Things that he is good at:
                  <ul style={{ color: "green" }}>
                    <li>Finding evidence</li>
                    <li>Labeling diagrams</li>
                  </ul>
                </ul>
              </Paper>
            </td>
          </tr>
        </table>
      </div>
      <div
        style={{
          margin: "auto",
          justifyContent: "center",
          width: "100%",
          display: "flex",
        }}
      >
        <Typography variant="h5" style={{ margin: "auto" }}>
          Science Grade From 1st
        </Typography>

        <StudentGraph1 />
        <Typography variant="h5" style={{ margin: "auto" }}>
          Math Grade from 1st
        </Typography>
        <StudentGraph2 />
      </div>
    </>
  );
}
