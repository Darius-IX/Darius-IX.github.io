import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Administration from "./pages/Administration";
import bindHotkeys from "./bindHotkeys";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import TestPage from "./pages/TestPage";
import Activator from "./pages/Activator";
import Uploader from "./pages/Uploader";
import Settings from "./pages/Settings";

function IsPageWithoutNavbar(pathname: string) {
  const pagesWithoutNavbar = ["/login", "/registration", "/test"];
  var noNavbar = false;
  pagesWithoutNavbar.forEach((page) => {
    if (page == pathname) {
      noNavbar = true;
    }
  });
  return noNavbar;
}

function IsPageWithoutFooter(pathname: string) {
  const pagesWithoutFooter = ["/login", "/registration", "/test"];
  var noFooter = false;
  pagesWithoutFooter.forEach((page) => {
    if (page == pathname) {
      noFooter = true;
    }
  });
  return noFooter;
}

function App() {
  bindHotkeys();
  const location = useLocation();

  return (
    <div className="h-screen">
      {IsPageWithoutNavbar(location.pathname) ? <></> : <Navbar></Navbar>}
      <div className="bg-gradient-to-r from-accent-dark to-accent-light flex flex-col justify-between h-screen">
        <div>
          {IsPageWithoutNavbar(location.pathname) ? (
            <></>
          ) : (
            <div className="p-12"></div>
          )}

          <div className="bg-gradient-to-r from-accent-dark to-accent-light">
            <Routes>
              <Route index path="/login" element={<Login />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/profil" element={<Profile />}></Route>
              <Route path="/admin" element={<Administration />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/registration" element={<Registration />}></Route>
              <Route path="/freischalter" element={<Activator />}></Route>
              <Route path="/uploader" element={<Uploader />}></Route>
              <Route path="/einstellungen" element={<Settings />}></Route>
              <Route path="/test" element={<TestPage />}></Route>
              <Route
                path="*"
                element={<Navigate to="/dashboard" replace />}
              ></Route>
            </Routes>
          </div>
        </div>
        {IsPageWithoutFooter(location.pathname) ? <></> : <Footer></Footer>}
      </div>
    </div>
  );
}

export default App;
