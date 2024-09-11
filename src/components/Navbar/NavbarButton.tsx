import { NavLink } from "react-router-dom";

interface NavbarButtonProps {
  label: string;
  route: string;
}

const NavbarButton = ({ label, route }: NavbarButtonProps) => {
  return (
    <div className="p-3 hover:bg-accent-light rounded-lg cursor-pointer">
      <NavLink to={route}>{label}</NavLink>
    </div>
  );
};

export default NavbarButton;
