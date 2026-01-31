import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AlertPopup() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/alerts");
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 10,
        right: 10,
        width: 320,
        bgcolor: "#fff",
        borderRadius: 2,
        boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
        p: 2,
        zIndex: 2000,
      }}
    >
      <Typography fontWeight={600} mb={1}>
        Alert and Reminders
      </Typography>

      <Typography fontSize={13}>🔴 3 MoU's expired soon</Typography>
      <Typography fontSize={13}>🔵 3 interns finishing in 7 days</Typography>
      <Typography fontSize={13} mb={1}>
        🔵 2 interns close there soon
      </Typography>

      <Button size="small" onClick={handleViewAll}>
        View All
      </Button>
    </Box>
  );
}
