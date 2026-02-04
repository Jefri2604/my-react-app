import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";  

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboards";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";

// Activities → Academic
import Symposium from "./activities/academic/Symposium";
import SymposiumSingle from "./activities/academic/SymposiumSingle";
import SymposiumView from "./activities/academic/SymposiumView";
import SymposiumEdit from "./activities/academic/SymposiumEdit";
import SymposiumStudents from "./activities/academic/SymposiumStudents";
import SingleStudentAdd from "./activities/academic/SingleStudentAdd";

// Student view & edit
import SymposiumStudentsDetails from "./activities/academic/SymposiumStudentsDetails";
import SymposiumStudentEdit from "./activities/academic/SymposiumStudentEdit";

import AlertsPage from "./pages/AlertsPage";

import ProjectEdit from "./pages/ProjectEdit";
import ProjectView from "./pages/ProjectView";

/* 🔽 ANALYSIS PAGES */
import Analysis from "./pages/analysis/Analysis";
import Outcomes from "./pages/analysis/Outcomes";
import OutcomeDetails from "./pages/analysis/OutcomeDetails";
import OutcomeEdit from "./pages/analysis/OutcomeEdit";
import Expectations from "./pages/analysis/Expectations";
import Finance from "./pages/analysis/Finance";
import Attendance from "./pages/analysis/Attendance";

export default function App() {
  return (
    <Routes>

      {/* 🔹 SIGN IN */}
      <Route path="/" element={<SignIn />} />

      {/* 🔹 SIGN UP */}
      <Route path="/Signup" element={<Signup />} />

      {/* 🔹 PAGES WITH SIDEBAR + HEADER */}
      <Route element={<DashboardLayout />}>
        {/* MAIN PAGES */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/view" element={<ProjectView />} />
        <Route path="/projects/edit" element={<ProjectEdit />} />
        <Route path="/activities" element={<Activities />} />

        {/* ACTIVITIES → SYMPOSIUM */}
        <Route
          path="/activities/academic/symposium"
          element={<Symposium />}
        />
        <Route
          path="/activities/academic/symposium/single"
          element={<SymposiumSingle />}
        />
        <Route
          path="/activities/academic/symposium/view"
          element={<SymposiumView />}
        />
        <Route
          path="/activities/academic/symposium/edit"
          element={<SymposiumEdit />}
        />
        <Route
          path="/activities/academic/symposium/students"
          element={<SymposiumStudents />}
        />

        {/* STUDENT ROUTES */}
        <Route
          path="/activities/academic/symposium/student/add"
          element={<SingleStudentAdd />}
        />
        <Route
          path="/activities/academic/symposium/student/details"
          element={<SymposiumStudentsDetails />}
        />
        <Route
          path="/activities/academic/symposium/student/edit"
          element={<SymposiumStudentEdit />}
        />

        {/* 🔽 ANALYSIS (NESTED ROUTES) */}
        <Route path="/analysis" element={<Analysis />}>
          {/* default → outcomes */}
          <Route index element={<Navigate to="outcomes" />} />

          {/* Outcomes flow */}
          <Route path="outcomes" element={<Outcomes />} />
          <Route path="outcomes/:id" element={<OutcomeDetails />} />
          <Route
            path="outcomes/:id/edit"
            element={<OutcomeEdit />}
          />

          <Route path="expectations" element={<Expectations />} />
          <Route path="finance" element={<Finance />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>

        {/* 🔔 ALERTS */}
        <Route path="/alerts" element={<AlertsPage />} />
      </Route>

      {/* 🔹 SAFETY REDIRECT */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}
