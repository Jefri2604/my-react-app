import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Select,
  Chip,
  TextField,
  InputAdornment,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import UploadIcon from "@mui/icons-material/Upload";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";

// ---------------- SAMPLE DATA ----------------
const initialRows = [
  { id: 1, idNo: "123456", college: "Francis Xavier Engineering College", location: "Madurai", contact: "arul@gmail.com", start: "20.05.2026", end: "20.05.2027", status: "In progress" },
  { id: 2, idNo: "123456", college: "Government College of Engineering", location: "Madurai", contact: "arul@gmail.com", start: "20.05.2026", end: "20.05.2027", status: "Completed" },
  { id: 3, idNo: "123456", college: "PSN College of Engineering and Technology", location: "Madurai", contact: "arul@gmail.com", start: "20.05.2026", end: "20.05.2027", status: "Dropped" },
];

export default function Projects() {
  const navigate = useNavigate();

  const [tab, setTab] = useState(0);
  const [rows, setRows] = useState(initialRows);

  const [uploadAnchor, setUploadAnchor] = useState(null);
  const [rowMenuAnchor, setRowMenuAnchor] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const tabs = ["All", "In progress", "Completed", "Dropped"];

  const filteredRows =
    tabs[tab] === "All" ? rows : rows.filter((r) => r.status === tabs[tab]);

  const handleStatusChange = (id, value) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: value } : r))
    );
  };

  const statusStyles = (status) => {
    if (status === "Completed")
      return { bg: "#DCFCE7", color: "#166534", border: "#86EFAC" };
    if (status === "Dropped")
      return { bg: "#FEE2E2", color: "#991B1B", border: "#FCA5A5" };
    return { bg: "#DBEAFE", color: "#1D4ED8", border: "#93C5FD" };
  };

  return (
    <Box sx={{ bgcolor: "#fff", borderRadius: 3, p: 2.5, boxShadow: "0px 4px 20px rgba(0,0,0,0.05)" }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
        <Typography sx={{ fontSize: 20, fontWeight: 600 }}>Projects</Typography>

        <Button
          variant="contained"
          startIcon={<UploadIcon />}
          sx={{ textTransform: "none", borderRadius: 2, fontSize: 12 }}
          onClick={(e) => setUploadAnchor(e.currentTarget)}
        >
          Upload File
        </Button>

        <Menu anchorEl={uploadAnchor} open={Boolean(uploadAnchor)} onClose={() => setUploadAnchor(null)}>
          <MenuItem>Single file</MenuItem>
          <MenuItem>Bulk upload</MenuItem>
        </Menu>
      </Box>

      {/* Tabs + Search */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          {tabs.map((t) => (
            <Tab key={t} label={t.toUpperCase()} sx={{ fontSize: 12, minHeight: 36 }} />
          ))}
        </Tabs>

        <TextField
          size="small"
          placeholder="Search for college"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
            style: { fontSize: 12 },
          }}
        />
      </Box>

      {/* Table Header */}
      <Box sx={{ display: "grid", gridTemplateColumns: "0.8fr 2.8fr 1.2fr 2fr 1.2fr 1.2fr 1.3fr 0.4fr", bgcolor: "#EAF2FA", p: 1, fontSize: 12, fontWeight: 600, borderRadius: 1 }}>
        <div>Id no</div>
        <div>College name</div>
        <div>Location</div>
        <div>Contact</div>
        <div>Start date</div>
        <div>End date</div>
        <div>Status</div>
        <div></div>
      </Box>

      {/* Table Rows */}
      {filteredRows.map((r) => (
        <Box
          key={r.id}
          sx={{
            display: "grid",
            gridTemplateColumns: "0.8fr 2.8fr 1.2fr 2fr 1.2fr 1.2fr 1.3fr 0.4fr",
            p: 1,
            borderBottom: "1px solid #f0f0f0",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <div style={{ color: "#2563eb", fontWeight: 500 }}>{r.idNo}</div>
          <div>{r.college}</div>
          <div>{r.location}</div>
          <div>{r.contact}</div>
          <div>{r.start}</div>
          <div>{r.end}</div>

          <Select
            size="small"
            value={r.status}
            onChange={(e) => handleStatusChange(r.id, e.target.value)}
            renderValue={(value) => {
              const s = statusStyles(value);
              return (
                <Chip
                  label={value}
                  size="small"
                  sx={{
                    fontSize: 11,
                    bgcolor: s.bg,
                    color: s.color,
                    border: `1px solid ${s.border}`,
                    fontWeight: 500,
                  }}
                />
              );
            }}
          >
            <MenuItem value="In progress">In progress</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Dropped">Dropped</MenuItem>
          </Select>

          <IconButton
            size="small"
            onClick={(e) => {
              setRowMenuAnchor(e.currentTarget);
              setSelectedRow(r);
            }}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>
      ))}

      {/* Row action menu */}
      <Menu
        anchorEl={rowMenuAnchor}
        open={Boolean(rowMenuAnchor)}
        onClose={() => setRowMenuAnchor(null)}
      >
        <MenuItem
          onClick={() => {
            navigate("/projects/view", { state: selectedRow });
            setRowMenuAnchor(null);
          }}
        >
          <VisibilityIcon sx={{ mr: 1 }} fontSize="small" />
          View
        </MenuItem>

        <MenuItem
          onClick={() => {
            console.log("Download", selectedRow);
            setRowMenuAnchor(null);
          }}
        >
          <DownloadIcon sx={{ mr: 1 }} fontSize="small" />
          Download
        </MenuItem>

        <MenuItem
          onClick={() => {
            navigate("/projects/edit", { state: selectedRow });
            setRowMenuAnchor(null);
          }}
        >
          <EditIcon sx={{ mr: 1 }} fontSize="small" />
          Edit
        </MenuItem>
      </Menu>
    </Box>
  );
}
