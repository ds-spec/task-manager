import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
