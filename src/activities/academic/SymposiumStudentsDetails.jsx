import { Box, Typography, Paper, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const InfoItem = ({ label, value }) => (
  <Box>
    <Typography
      sx={{
        fontSize: 12,
        color: "#9e9e9e",
        mb: "2px",
      }}
    >
      {label}
    </Typography>
    <Typography
      sx={{
        fontSize: 14,
        fontWeight: 500,
        color: "#212121",
      }}
    >
      {value || "-"}
    </Typography>
  </Box>
);

const SymposiumStudentsDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // safety check
  if (!state) {
    return <Typography p={3}>No student data found</Typography>;
  }

  const collegeName =
    state.collegeName || "Selected College";

  return (
    <Box px={3} py={2}>
      {/* 🔥 BREADCRUMB WITH LINKS */}
      <Typography
        sx={{
          fontSize: 13,
          color: "#9e9e9e",
          mb: 1,
        }}
      >
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/activities/academic/symposium")}
        >
          Activities
        </span>
        &nbsp;&gt;&nbsp;
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/activities/academic/symposium")}
        >
          Symposium
        </span>
        &nbsp;&gt;&nbsp;
        <span
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate("/activities/academic/symposium/students")
          }
        >
          {collegeName}
        </span>
        &nbsp;&gt;&nbsp;
        <span
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate("/activities/academic/symposium/students")
          }
        >
          Student
        </span>
        &nbsp;&gt;&nbsp;
        <span style={{ color: "#212121" }}>
          Details
        </span>
      </Typography>

      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography fontSize={22} fontWeight={600}>
          Details
        </Typography>

        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={() =>
            navigate(
              "/activities/academic/symposium/student/edit",
              { state }
            )
          }
        >
          Edit
        </Button>
      </Box>

      {/* STUDENT INFORMATION CARD */}
      <Paper
        sx={{
          p: 3,
          borderRadius: 2,
          backgroundColor: "#fafafa",
        }}
      >
        <Typography
          fontWeight={600}
          mb={2}
          fontSize={15}
        >
          Student Information
        </Typography>

        <Box
          display="grid"
          gridTemplateColumns="repeat(5, 1fr)"
          columnGap={4}
          rowGap={3}
        >
          <InfoItem
            label="Student Name"
            value={state.name}
          />
          <InfoItem
            label="Department"
            value={state.department}
          />
          <InfoItem
            label="Domain"
            value={state.domain}
          />
          <InfoItem
            label="Trainer"
            value={state.trainer}
          />
          <InfoItem
            label="Techstack"
            value={state.techstack}
          />

          <InfoItem label="Year" value={state.year} />
          <InfoItem
            label="Start date"
            value={state.startDate}
          />
          <InfoItem
            label="End date"
            value={state.endDate}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default SymposiumStudentsDetails;