import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const SymposiumStudentEdit = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // may be undefined

  /* 🔥 SAFETY CHECK – avoids white page */
  if (!state) {
    return (
      <Box p={3}>
        <Typography>No student data found</Typography>
        <Button sx={{ mt: 2 }} onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Box>
    );
  }

  // ❗ DO NOT auto-fill – empty form only
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

  return (
    <Box px={3} py={2}>
      {/* HEADER */}
      <Typography fontSize={20} fontWeight={600} mb={2}>
        Edit
      </Typography>

      {/* FORM CARD */}
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Typography fontWeight={600} mb={2}>
          Student Information
        </Typography>

        <Grid container spacing={3}>
          {/* ROW 1 */}
          <Grid item xs={4}>
            <TextField
              label="Student name"
              fullWidth
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Department"
              fullWidth
              value={form.department}
              onChange={(e) =>
                setForm({
                  ...form,
                  department: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Year"
              fullWidth
              value={form.year}
              onChange={(e) =>
                setForm({ ...form, year: e.target.value })
              }
            />
          </Grid>

          {/* ROW 2 */}
          <Grid item xs={3}>
            <TextField
              label="Trainer"
              fullWidth
              value={form.trainer}
              onChange={(e) =>
                setForm({
                  ...form,
                  trainer: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Techstack"
              fullWidth
              value={form.techstack}
              onChange={(e) =>
                setForm({
                  ...form,
                  techstack: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Domain"
              fullWidth
              value={form.domain}
              onChange={(e) =>
                setForm({
                  ...form,
                  domain: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Duration"
              fullWidth
              value={form.duration}
              onChange={(e) =>
                setForm({
                  ...form,
                  duration: e.target.value,
                })
              }
            />
          </Grid>

          {/* ROW 3 */}
          <Grid item xs={3}>
            <TextField
              label="Start date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={form.startDate}
              onChange={(e) =>
                setForm({
                  ...form,
                  startDate: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="End date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={form.endDate}
              onChange={(e) =>
                setForm({
                  ...form,
                  endDate: e.target.value,
                })
              }
            />
          </Grid>
        </Grid>
      </Paper>

      {/* FOOTER */}
      <Box
        display="flex"
        justifyContent="flex-end"
        gap={2}
        mt={3}
      >
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>

        <Button variant="contained">
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default SymposiumStudentEdit;
