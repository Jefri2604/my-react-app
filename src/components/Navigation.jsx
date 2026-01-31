import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  Dashboard,
  Folder,
  Event,
  Analytics,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/icanio.png";

export default function Navigation() {
  const location = useLocation();

  const [openActivities, setOpenActivities] = useState(true);
  const [openAcademic, setOpenAcademic] = useState(true);
  const [openCareer, setOpenCareer] = useState(true);
  const [openSkill, setOpenSkill] = useState(true);
  const [openAnalysis, setOpenAnalysis] = useState(true);

  const isActive = (path) => location.pathname.startsWith(path);

  const itemStyle = (active) => ({
    bgcolor: active ? "#eef4ff" : "transparent",
    borderRight: active ? "3px solid #2563eb" : "none",
    color: active ? "#2563eb" : "#111827",
    "&:hover": {
      bgcolor: "#f1f5f9",
    },
  });

  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#fff",
        borderRight: "1px solid #e5e7eb",
        minHeight: "100vh",
      }}
    >
      {/* ================= LOGO ================= */}
      <Box
        sx={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #eee",
        }}
      >
        <Box component="img" src={logo} alt="ICANIO" sx={{ height: 40 }} />
      </Box>

      <List sx={{ p: 2 }}>
        {/* ================= DASHBOARD ================= */}
        <ListItemButton
          component={NavLink}
          to="/dashboard"
          sx={itemStyle(isActive("/dashboard"))}
        >
          <Dashboard fontSize="small" sx={{ mr: 1 }} />
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        {/* ================= PROJECTS ================= */}
        <ListItemButton
          component={NavLink}
          to="/projects"
          sx={itemStyle(isActive("/projects"))}
        >
          <Folder fontSize="small" sx={{ mr: 1 }} />
          <ListItemText primary="Projects" />
        </ListItemButton>

        {/* ================= ACTIVITIES ================= */}
        <ListItemButton
          onClick={() => setOpenActivities(!openActivities)}
          sx={itemStyle(isActive("/activities"))}
        >
          <Event fontSize="small" sx={{ mr: 1 }} />
          <ListItemText primary="Activities" />
          {openActivities ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openActivities}>
          <List disablePadding>
            {/* Academic Event */}
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => setOpenAcademic(!openAcademic)}
            >
              <ListItemText primary="Academic Event" />
              {openAcademic ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openAcademic}>
              {["symposium", "guest-lecture", "workshop", "programme"].map(
                (item) => (
                  <ListItemButton
                    key={item}
                    component={NavLink}
                    to={`/activities/academic/${item}`}
                    sx={{
                      pl: 6,
                      ...itemStyle(
                        isActive(`/activities/academic/${item}`)
                      ),
                    }}
                  >
                    <ListItemText
                      primary={`• ${item.replace("-", " ")}`}
                      primaryTypographyProps={{ fontSize: 13 }}
                    />
                  </ListItemButton>
                )
              )}
            </Collapse>

            {/* Career Centre */}
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => setOpenCareer(!openCareer)}
            >
              <ListItemText primary="Career Centre" />
              {openCareer ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openCareer}>
              {["on-campus", "placement", "internship"].map((item) => (
                <ListItemButton
                  key={item}
                  component={NavLink}
                  to={`/activities/career/${item}`}
                  sx={{
                    pl: 6,
                    ...itemStyle(
                      isActive(`/activities/career/${item}`)
                    ),
                  }}
                >
                  <ListItemText
                    primary={`• ${item.replace("-", " ")}`}
                    primaryTypographyProps={{ fontSize: 13 }}
                  />
                </ListItemButton>
              ))}
            </Collapse>

            {/* Skill Development */}
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => setOpenSkill(!openSkill)}
            >
              <ListItemText primary="Skill Development" />
              {openSkill ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openSkill}>
              {["professional", "value-added", "hackathon"].map((item) => (
                <ListItemButton
                  key={item}
                  component={NavLink}
                  to={`/activities/skill/${item}`}
                  sx={{
                    pl: 6,
                    ...itemStyle(
                      isActive(`/activities/skill/${item}`)
                    ),
                  }}
                >
                  <ListItemText
                    primary={`• ${item.replace("-", " ")}`}
                    primaryTypographyProps={{ fontSize: 13 }}
                  />
                </ListItemButton>
              ))}
            </Collapse>

            {/* Center of Excellence */}
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Center of Excellence" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* ================= ANALYSIS ================= */}
        <ListItemButton
          onClick={() => setOpenAnalysis(!openAnalysis)}
          sx={itemStyle(isActive("/analysis"))}
        >
          <Analytics fontSize="small" sx={{ mr: 1 }} />
          <ListItemText primary="Analysis" />
          {openAnalysis ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openAnalysis}>
          <List disablePadding>
            {[
              { label: "Outcomes", path: "/analysis/outcomes" },
              { label: "Expectations", path: "/analysis/expectations" },
              { label: "Finance", path: "/analysis/finance" },
              { label: "Attendance", path: "/analysis/attendance" },
            ].map((item) => (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={item.path}
                sx={{
                  pl: 4,
                  ...itemStyle(isActive(item.path)),
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 14 }}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
