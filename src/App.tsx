import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Administration from "./pages/Administration";
import bindHotkeys from "./bindHotkeys";
import Footer from "./components/Footer/Footer";

function App() {
  bindHotkeys();

  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <div className="bg-gradient-to-r from-accent-dark to-accent-light flex flex-col justify-between h-screen">
        <div>
          <div className="p-12"></div>
          <div className="bg-gradient-to-r from-accent-dark to-accent-light">
            <Routes>
              <Route index path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/profil" element={<Profile />}></Route>
              <Route path="/verwaltung" element={<Administration />}></Route>
              <Route
                path="*"
                element={<Navigate to="/dashboard" replace />}
              ></Route>
            </Routes>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
