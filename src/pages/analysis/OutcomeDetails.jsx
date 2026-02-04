import { Box, Typography, Button } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function OutcomeDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  useEffect(() => {
    // direct URL open pannina redirect
    if (!data) {
      navigate("/analysis/outcomes");
    }
  }, [data, navigate]);

  if (!data) return null;

  return (
    <Box bgcolor="#fff" borderRadius={2} p={3}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography fontSize={20} fontWeight={600}>
          Details
        </Typography>

        {/* ✅ EDIT BUTTON */}
        <Button
          variant="contained"
          onClick={() =>
            navigate(`/analysis/outcomes/${id}/edit`, {
              state: data,
            })
          }
        >
          Edit
        </Button>
      </Box>

      {/* COLLEGE INFORMATION */}
      <Typography fontWeight={600} mb={2}>
        College Information
      </Typography>

      <Box display="grid" gridTemplateColumns="repeat(4,1fr)" gap={3} mb={4}>
        <Box>
          <Typography color="text.secondary" fontSize={13}>
            ID Number
          </Typography>
          <Typography>{data.id}</Typography>
        </Box>

        <Box>
          <Typography color="text.secondary" fontSize={13}>
            College Name
          </Typography>
          <Typography>{data.college}</Typography>
        </Box>

        <Box>
          <Typography color="text.secondary" fontSize={13}>
            External Training
          </Typography>
          <Typography>{data.training}</Typography>
        </Box>

        <Box>
          <Typography color="text.secondary" fontSize={13}>
            Placement
          </Typography>
          <Typography>{data.placement}</Typography>
        </Box>

        <Box>
          <Typography color="text.secondary" fontSize={13}>
            Coding Platforms
          </Typography>
          <Typography>{data.coding}</Typography>
        </Box>

        <Box>
          <Typography color="text.secondary" fontSize={13}>
            Observation
          </Typography>
          <Typography>{data.observation}</Typography>
        </Box>
      </Box>

      {/* POINT OF CONTACT */}
      <Typography fontWeight={600} mb={2}>
        Point Of Contact
      </Typography>

      <Box display="grid" gridTemplateColumns="repeat(4,1fr)" gap={3} mb={4}>
        <Box>
          <Typography color="text.secondary" fontSize={13}>
            Name
          </Typography>
          <Typography>Alex</Typography>
        </Box>

        <Box>
          <Typography color="text.secondary" fontSize={13}>
            Role
          </Typography>
          <Typography>Madurai</Typography>
        </Box>

        <Box>
          <Typography color="text.secondary" fontSize={13}>
            Mail Id
          </Typography>
          <Typography>alex@gmail.com</Typography>
        </Box>

        <Box>
          <Typography color="text.secondary" fontSize={13}>
            Phone Number
          </Typography>
          <Typography>2346534688</Typography>
        </Box>
      </Box>

      {/* DOCUMENT */}
      <Typography fontWeight={600} mb={1}>
        Document
      </Typography>

      <Box
        p={2}
        border="1px solid #e5e7eb"
        borderRadius={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxWidth={420}
      >
        <Typography fontSize={14}>
          Document <span style={{ color: "#6b7280" }}>(13.76 kb)</span>
        </Typography>
        <Button size="small">Download</Button>
      </Box>
    </Box>
  );
}
