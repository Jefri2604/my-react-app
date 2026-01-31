import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UploadIcon from "@mui/icons-material/Upload";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import FolderZipOutlinedIcon from "@mui/icons-material/FolderZipOutlined";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OutcomesBreadcrumb from "../../components/OutcomesBreadcrumb";

/* ================= TABLE DATA (3 ROWS) ================= */
const rows = [
  {
    id: "1234566",
    college: "Francis Xavier Engineering College",
    training: "Yes",
    placement: "Not Satisfied",
    coding: "Yes",
    observation: "Weak in both Skills",
  },
  {
    id: "1234567",
    college: "Francis Xavier Engineering College",
    training: "Yes",
    placement: "Satisfied",
    coding: "Yes",
    observation: "Weak in both Skills",
  },
  {
    id: "1234568",
    college: "Francis Xavier Engineering College",
    training: "No",
    placement: "Not Satisfied",
    coding: "No",
    observation: "Weak in both Skills",
  },
];

export default function Outcomes() {
  const navigate = useNavigate();

  /* SCROLL FIX — PAGE LOAD TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ===== Upload Menu State ===== */
  const [uploadAnchor, setUploadAnchor] = useState(null);

  /* ===== Row Menu State ===== */
  const [rowAnchor, setRowAnchor] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  /* ===== Upload Menu Handlers ===== */
  const openUploadMenu = (e) => {
    setUploadAnchor(e.currentTarget);
  };

  const closeUploadMenu = () => {
    setUploadAnchor(null);
  };

  /* ===== Row Menu Handlers ===== */
  const openRowMenu = (e, row) => {
    setRowAnchor(e.currentTarget);
    setSelectedRow(row);
  };

  const closeRowMenu = () => {
    setRowAnchor(null);
    setSelectedRow(null);
  };

  return (
    <Box bgcolor="#fff" borderRadius={2} p={2.5}>
      {/* ================= HEADER ================= */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontSize={18} fontWeight={600}>
          Outcomes
        </Typography>

        <Button
          variant="contained"
          startIcon={<UploadIcon />}
          onClick={openUploadMenu}
        >
          Upload File
        </Button>
      </Box>

      {/* ================= UPLOAD FILE MENU ================= */}
      <Menu
        anchorEl={uploadAnchor}
        open={Boolean(uploadAnchor)}
        onClose={closeUploadMenu}
        PaperProps={{ sx: { width: 180, borderRadius: 2 } }}
      >
        <MenuItem onClick={closeUploadMenu}>
          <InsertDriveFileOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          Single file
        </MenuItem>

        <MenuItem onClick={closeUploadMenu}>
          <FolderZipOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          Bulk file
        </MenuItem>
      </Menu>

      {/* ================= TABLE ================= */}
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "#eef4fb" }}>
            <TableCell>Id no</TableCell>
            <TableCell>College name</TableCell>
            <TableCell>External Training</TableCell>
            <TableCell>Placement</TableCell>
            <TableCell>Coding Platforms</TableCell>
            <TableCell>Observation</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell sx={{ color: "#2563eb", cursor: "pointer" }}>
                {r.id}
              </TableCell>
              <TableCell>{r.college}</TableCell>
              <TableCell>{r.training}</TableCell>
              <TableCell>{r.placement}</TableCell>
              <TableCell>{r.coding}</TableCell>
              <TableCell>{r.observation}</TableCell>
              <TableCell align="right">
                <IconButton onClick={(e) => openRowMenu(e, r)}>
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* ================= ROW 3-DOT MENU ================= */}
      <Menu
        anchorEl={rowAnchor}
        open={Boolean(rowAnchor)}
        onClose={closeRowMenu}
        PaperProps={{ sx: { width: 160, borderRadius: 2 } }}
      >
        <MenuItem onClick={closeRowMenu}>
          <EditIcon fontSize="small" sx={{ mr: 1 }} />
          Edit
        </MenuItem>

        <MenuItem
          onClick={() => {
            navigate(`/analysis/outcomes/${selectedRow?.id}`);
            closeRowMenu();
          }}
        >
          <VisibilityIcon fontSize="small" sx={{ mr: 1 }} />
          View
        </MenuItem>


        <MenuItem
          sx={{ color: "#000" }}
          onClick={closeRowMenu}
        >
          <DeleteOutlineIcon fontSize="small" sx={{ mr: 1 }} />
          Remove
        </MenuItem>
      </Menu>
    </Box>
  );
}
