import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const handleClick = () => {
  console.info("You clicked the Chip.");
};

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item>
            <ul style={{ textAlign: "left" }}>
              <li>Understanding Volume</li>
              <li>Converting Linear Equations</li>
              <li>Applying Area Formulas</li>
            </ul>
            <Stack alignItems="center">
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Generate Math quiz"
                  color="primary"
                  variant="outlined"
                  onClick={handleClick}
                />
              </Stack>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <ul style={{ textAlign: "left" }}>
              <li>Scientific Vocabulary</li>
              <li>Applying Scientific Formulas</li>
              <li>Understanding of Hypothesis</li>
            </ul>
            <Stack alignItems="center">
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Generate Science quiz"
                  color="primary"
                  variant="outlined"
                  onClick={handleClick}
                />
              </Stack>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <ul style={{ textAlign: "left" }}>
              <li>Comprehensing Poems</li>
              <li>Vocabulary and Grammar</li>
              <li>Writing Fluency</li>
            </ul>
            <Stack alignItems="center">
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Generate ELA quiz"
                  color="primary"
                  variant="outlined"
                  onClick={handleClick}
                />
              </Stack>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <ul style={{ textAlign: "left" }}>
              <li>Chronological Understanding</li>
              <li>Historical Interpretation of Wars</li>
              <li>Understanding Historical Documents</li>
            </ul>
            <Stack alignItems="center">
              <Stack direction="column" spacing={1}>
                <Chip
                  label="Generate History quiz"
                  color="primary"
                  variant="outlined"
                  onClick={handleClick}
                />
              </Stack>
            </Stack>
          </Item>
        </Grid>
        <Stack margin="auto">
          <Stack direction="column" spacing={5}>
            <br />
            <br />
            <Chip
              label="Generate quiz"
              color="primary"
              variant="outlined"
              onClick={handleClick}
              style={{
                margin: "auto",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            />
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
}
