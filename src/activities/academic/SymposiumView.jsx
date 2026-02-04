import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

/* ===== Reusable Label + Value ===== */
const Field = ({ label, value }) => (
  <Box>
    <Typography
      sx={{
        fontSize: "12px",
        color: "#9e9e9e",
        mb: 0.5,
      }}
    >
      {label}
    </Typography>

    <Typography
      sx={{
        fontSize: "14px",
        fontWeight: 600,
        color: "#000",
      }}
    >
      {value || "-"}
    </Typography>
  </Box>
);

const SymposiumView = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return <Typography p={3}>No data found</Typography>;
  }

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
            Details
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* ================= HEADER ================= */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={3}
        mb={2}
      >
        <Typography sx={{ fontSize: 22, fontWeight: 600 }}>
          Details
        </Typography>

        <Button
  variant="contained"
  startIcon={<EditIcon />}
  sx={{ textTransform: "none" }}
  onClick={() =>
    navigate(
      "/activities/academic/symposium/edit",
      { state }
    )
  }
>
  Edit
</Button>
      </Box>

      {/* ================= STUDENT INFORMATION CARD ================= */}
      <Box px={3}>
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              mb: 3,
            }}
          >
            Student Information
          </Typography>

          {/* ===== ROW 1 ===== */}
          <Grid container spacing={4} mb={3}>
            <Grid item xs={2}>
              <Field
                label="College Name"
                value={state.college}
              />
            </Grid>

            <Grid item xs={2}>
              <Field
                label="No of students"
                value={state.students}
              />
            </Grid>

            <Grid item xs={2}>
              <Field
                label="Location"
                value={state.location}
              />
            </Grid>

            <Grid item xs={2}>
              <Field
                label="ID No"
                value={state.idNo}
              />
            </Grid>
          </Grid>

          {/* ===== ROW 2 ===== */}
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <Field
                label="Start date"
                value={state.startDate}
              />
            </Grid>

            <Grid item xs={2}>
              <Field
                label="End date"
                value={state.endDate}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default SymposiumView;