import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Results from "./pages/Results";
import Upload from "./pages/Upload";
import Vitals from "./pages/Vitals";

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/" />;
}

function App() {
  return (
    <BrowserRouter basename="/Digital-Health-Wallet">
      <Routes>
        {/* Default page */}
        <Route path="/" element={<Login />} />

        {/* Protected flow */}
        <Route
          path="/vitals"
          element={
            <PrivateRoute>
              <Vitals />
            </PrivateRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <Upload />
            </PrivateRoute>
          }
        />
        <Route
          path="/results"
          element={
            <PrivateRoute>
              <Results />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
