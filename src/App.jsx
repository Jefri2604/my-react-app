import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./pages/SignIn";
import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboards";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import AlertsPage from "./pages/AlertsPage";

import ProjectEdit from "./pages/ProjectEdit";
import ProjectView from "./pages/ProjectView";

/* 🔽 ANALYSIS PAGES */
import Analysis from "./pages/analysis/Analysis";
import Outcomes from "./pages/analysis/Outcomes";
import Expectations from "./pages/analysis/Expectations";
import Finance from "./pages/analysis/Finance";
import Attendance from "./pages/analysis/Attendance";

export default function App() {
  return (
    <Routes>
      {/* 🔹 SIGN IN (NO SIDEBAR, FULL SCREEN) */}
      <Route path="/" element={<SignIn />} />

      {/* 🔹 PAGES WITH STATIC SIDEBAR + HEADER */}
      <Route element={<DashboardLayout />}>
        {/* MAIN PAGES */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/view" element={<ProjectView />} />
        <Route path="/projects/edit" element={<ProjectEdit />} />
        <Route path="/activities" element={<Activities />} />

        {/* 🔽 ANALYSIS (NESTED ROUTES) */}
        <Route path="/analysis" element={<Analysis />}>
          {/* default → outcomes */}
          <Route index element={<Navigate to="outcomes" />} />

          <Route path="outcomes" element={<Outcomes />} />
          <Route path="expectations" element={<Expectations />} />
          <Route path="finance" element={<Finance />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>

        {/* 🔔 ALERTS FULL PAGE */}
        <Route path="/alerts" element={<AlertsPage />} />
      </Route>

      {/* 🔹 SAFETY REDIRECT */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
