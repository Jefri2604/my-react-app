import { useState, useEffect } from "react";
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
  IconButton,
  Pagination,
  Dialog,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

// Icons
import UploadIcon from "@mui/icons-material/Upload";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudOffIcon from "@mui/icons-material/CloudOff";

/* ================= CONSTANTS ================= */
const ROWS_PER_PAGE = 10;

/* ================= ID GENERATOR ================= */
let idCounter = 1000000;
const generateId = () => {
  idCounter += 1;
  return idCounter.toString(); // 7 digit numeric
};

const Symposium = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);

  // upload menu
  const [uploadAnchor, setUploadAnchor] = useState(null);

  // row menu
  const [rowAnchor, setRowAnchor] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  // bulk upload modal
  const [openUpload, setOpenUpload] = useState(false);
  const [uploadStep, setUploadStep] = useState("select");

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("symposium_rows")) || [];
    setRows(stored);
  }, []);

  /* ================= SAVE DATA ================= */
  const saveRows = (data) => {
    localStorage.setItem("symposium_rows", JSON.stringify(data));
    setRows(data);
  };

  /* ================= BULK UPLOAD ================= */
  const handleBulkFile = (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const workbook = XLSX.read(e.target.result, { type: "binary" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(sheet);

       
        const formatted = data.map((item) => {
          const studentsKey = Object.keys(item).find(
            (key) =>
              key.toLowerCase().replace(/\s+/g, "") === "noofstudents"
          );

          return {
            idNo: generateId(),
            college: item["College name"] || item["College Name"],
            students: studentsKey ? item[studentsKey] : "",
            location: item["Location"],
            startDate: item["Start Date"],
            endDate: item["End Date"],
          };
        });

        const updated = [...rows, ...formatted];
        saveRows(updated);
        setUploadStep("success");
      } catch (err) {
        setUploadStep("error");
      }
    };

    reader.readAsBinaryString(file);
  };

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(rows.length / ROWS_PER_PAGE);
  const paginatedRows = rows.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

  return (
    <Box>
      {/* ================= HEADER ================= */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontSize={22} fontWeight={600}>
          Symposium
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={(e) => setUploadAnchor(e.currentTarget)}
        >
          Upload File
        </Button>

        <Menu
          anchorEl={uploadAnchor}
          open={Boolean(uploadAnchor)}
          onClose={() => setUploadAnchor(null)}
        >
          <MenuItem
            onClick={() => {
              setUploadAnchor(null);
              navigate("/activities/academic/symposium/single");
            }}
          >
            <UploadIcon fontSize="small" sx={{ mr: 1 }} />
            Single file
          </MenuItem>

          <MenuItem
            onClick={() => {
              setUploadAnchor(null);
              setOpenUpload(true);
              setUploadStep("select");
            }}
          >
            <UploadIcon fontSize="small" sx={{ mr: 1 }} />
            Bulk File
          </MenuItem>
        </Menu>
      </Box>

      {/* ================= TABLE ================= */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "#eaf2fb" }}>
            <TableRow>
              <TableCell><b>Id no</b></TableCell>
              <TableCell><b>College name</b></TableCell>
              <TableCell><b>No of students</b></TableCell>
              <TableCell><b>Location</b></TableCell>
              <TableCell><b>Start Date</b></TableCell>
              <TableCell><b>End Date</b></TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              paginatedRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ color: "#1976d2" }}>
                    {row.idNo}
                  </TableCell>
                  <TableCell
  sx={{ color: "#1976d2", cursor: "pointer" }}
  onClick={() =>
    navigate(
      "/activities/academic/symposium/students",
      {
        state: {
          collegeName: row.college,
          collegeId: row.idNo,
        },
      }
    )
  }
>
  {row.college}
</TableCell>
                  <TableCell>{row.students}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.endDate}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={(e) => {
                        setRowAnchor(e.currentTarget);
                        setSelectedRow(row);
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

      {/* ================= PAGINATION ================= */}
      {rows.length > ROWS_PER_PAGE && (
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        </Box>
      )}

      {/* ================= THREE DOT MENU ================= */}
      <Menu
        anchorEl={rowAnchor}
        open={Boolean(rowAnchor)}
        onClose={() => setRowAnchor(null)}
      >
       <MenuItem
  onClick={() => {
    setRowAnchor(null);
    navigate(
      "/activities/academic/symposium/edit",
      { state: selectedRow }
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
      "/activities/academic/symposium/view",
      { state: selectedRow }
    );
  }}
>
  <VisibilityIcon fontSize="small" sx={{ mr: 1 }} />
  View
</MenuItem>

        <MenuItem
          sx={{ color: "red" }}
          onClick={() => {
            const updated = rows.filter(
              (item) => item.idNo !== selectedRow.idNo
            );
            saveRows(updated);
            setRowAnchor(null);
          }}
        >
          <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
          Remove
        </MenuItem>
      </Menu>

      {/* ================= BULK UPLOAD MODAL ================= */}
      <Dialog open={openUpload} onClose={() => setOpenUpload(false)}>
        <Box p={4} textAlign="center" width={380}>
          {uploadStep === "select" && (
            <>
              <UploadIcon sx={{ fontSize: 48, color: "#1976d2" }} />
              <Typography mt={2}>
                Drop or select Excel / CSV file
              </Typography>

              <input
                type="file"
                accept=".xlsx,.csv"
                style={{ marginTop: 16 }}
                onChange={(e) => handleBulkFile(e.target.files[0])}
              />
            </>
          )}

          {uploadStep === "success" && (
            <>
              <CheckCircleIcon
                sx={{ fontSize: 48, color: "green" }}
              />
              <Typography mt={2} color="green">
                Successfully Uploaded!
              </Typography>
            </>
          )}

          {uploadStep === "error" && (
            <>
              <CloudOffIcon
                sx={{ fontSize: 48, color: "red" }}
              />
              <Typography mt={2} color="red">
                Upload Failed
              </Typography>
              <Button onClick={() => setUploadStep("select")}>
                Try again
              </Button>
            </>
          )}
        </Box>
      </Dialog>
    </Box>
  );
};


export default Symposium;