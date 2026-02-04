import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "symposium_students";

const SymposiumStudents = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [addAnchor, setAddAnchor] = useState(null);
  const [rowAnchor, setRowAnchor] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [openBulk, setOpenBulk] = useState(false);

  const collegeName = "Government College of Engineering"; // 🔥 breadcrumb
  
  /* LOAD */
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setStudents(saved);
  }, []);

  /* SAVE */
  const saveStudents = (data) => {
    setStudents(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  /* BULK UPLOAD */
  const handleBulkFile = (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const wb = XLSX.read(e.target.result, { type: "binary" });
      const sheet = wb.Sheets[wb.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(sheet);

      const formatted = data.map((d) => ({
        name: d["Student name"] || "",
        department: d["Department"] || "",
        domain: d["Domain"] || "",
        trainer: d["Trainer"] || "",
        techstack: d["Techstack"] || "",
        year: d["Year"] || "",
        startDate: d["Start Date"] || "",
        endDate: d["End Date"] || "",
        collegeName, // 🔥 pass college name to details page
      }));

      saveStudents([...students, ...formatted]);
      setOpenBulk(false);
    };

    reader.readAsBinaryString(file);
  };

  /* REMOVE */
  const handleRemove = () => {
    const updated = students.filter(
      (_, idx) => idx !== selectedIndex
    );
    saveStudents(updated);
    setRowAnchor(null);
  };

  return (
    <Box px={3} py={2}>
      {/* 🔥 BREADCRUMB */}
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
        <span style={{ color: "#212121" }}>
          {collegeName}
        </span>
      </Typography>

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontSize={22} fontWeight={600}>
          Symposium
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={(e) => setAddAnchor(e.currentTarget)}
        >
          Add Student
        </Button>

        <Menu
          anchorEl={addAnchor}
          open={Boolean(addAnchor)}
          onClose={() => setAddAnchor(null)}
        >
          <MenuItem
            onClick={() => {
              setAddAnchor(null);
              navigate(
                "/activities/academic/symposium/student/add"
              );
            }}
          >
            Single Student
          </MenuItem>

          <MenuItem
            onClick={() => {
              setAddAnchor(null);
              setOpenBulk(true);
            }}
          >
            Multiple Students
          </MenuItem>
        </Menu>
      </Box>

      {/* TABLE */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "#eaf2fb" }}>
            <TableRow>
              <TableCell>S.no</TableCell>
              <TableCell>Student name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Domain</TableCell>
              <TableCell>Trainer</TableCell>
              <TableCell>Techstack</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {students.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} align="center">
                  No students added
                </TableCell>
              </TableRow>
            ) : (
              students.map((s, i) => (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.department}</TableCell>
                  <TableCell>{s.domain}</TableCell>
                  <TableCell>{s.trainer}</TableCell>
                  <TableCell>{s.techstack}</TableCell>
                  <TableCell>{s.year}</TableCell>
                  <TableCell>{s.startDate}</TableCell>
                  <TableCell>{s.endDate}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={(e) => {
                        setRowAnchor(e.currentTarget);
                        setSelectedIndex(i);
                      }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* THREE DOT MENU */}
      <Menu
        anchorEl={rowAnchor}
        open={Boolean(rowAnchor)}
        onClose={() => setRowAnchor(null)}
      >
        <MenuItem
          onClick={() => {
            setRowAnchor(null);
            navigate(
              "/activities/academic/symposium/student/edit",
              { state: students[selectedIndex] }
            );
          }}
        >
          <EditIcon fontSize="small" sx={{ mr: 1 }} />
          Edit
        </MenuItem>

        <MenuItem
          onClick={() => {
            setRowAnchor(null);
            navigate(
              "/activities/academic/symposium/student/details",
              { state: students[selectedIndex] }
            );
          }}
        >
          <VisibilityIcon fontSize="small" sx={{ mr: 1 }} />
          View
        </MenuItem>

        <MenuItem sx={{ color: "red" }} onClick={handleRemove}>
          <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
          Remove
        </MenuItem>
      </Menu>

      {/* BULK UPLOAD */}
      <Dialog open={openBulk} onClose={() => setOpenBulk(false)}>
        <Box p={4}>
          <Typography fontWeight={600} mb={2}>
            Upload Students
          </Typography>

          <input
            type="file"
            accept=".xlsx,.csv"
            onChange={(e) =>
              handleBulkFile(e.target.files[0])
            }
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default SymposiumStudents;