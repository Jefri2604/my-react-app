import * as React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signUpApi } from "../api/auth";

export default function Signup() {

  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSignup = async () => {

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await signUpApi({ name, email, password });

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }

      navigate("/dashboard", { replace: true });

    } catch (error) {

      alert(
        error?.response?.data?.message || "Signup failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex"
      }}
    >

      {/* ================= LEFT IMAGE SIDE ================= */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            width: "78%",
            height: "72%",
            backgroundColor: "#dbeafe",   // light blue
            borderRadius: 6,
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pb: 4
          }}
        >
          <img
            src="/signup.png"
            alt="signup"
            style={{
              width: "420px",
              maxWidth: "90%",
              objectFit: "contain"
            }}
          />
        </Box>
      </Box>


      {/* ================= RIGHT FORM SIDE ================= */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box sx={{ width: 420 }}>

          <Typography
            sx={{
              fontSize: 34,
              fontWeight: 700,
              textAlign: "center",
              mb: 4
            }}
          >
            Sign up
          </Typography>

          <TextField
            variant="standard"
            fullWidth
            placeholder="Enter your name"
            sx={{ mb: 3 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            variant="standard"
            fullWidth
            placeholder="Enter your email address"
            sx={{ mb: 3 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            variant="standard"
            fullWidth
            type="password"
            placeholder="Password"
            sx={{ mb: 4 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleSignup}
            disabled={loading}
            sx={{
              height: 48,
              fontSize: 16,
              textTransform: "none",
              backgroundColor: "#034CA5",
              borderRadius: 1.5
            }}
          >
            {loading ? "Signing up..." : "Sign up"}
          </Button>

          <Typography
            sx={{
              mt: 3,
              textAlign: "center",
              fontSize: 14,
              color: "#666"
            }}
          >
            Already have an account?{" "}
            <Link
              component="button"
              onClick={() => navigate("/")}
              underline="none"
              sx={{ fontWeight: 600 }}
            >
              Sign in
            </Link>
          </Typography>

        </Box>
      </Box>

    </Box>
  );
}
