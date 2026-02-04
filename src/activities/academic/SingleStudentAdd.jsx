import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SingleStudentAdd = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    department: "",
    year: "",
    trainer: "",
    techstack: "",
    domain: "",
    duration: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const existing =
      JSON.parse(localStorage.getItem("symposium_students")) || [];

    localStorage.setItem(
      "symposium_students",
      JSON.stringify([...existing, form])
    );

    navigate(-1); // back to students list
  };

  return (
    <Box p={3}>
      {/* HEADER */}
      <Typography fontSize={22} fontWeight={600} mb={2}>
        Single Student add
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography fontWeight={600} mb={2}>
          Student Information
        </Typography>

        <Grid container spacing={2}>
          {/* ROW 1 */}
          <Grid item xs={4}>
            <TextField
              name="name"
              placeholder="Student name"
              fullWidth
              value={form.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="department"
              placeholder="Department"
              fullWidth
              value={form.department}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="year"
              placeholder="Year"
              fullWidth
              value={form.year}
              onChange={handleChange}
            />
          </Grid>

          {/* ROW 2 */}
          <Grid item xs={3}>
            <TextField
              name="trainer"
              placeholder="Trainer"
              fullWidth
              value={form.trainer}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              name="techstack"
              placeholder="Techstack"
              fullWidth
              value={form.techstack}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              name="domain"
              placeholder="Domain"
              fullWidth
              value={form.domain}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              name="duration"
              placeholder="Duration"
              fullWidth
              value={form.duration}
              onChange={handleChange}
            />
          </Grid>

          {/* ROW 3 */}
          <Grid item xs={3}>
            <TextField
              type="date"
              name="startDate"
              fullWidth
              value={form.startDate}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              type="date"
              name="endDate"
              fullWidth
              value={form.endDate}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        {/* FOOTER BUTTONS */}
        <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Update
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SingleStudentAdd;