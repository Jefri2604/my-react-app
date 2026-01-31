import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "../components/Header"; // 👈 ALERT HEADER
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";



export default function DashboardLayout() {
  return (

    
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        overflow: "hidden", // 🔥 parent never scrolls
      }}
    >
      {/* ================= SIDEBAR ================= */}
      <Navigation />

      {/* ================= RIGHT SIDE ================= */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* ================= HEADER (WITH ALERT POPOVER) ================= */}
        <Header />

        {/* ================= PAGE CONTENT (ONLY SCROLL HERE) ================= */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 3,
            bgcolor: "#f5f6f8",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>



  );
}
