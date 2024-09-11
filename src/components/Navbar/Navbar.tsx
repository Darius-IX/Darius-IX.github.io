import { useState } from "react";
import NavbarButton from "./NavbarButton";
import ReactLogo from "/src/assets/react.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarButtons = [
    <NavbarButton label="Dashboard" route="/dashboard"></NavbarButton>,
    <NavbarButton label="Profil" route="/profil"></NavbarButton>,
    <NavbarButton label="Verwaltung" route="/verwaltung"></NavbarButton>,
  ];
  return (
    <header className="w-full fixed flex justify-between items-center text-black py-6 px-8 md:px-32 drop-shadow-md bg-gradient-to-r from-light to-accent-light opacity-90">
      <a href="/">
        <img
          src={ReactLogo}
          alt=""
          className="w-12 hover:scale-105 transition-all"
        />
      </a>
      <h1 className="">First Demo</h1>
      <div className="hidden xl:flex items-center gap-12 font-semibold text-base">
        {navbarButtons}
      </div>
      <div className="relative hidden md:flex items-center justify-center gap-3">
        <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
        <input
          type="text"
          placeholder="Suchen"
          className="py-2 pl-10 rounded-xl border-2 border-accent-dark focus:bg-light focus:outline-none"
        />
      </div>
      <div className="flex justify-center">
        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
        <div
          className={`p-2 absolute top-20 xl:hidden bg-light flex flex-col items-center gap-3 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "" : "hidden"
          }`}
          style={{ transition: "transform 0.3s ease, opacitiy 0.3s ease" }}
        >
          {navbarButtons}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
