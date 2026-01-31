import React, { useState } from "react";
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
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import CloseIcon from "@mui/icons-material/Close";

const ProjectEdit = () => {
    const navigate = useNavigate();
    const { state } = useLocation(); // selected college data

    const [status, setStatus] = useState("In progress");
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };


    return (
        <Box>
            {/* HEADER */}
            <Box
                sx={{
                    backgroundColor: "#f5f5f5",
                    px: 2,
                    py: 1.5,   // 🔽 reduced
                    borderBottom: "1px solid #e0e0e0",
                }}
            >

                <Typography variant="h5" fontWeight={600}>
                    Edit
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    <span
                        style={{ cursor: "pointer", color: "#1976d2" }}
                        onClick={() => navigate("/projects")}
                    >
                        All
                    </span>{" "}
                    • {state?.college || "College"} • Edit
                </Typography>
            </Box>

            {/* CONTENT */}
            <Box sx={{ p: 2 }}>

                <Paper sx={{ p: 2, borderRadius: 2 }}>
                    {/* COLLEGE INFORMATION */}
                    <Box display="flex" justifyContent="space-between" mb={2}>
                        <Typography fontWeight={600}>College Information</Typography>
                        <IconButton size="small">
                            <DeleteOutlineIcon />
                        </IconButton>
                    </Box>

                    <Grid container spacing={2}>
                        {/* Row 1 */}
                        <Grid item xs={6}>
                            <TextField
                                placeholder="College name"
                                fullWidth
                                size="small"            // ✅ IMPORTANT
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                type="date"
                                fullWidth
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                type="date"
                                fullWidth
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                            />
                        </Grid>

                        {/* Row 2 */}
                        <Grid item xs={6}>
                            <TextField
                                placeholder="Location"
                                fullWidth
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                placeholder="Mail Id"
                                fullWidth
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                            />
                        </Grid>
                    </Grid>

                    {/* STATUS */}
                    <Box mt={3}>
                        <Typography fontWeight={600} mb={1}>
                            Status
                        </Typography>
                        <RadioGroup
                            row
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <FormControlLabel
                                value="In progress"
                                control={<Radio />}
                                label="In progress"
                            />
                            <FormControlLabel
                                value="Completed"
                                control={<Radio />}
                                label="Completed"
                            />
                            <FormControlLabel
                                value="Dropped"
                                control={<Radio />}
                                label="Dropped"
                            />
                        </RadioGroup>
                    </Box>
                    {/* DOCUMENT */}
                    <Box mt={3}>
                        <Typography fontWeight={600} mb={1}>
                            Document
                        </Typography>

                        {/* Upload Box */}
                        <Box
                            component="label"
                            sx={{
                                width: "100%",
                                border: "1px dashed #bdbdbd",
                                borderRadius: 2,
                                py: 2.5,
                                minHeight: 120,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                backgroundColor: "#f7f7f7",
                            }}
                        >
                            <CloudUploadOutlinedIcon
                                sx={{ fontSize: 32, color: "#1976d2", mb: 1 }}
                            />

                            <Typography
                                sx={{
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: "#1976d2",
                                }}
                            >
                                UPLOAD DOCUMENT
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: 12,
                                    color: "#9e9e9e",
                                    mt: 0.5,
                                }}
                            >
                                Drag and drop files here
                            </Typography>

                            <input hidden type="file" onChange={handleFileChange} />
                        </Box>

                        {/* File Preview */}
                        {file && (
                            <>
                                <Box
                                    sx={{
                                        mt: 2,
                                        px: 2,
                                        py: 1,
                                        backgroundColor: "#e0e0e0",
                                        borderRadius: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Typography sx={{ fontSize: 12 }}>
                                        {file.name}
                                    </Typography>

                                    <IconButton size="small" onClick={() => setFile(null)}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </Box>

                                <Box
                                    sx={{
                                        mt: 1,
                                        px: 2,
                                        py: 0.8,
                                        backgroundColor: "#e6f4ea",
                                        borderRadius: 1,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 12,
                                            color: "green",
                                            fontWeight: 500,
                                        }}
                                    >
                                        ● uploaded
                                    </Typography>
                                </Box>
                            </>
                        )}
                    </Box>


                    {/* POINT OF CONTACT */}
                    <Box mt={3}>
                        <Typography fontWeight={600} mb={1}>
                            Point of contact
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <TextField
                                    placeholder="Name"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    placeholder="Role"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    placeholder="Mail Id"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    placeholder="Phone no"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            variant="outlined"
                            size="small"
                            sx={{ mt: 2 }}
                            onClick={() => navigate("/projects/add")}
                        >
                            + Add
                        </Button>

                    </Box>
                </Paper>

                {/* FOOTER */}
                <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
                    <Button variant="outlined" onClick={() => navigate(-1)}>
                        Cancel
                    </Button>
                    <Button variant="contained">Update</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectEdit;