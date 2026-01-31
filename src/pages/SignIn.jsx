import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* ================= LEFT IMAGE SECTION ================= */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 6,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 700,
            height: 500,
            bgcolor: "#DBEAFE",
            borderRadius: "40px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/signin.png"
            alt="signin"
            style={{
              width: "60%",
              position: "absolute",
              bottom: "-100px",
            }}
          />
        </Box>
      </Box>

      {/* ================= RIGHT FORM SECTION ================= */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 6,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight={600} mb={3}>
            Sign in
          </Typography>

          <TextField
            fullWidth
            label="Enter your email address"
            variant="standard"
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="standard"
            sx={{ mb: 1 }}
          />

          <Typography
            sx={{
              textAlign: "right",
              fontSize: 13,
              color: "gray",
              mb: 3,
              cursor: "pointer",
            }}
          >
            Forgot password
          </Typography>

          {/* ================= SIGN IN BUTTON ================= */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleSignIn}
            sx={{
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
              mb: 3,
            }}
          >
            Sign in
          </Button>

          {/* ================= OR LOGIN WITH ================= */}
          <Divider sx={{ mb: 2 }}>or login with</Divider>

          {/* ================= GOOGLE + APPLE BUTTONS ================= */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            {/* GOOGLE */}
            <Button
              fullWidth
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                alignItems: "center",           
                justifyContent: "center", 
                gap: 1,
              }}
            >
              <img src="/google.png" alt="google" width={18} />
              Google
            </Button>

            {/* APPLE */}
            <Button
              fullWidth
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                alignItems: "center",           
                justifyContent: "center", 
                gap: 1,
              }}
            >
             <AppleIcon sx={{ color: "#000" }} />Apple
            </Button>
          </Box>

          {/* ================= SIGN UP ================= */}
          <Typography align="center" fontSize={13} color="text.secondary">
            Don’t have account?{" "}
            <span style={{ color: "#2563eb", cursor: "pointer" }}>
              Sign up
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
