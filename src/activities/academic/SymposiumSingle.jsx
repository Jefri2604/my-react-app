import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  IconButton,
  Dialog,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const SymposiumSingle = () => {
  const navigate = useNavigate();

  /* ================= FORM STATES ================= */
  const [college, setCollege] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("In progress");
  const [file, setFile] = useState(null);

  /* ================= POINT OF CONTACT ================= */
  const [pocName, setPocName] = useState("");
  const [pocRole, setPocRole] = useState("");
  const [pocEmail, setPocEmail] = useState("");
  const [pocPhone, setPocPhone] = useState("");

  /* ================= UPLOAD MODAL ================= */
  const [uploadOpen, setUploadOpen] = useState(false);
  const [uploadStep, setUploadStep] = useState("select");
  const fileInputRef = useRef(null);

  /* ================= 7 DIGIT ID ================= */
  const generateIdNo = () =>
    Math.floor(1000000 + Math.random() * 9000000).toString();

  const handleBrowse = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);

    setTimeout(() => {
      setUploadStep(Math.random() > 0.2 ? "success" : "error");
    }, 1000);
  };

  /* ================= SAVE ================= */
  const handleSave = () => {
    const newRow = {
      idNo: generateIdNo(),
      college,
      location,
      contact,
      email,
      start: startDate,
      end: endDate,
      status,
      pointOfContact: {
        name: pocName,
        role: pocRole,
        email: pocEmail,
        phone: pocPhone,
      },
    };

    const existing =
      JSON.parse(localStorage.getItem("symposium_rows")) || [];

    localStorage.setItem(
      "symposium_rows",
      JSON.stringify([...existing, newRow])
    );

    navigate("/activities/academic/symposium");
  };

  return (
    <Box>
      {/* ================= HEADER / BREADCRUMB ================= */}
      <Box
        sx={{
          backgroundColor: "#F5F7FA",
          px: 3,
          py: 2,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Breadcrumbs separator="•" sx={{ fontSize: 13 }}>
          {/* Activities */}
          <Link
            underline="hover"
            color="inherit"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/activities")}
          >
            Activities
          </Link>

          {/* Symposium */}
          <Link
            underline="hover"
            color="inherit"
            sx={{ cursor: "pointer" }}
            onClick={() =>
              navigate("/activities/academic/symposium")
            }
          >
            Symposium
          </Link>

          {/* College name */}
          <Typography color="text.secondary">
            {college || "Francis Xavier Engineering College"}
          </Typography>

          {/* Add */}
          <Typography color="text.primary" fontWeight={600}>
            Add
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* ================= CONTENT ================= */}
      <Box sx={{ p: 2 }}>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          {/* COLLEGE INFORMATION */}
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography fontWeight={600}>
              College Information
            </Typography>
            <IconButton size="small">
              <DeleteOutlineIcon />
            </IconButton>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="College name"
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Contact number"
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Mail Id"
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
          </Grid>

          {/* STATUS */}
          <Box mt={3}>
            <Typography fontWeight={600}>Status</Typography>
            <RadioGroup
              row
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <FormControlLabel value="In progress" control={<Radio />} label="In progress" />
              <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
              <FormControlLabel value="Dropped" control={<Radio />} label="Dropped" />
            </RadioGroup>
          </Box>

          {/* DOCUMENT */}
          <Box mt={3}>
            <Typography fontWeight={600}>Document</Typography>

            <Box
              onClick={() => {
                setUploadOpen(true);
                setUploadStep("select");
              }}
              sx={{
                border: "1px dashed #bdbdbd",
                borderRadius: 2,
                py: 3,
                mt: 1,
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: "#fafafa",
              }}
            >
              <CloudUploadOutlinedIcon sx={{ fontSize: 32, color: "#1976d2" }} />
              <Typography color="primary" fontWeight={600}>
                UPLOAD DOCUMENT
              </Typography>
            </Box>

            {file && (
              <Typography mt={1} fontSize={12} color="green">
                ● uploaded ({file.name})
              </Typography>
            )}
          </Box>

          {/* POINT OF CONTACT */}
          <Box mt={4}>
            <Typography fontWeight={600} mb={1}>
              Point of contact
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField
                  placeholder="Name"
                  fullWidth
                  variant="filled"
                  value={pocName}
                  onChange={(e) => setPocName(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  placeholder="Role"
                  fullWidth
                  variant="filled"
                  value={pocRole}
                  onChange={(e) => setPocRole(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  placeholder="Mail Id"
                  fullWidth
                  variant="filled"
                  value={pocEmail}
                  onChange={(e) => setPocEmail(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  placeholder="Phone no"
                  fullWidth
                  variant="filled"
                  value={pocPhone}
                  onChange={(e) => setPocPhone(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>

        {/* FOOTER */}
        <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Upload
          </Button>
        </Box>
      </Box>

      {/* ================= UPLOAD DIALOG ================= */}
      <Dialog open={uploadOpen} onClose={() => setUploadOpen(false)}>
        <Box sx={{ p: 4, textAlign: "center", width: 360 }}>
          <IconButton
            sx={{ position: "absolute", right: 10, top: 10 }}
            onClick={() => setUploadOpen(false)}
          >
            <CloseIcon />
          </IconButton>

          {uploadStep === "select" && (
            <>
              <CloudUploadOutlinedIcon sx={{ fontSize: 40 }} />
              <Typography mt={2} fontWeight={600}>
                Drop or select file
              </Typography>
              <Typography fontSize={13}>
                Click to{" "}
                <span
                  style={{ color: "#1976d2", cursor: "pointer" }}
                  onClick={handleBrowse}
                >
                  browse
                </span>
              </Typography>
              <input
                hidden
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
              />
            </>
          )}

          {uploadStep === "success" && (
            <>
              <CheckCircleIcon sx={{ fontSize: 40, color: "green" }} />
              <Typography mt={2} fontWeight={700} color="green">
                SUCCESSFULLY UPLOADED !
              </Typography>
            </>
          )}

          {uploadStep === "error" && (
            <>
              <ErrorOutlineIcon sx={{ fontSize: 40, color: "red" }} />
              <Typography mt={2} fontWeight={700} color="red">
                UPLOAD FAILURE
              </Typography>
              <Button sx={{ mt: 2 }} onClick={() => setUploadStep("select")}>
                Try again
              </Button>
            </>
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default SymposiumSingle;
