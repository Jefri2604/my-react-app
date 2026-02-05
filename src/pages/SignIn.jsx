import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import { useState } from "react";
import { signInApi } from "../api/auth";

export default function SignIn() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {

    if (!email.trim() || !password.trim()) {
      alert("Please enter email and password");
      return;
    }

    const payload = {
      email,
      password,
    };

    try {
      setLoading(true);

      const res = await signInApi(payload);

      console.log("Login success :", res.data);

      // ✅ success → dashboard
      navigate("/dashboard", { replace: true });

    } catch (error) {

      console.log("Login error :", error);
      alert("Login failed. Please check your credentials.");

    } finally {
      setLoading(false);
    }
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
          pointerEvents: "none",
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
            caretColor: "transparent",
            userSelect: "none",
  
          }}
        >
          <img
            src="/signin.png"
            alt="signin"
            style={{
              width: "60%",
              position: "absolute",
              bottom: "-100px",
              cursor: "none",
              userSelect: "none",
              pointerEvents: "none",


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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="standard"
            sx={{ mb: 1 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
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
            disabled={loading}
            sx={{
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
              mb: 3,
              backgroundcolor: "#034CA5",
            }}
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>

          {/* ================= OR LOGIN WITH ================= */}
          <Divider sx={{ mb: 2, caretColor: "transparent" }}>
            or login with
          </Divider>

          {/* ================= GOOGLE + APPLE BUTTONS ================= */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                gap: 1,
              }}
            >
              <img src="/google.png" alt="google" width={18} />
              Google
            </Button>

            <Button
              fullWidth
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                gap: 1,
              }}
            >
              <AppleIcon sx={{ color: "#000" }} />
              Apple
            </Button>
          </Box>

          {/* ================= SIGN UP ROUTER LINK ================= */}
          <Typography align="center" fontSize={13} color="text.secondary">
            Don’t have account?{" "}
            <Box
              component="span"
              sx={{ color: "#2563eb", cursor: "pointer", fontWeight: 500 }}
              onClick={() => navigate("/signup")}
            >
              Sign up
            </Box>
          </Typography>

        </Box>
      </Box>
    </Box>
  );
}
