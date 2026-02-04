import * as React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";

export default function Signup() {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "#e5e5e5",
        display: "flex"
      }}
    >
      {/* LEFT DESIGN SIDE */}
      <Box
        sx={{
          flex: 1.2,
          position: "relative"
        }}
      >
        {/* top rounded shape */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "75%",
            height: 190,
            background: "#cfe4ff",
            borderBottomLeftRadius: 120,
            borderBottomRightRadius: 120
          }}
        />

        {/* thin vertical line */}
        <Box
          sx={{
            position: "absolute",
            top: 190,
            right: 0,
            width: 10,
            height: 260,
            background: "#cfe4ff",
            borderBottomRightRadius: 60
          }}
        />
      </Box>

      {/* RIGHT FORM SIDE */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box sx={{ width: 300 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Sign up
          </Typography>

          <TextField
            variant="standard"
            fullWidth
            placeholder="Enter your name"
            InputProps={{ disableUnderline: false }}
            sx={{ mb: 2 }}
          />

          <TextField
            variant="standard"
            fullWidth
            placeholder="Enter your email address"
            sx={{ mb: 2 }}
          />

          <TextField
            variant="standard"
            fullWidth
            type="password"
            placeholder="Password"
          />

          <Button
            fullWidth
            sx={{
              mt: 3,
              py: 1,
              textTransform: "none",
              background: "#0a4fb3",
              "&:hover": {
                background: "#083f90"
              }
            }}
            variant="contained"
          >
            Sign up
          </Button>

          <Typography
            sx={{
              mt: 2,
              fontSize: 12,
              textAlign: "center",
              color: "#777"
            }}
          >
            Already have an account?{" "}
            <Link
              href="/signin"
              underline="none"
              sx={{ color: "#0a4fb3", fontWeight: 600 }}
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
