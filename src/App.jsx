import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import TimerUI from "./components/ProjectTimer/TimerUI";
import Navbar from "./components/Dashboard/Navbar";
import MainTop from "./components/Main/Main";
import Overview from "./components/Overview/Overview";

// DashboardLayout.jsx
function DashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <Navbar />
      <div className="flex-1">
        <Outlet /> {/* Child routes render here */}
      </div>
    </div>
  );
}

// App.jsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="timer" element={<TimerUI />} />
        </Route> */}
        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <MainTop />
              </ProtectedRoute>
            }
          />
          <Route path="/dashboard/timer" element={<TimerUI />} />
          <Route path="/dashboard/overview" element={<Overview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
