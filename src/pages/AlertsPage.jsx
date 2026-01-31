import { Box, Typography, Tabs, Tab, Chip } from "@mui/material";
import { useState } from "react";

// ---------------- DATA ----------------

const allRows = [
  {
    name: "Samuel",
    endDate: "Oct 15, 2023",
    dept: "Engineering",
    domain: "UI UX Design",
    duration: "6 months",
    college: "Government College of Engineering",
  },
  {
    name: "Samuel",
    endDate: "Oct 15, 2023",
    dept: "Engineering",
    domain: "UI UX Design",
    duration: "6 months",
    college: "Government College of Engineering",
  },
  {
    name: "Samuel",
    endDate: "Oct 15, 2023",
    dept: "Engineering",
    domain: "UI UX Design",
    duration: "6 months",
    college: "Government College of Engineering",
  },
];

const expiredRows = [
  {
    name: "Samuel",
    endDate: "Oct 15, 2023",
    dept: "Engineering",
    domain: "UI UX Design",
    duration: "6 months",
    college: "Government College of Engineering",
    finishing: "7 Days",
    color: "#FED7AA",
  },
  {
    name: "Samuel",
    endDate: "Oct 15, 2023",
    dept: "Engineering",
    domain: "UI UX Design",
    duration: "6 months",
    college: "Government College of Engineering",
    finishing: "10 Days",
    color: "#DCFCE7",
  },
  {
    name: "Samuel",
    endDate: "Oct 15, 2023",
    dept: "Engineering",
    domain: "UI UX Design",
    duration: "6 months",
    college: "Government College of Engineering",
    finishing: "7 Days",
    color: "#DCFCE7",
  },
];

// ---------------- COMPONENT ----------------

export default function AlertsPage() {
  const [tab, setTab] = useState(0);

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 3,
        p: 3,
        boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
      }}
    >
      {/* Title */}
      <Typography variant="h5" fontWeight={600} mb={2}>
        Alert and Reminders
      </Typography>

      <Box sx={{ height: 1, bgcolor: "#e5e7eb", mb: 2 }} />

      {/* Yellow card */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#FEF3C7",
          borderRadius: 2,
          p: 2,
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              bgcolor: "#EF4444",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            !
          </Box>
          <Box>
            <Typography fontWeight={600}>Upcoming Completions</Typography>
            <Typography fontSize={13} color="text.secondary">
              3 Interns are finishing their tenure in 7 days
            </Typography>
          </Box>
        </Box>

        {/* White time chip */}
        <Chip
          label="3min ago"
          size="small"
          sx={{ bgcolor: "#fff", border: "1px solid #e5e7eb" }}
        />
      </Box>

      {/* Section */}
      <Typography fontWeight={600} mb={1}>
        Internship Offboarding
      </Typography>

      {/* Tabs */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          <Tab label="All" />
          <Tab label="Expired" />
        </Tabs>
        <Typography fontSize={12} color="text.secondary">
          3min ago
        </Typography>
      </Box>

      {/* Table Header */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            tab === 0
              ? "1.2fr 1fr 1fr 1.2fr 1fr 2fr"
              : "1.2fr 1fr 1fr 1.2fr 1fr 2fr 1fr",
          bgcolor: "#EAF2FA",
          p: 1.5,
          borderRadius: 1,
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        <div>Name</div>
        <div>End date</div>
        <div>Department</div>
        <div>Domain</div>
        <div>Duration</div>
        <div>College</div>
        {tab === 1 && <div>Finishing Date</div>}
      </Box>

      {/* Table Rows */}
      {(tab === 0 ? allRows : expiredRows).map((r, i) => (
        <Box
          key={i}
          sx={{
            display: "grid",
            gridTemplateColumns:
              tab === 0
                ? "1.2fr 1fr 1fr 1.2fr 1fr 2fr"
                : "1.2fr 1fr 1fr 1.2fr 1fr 2fr 1fr",
            p: 1.5,
            borderBottom: "1px solid #eee",
            fontSize: 13,
            alignItems: "center",
            bgcolor: "#fff",
          }}
        >
          <div>{r.name}</div>
          <div>{r.endDate}</div>
          <div>{r.dept}</div>
          <div>{r.domain}</div>
          <div>{r.duration}</div>
          <div>{r.college}</div>

          {tab === 1 && (
            <div>
              <Chip
                label={r.finishing}
                size="small"
                sx={{ bgcolor: r.color, fontSize: 12 }}
              />
            </div>
          )}
        </Box>
      ))}

      {/* Empty space */}
      <Box sx={{ height: 200, bgcolor: "#f3f4f6", mt: 1, borderRadius: 2 }} />
    </Box>
  );
}
