import { Route, Routes } from "react-router-dom";
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
      <div className="bg-gradient-to-l from-accent-light to-accent-dark flex flex-col justify-between h-screen">
        <div>
          <div className="p-12"></div>
          <div className="bg-gradient-to-l from-accent-light to-accent-dark">
            <Routes>
              <Route path="/" Component={Dashboard}></Route>
              <Route path="/profil" Component={Profile}></Route>
              <Route path="/verwaltung" Component={Administration}></Route>
            </Routes>
          </div>
          <div className="bg-gradient-to-l from-accent-light to-accent-dark h-full w-full flex-1"></div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
