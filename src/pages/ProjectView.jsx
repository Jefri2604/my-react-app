import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";

const ProjectView = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return <Typography>No project data found</Typography>;
  }

  return (
    <Box p={3}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="h4" fontWeight={600}>
            {state.college}
          </Typography>

          {/* ✅ CLICKABLE ALL */}
          <Typography color="text.secondary">
            <span
              style={{
                cursor: "pointer",
                color: "#1976d2",
                fontWeight: 500,
              }}
              onClick={() => navigate("/projects")}
            >
              All
            </span>
            {" "}•{" "}
            {state.college}
          </Typography>
        </Box>

        <Button
          variant="contained"
          size="small"
          startIcon={<EditIcon />}
          onClick={() => navigate("/projects/edit", { state })}
        >
          Edit
        </Button>
      </Box>

      {/* MAIN CARD */}
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        {/* STUDENT INFORMATION */}
        <Typography fontWeight={600} mb={3}>
          Student Information
        </Typography>

        {/* ROW 1 */}
        <Grid container spacing={4} mb={3}>
          <Grid item xs={3}>
            <Typography variant="caption" color="text.secondary">
              College Name
            </Typography>
            <Typography fontWeight={600}>
              {state.college}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="caption" color="text.secondary">
              Location
            </Typography>
            <Typography fontWeight={600}>
              {state.location}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="caption" color="text.secondary">
              Domain
            </Typography>
            <Typography fontWeight={600}>
              UI UX Design
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="caption" color="text.secondary">
              ID Number
            </Typography>
            <Typography fontWeight={600}>
              {state.id}
            </Typography>
          </Grid>
        </Grid>

        {/* ROW 2 */}
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Typography variant="caption" color="text.secondary">
              Start date
            </Typography>
            <Typography fontWeight={600}>
              {state.start}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="caption" color="text.secondary">
              End date
            </Typography>
            <Typography fontWeight={600}>
              {state.end}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="caption" color="text.secondary">
              Contact
            </Typography>
            <Typography fontWeight={600}>
              {state.contact}
            </Typography>
          </Grid>
        </Grid>

        {/* POINT OF CONTACT */}
        <Typography fontWeight={600} mt={4} mb={1}>
          Point of contact
        </Typography>

        <Table size="small">
          <TableHead sx={{ backgroundColor: "#EAF2FB" }}>
            <TableRow>
              <TableCell>Person name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Mail id</TableCell>
              <TableCell>Phone no</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Arulmary.R</TableCell>
              <TableCell>Head of department</TableCell>
              <TableCell>arulmary@gmail.com</TableCell>
              <TableCell>9456746920</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Rajan raj.L</TableCell>
              <TableCell>Professor</TableCell>
              <TableCell>rajanraj@gmail.com</TableCell>
              <TableCell>9456789875</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Punitha.k</TableCell>
              <TableCell>Head of department</TableCell>
              <TableCell>punitha.k@gmail.com</TableCell>
              <TableCell>9456789875</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* DOCUMENT */}
        <Box mt={4}>
          <Typography fontWeight={600} mb={1}>
            Document
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 2,
            }}
          >
            <Box>
              <Typography>Document</Typography>
              <Typography variant="caption" color="text.secondary">
                size : 13.76 kb
              </Typography>
            </Box>

            <Button
              variant="outlined"
              size="small"
              startIcon={<DownloadIcon />}
            >
              Download
            </Button>
          </Paper>
        </Box>
      </Paper>

      {/* FOOTER */}
      <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
        <Button variant="outlined" onClick={() => navigate("/projects")}>
          Cancel
        </Button>
        <Button variant="contained">
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectView;

