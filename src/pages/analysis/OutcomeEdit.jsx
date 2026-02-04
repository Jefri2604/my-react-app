import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function OutcomeEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Box>
      {/* 🔹 Breadcrumb */}
      <Typography fontSize={13} color="#6b7280" mb={1}>
        Analysis • Outcomes • Francis Xavier Engineering College • Edit
      </Typography>

      {/* 🔹 Title */}
      <Typography fontSize={22} fontWeight={600} mb={3}>
        Edit
      </Typography>

      {/* 🔹 Form */}
      <Box bgcolor="#fff" p={3} borderRadius={2}>
        <Typography fontWeight={600} mb={2}>
          College Information
        </Typography>

        <TextField
          fullWidth
          label="College Name"
          defaultValue="Francis Xavier Engineering College"
          sx={{ mb: 2 }}
        />

        <Typography fontWeight={600} mt={3} mb={2}>
          Outcomes
        </Typography>

        <TextField
          label="External Training"
          defaultValue="Yes"
          sx={{ mr: 2 }}
        />
        <TextField
          label="Placement"
          defaultValue="Satisfied"
          sx={{ mr: 2 }}
        />
        <TextField
          label="Coding Platform"
          defaultValue="Yes"
          sx={{ mr: 2 }}
        />
        <TextField
          label="Observation"
          defaultValue="Weak in both Skills"
        />

        {/* 🔹 Actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 4,
          }}
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
    </Box>
  );
}
