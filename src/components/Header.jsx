import {
  Box,
  Typography,
  IconButton,
  Badge,
  Popover,
  Divider,
  InputBase,   
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

/* ================= ALERT DATA ================= */
const alerts = [
  {
    type: "danger",
    title: "3 MoU’s expired soon",
    desc1: "PSN College of Eng. – Expires in 10 days",
    desc2: "Government college – Expires in 10 days",
    time: "3 min ago",
  },
  {
    type: "info",
    title: "3 interns are finishing their tenure",
    time: "7 min ago",
  },
  {
    type: "info",
    title: "2 interns close there soon",
    time: "7 min ago",
  },
];

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleViewAll = () => {
    setAnchorEl(null);
    navigate("/alerts");
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        px: 3,
        py: 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
      }}
    >
      <Box />

      {/* ========== CENTER : SEARCH BAR ========== */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          backdropFilter: "blur(6px)",
          px: 2,
          py: 0.6,
          borderRadius: 2,
          width: 320,
          marginLeft: "-500px",
          border: "1px solid #e5e7eb",
        }}
      >
        <SearchIcon sx={{   color: "#9ca3af", mr: 1 }} />
        <InputBase
          placeholder="Search colleges"
          sx={{ fontSize: 14, width: "100%" }}
        />
      </Box>

      {/* RIGHT ICON GROUP */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* 🔔 Notification */}
        <IconButton size="small" onClick={(e) => setAnchorEl(e.currentTarget)}>
          <Badge badgeContent={3} color="primary">
            <NotificationsIcon sx={{ color: "#000" }} />
          </Badge>
        </IconButton>

        {/* 👤 Profile Text */}
        <Box sx={{ textAlign: "right" }}>
          <Typography fontSize={14} fontWeight={500}>
            Profile name
          </Typography>
          <Typography fontSize={12} color="text.secondary">
            arul@gmail.com
          </Typography>
        </Box>

        {/* 👤 Profile Icon */}
        <AccountCircleIcon sx={{ fontSize: 40, color: "#000" }} />
      </Box>

      {/* ================= ALERT POPOVER ================= */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            width: 320,
            borderRadius: 2,
            p: 2,
            mt: 1,
          },
        }}
      >
        <Typography fontWeight={600} mb={1}>
          Alerts & Reminders
        </Typography>

        <Divider sx={{ mb: 1 }} />

        {alerts.map((a, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              gap: 1.5,
              p: 1,
              borderRadius: 1,
              "&:hover": { bgcolor: "#f9fafb" },
            }}
          >
            {a.type === "danger" ? (
              <ErrorOutlineIcon sx={{ color: "#dc2626", fontSize: 20 }} />
            ) : (
              <InfoOutlinedIcon sx={{ color: "#2563eb", fontSize: 20 }} />
            )}

            <Box>
              <Typography fontSize={13} fontWeight={500}>
                {a.title}
              </Typography>

              {a.desc1 && (
                <Typography fontSize={12} color="text.secondary">
                  {a.desc1}
                </Typography>
              )}
              {a.desc2 && (
                <Typography fontSize={12} color="text.secondary">
                  {a.desc2}
                </Typography>
              )}

              <Typography fontSize={11} color="text.secondary" mt={0.5}>
                {a.time}
              </Typography>
            </Box>
          </Box>
        ))}

        <Divider sx={{ my: 1 }} />

        <Typography
          fontSize={13}
          color="primary.main"
          textAlign="center"
          sx={{ cursor: "pointer" }}
          onClick={handleViewAll}
        >
          View All
        </Typography>
      </Popover>
    </Box>
  );
}

