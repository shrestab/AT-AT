import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ textAlign: "center" }}
      >
        <Grid xs={6}>
          <Item>
            <Typography>
              Math:
              <br />
              <br />
              What is the axis of symmetry?
              <br />
              <br />
              46% Failed
            </Typography>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <Typography>
              Science:
              <br />
              <br />
              What is the powerhouse of the cell?
              <br />
              <br />
              37% Failed
            </Typography>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <Typography>
              History:
              <br />
              <br />
              When did the American Revolution start?
              <br />
              <br />
              17% Failed
            </Typography>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <Typography>
              English:
              <br />
              <br />
              What is the best example of figurative language?
              <br />
              <br />
              23% Failed
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
