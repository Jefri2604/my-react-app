import { Box, Typography } from "@mui/material";

export default function OutcomesBreadcrumb() {
  return (
    <Box sx={{ mb: 1.5 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography fontSize={13} color="#6b7280">
          Analysis
        </Typography>

        <Typography color="#9ca3af">•</Typography>

        <Typography fontSize={13} fontWeight={600} color="#111827">
          Outcomes
        </Typography>

        <Typography color="#9ca3af">•</Typography>

        <Typography
          fontSize={13}
          color="#9ca3af"
          sx={{ filter: "blur(0.4px)" }}
        >
          Government College of Engineering
        </Typography>
      </Box>
    </Box>
  );
}
