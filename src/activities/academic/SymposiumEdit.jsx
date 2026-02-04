import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Breadcrumbs,
  Link,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const SymposiumEdit = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* ================= BREADCRUMB ================= */}
      <Box sx={{ px: 3, py: 2 }}>
        <Breadcrumbs separator="•" sx={{ fontSize: 13 }}>
          <Typography color="text.secondary">
            Activities
          </Typography>

          <Link
            underline="hover"
            sx={{ cursor: "pointer" }}
            onClick={() =>
              navigate("/activities/academic/symposium")
            }
          >
            Symposium
          </Link>

          <Typography color="text.primary">
            Edit
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* ================= HEADER ================= */}
      <Box px={3} mb={2}>
        <Typography sx={{ fontSize: 22, fontWeight: 600 }}>
          Edit
        </Typography>
      </Box>

      {/* ================= FORM CARD ================= */}
      <Box px={3}>
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            backgroundColor: "#fafafa",
          }}
        >
          {/* Title + delete icon */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
              Student Information
            </Typography>

            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          </Box>

          {/* ================= GRID LAYOUT ================= */}
          <Grid container spacing={3}>
            {/* ===== ROW 1 (3 fields) ===== */}
            <Grid item xs={4}>
              <TextField label="Student name" fullWidth />
            </Grid>

            <Grid item xs={4}>
              <TextField label="Department" fullWidth />
            </Grid>

            <Grid item xs={4}>
              <TextField label="Year" fullWidth />
            </Grid>

            {/* ===== ROW 2 (4 fields) ===== */}
            <Grid item xs={3}>
              <TextField label="Trainer" fullWidth />
            </Grid>

            <Grid item xs={3}>
              <TextField label="Techstack" fullWidth />
            </Grid>

            <Grid item xs={3}>
              <TextField label="Domain" fullWidth />
            </Grid>

            <Grid item xs={3}>
              <TextField label="Duration" fullWidth />
            </Grid>

            {/* ===== ROW 3 (2 fields) ===== */}
            <Grid item xs={3}>
              <TextField
                label="Start date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="End date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* ================= FOOTER ================= */}
      <Box
        display="flex"
        justifyContent="flex-end"
        gap={2}
        px={3}
        mt={4}
      >
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Cancel
        </Button>

        <Button variant="contained">
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default SymposiumEdit;