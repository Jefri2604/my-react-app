import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";

export default function OutcomeDetails() {
  const { id } = useParams();

  return (
    <Box bgcolor="#fff" borderRadius={2} p={3}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography fontSize={20} fontWeight={600}>
          Details
        </Typography>
        <Button variant="contained">Edit</Button>
      </Box>

      {/* College Information */}
      <Typography fontWeight={600} mb={1}>
        College Information
      </Typography>

      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={3} mb={4}>
        <Info label="ID Number" value={id} />
        <Info
          label="College Name"
          value="Francis Xavier Engineering College"
        />
        <Info label="External Training" value="Yes" />
        <Info label="Placement" value="Satisfied" />
        <Info label="Coding Platforms" value="Yes" />
        <Info label="Observation" value="Weak in both Skills" />
      </Box>

      {/* POC */}
      <Typography fontWeight={600} mb={1}>
        Point Of Contact
      </Typography>

      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={3} mb={4}>
        <Info label="Name" value="Alex" />
        <Info label="Role" value="Madurai" />
        <Info label="Mail Id" value="alex@gmail.com" />
        <Info label="Phone Number" value="2346534688" />
      </Box>

      {/* Buttons */}
      <Box display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Update</Button>
      </Box>
    </Box>
  );
}

function Info({ label, value }) {
  return (
    <Box>
      <Typography fontSize={12} color="text.secondary">
        {label}
      </Typography>
      <Typography fontSize={14} fontWeight={500}>
        {value}
      </Typography>
    </Box>
  );
}
