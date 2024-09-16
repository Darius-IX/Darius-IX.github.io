import { NavLink } from "react-router-dom";

interface NavbarButtonProps {
  label: string;
  route: string;
}

const NavbarButton = ({ label, route }: NavbarButtonProps) => {
  return (
    <div>
      <NavLink
        className="px-3 py-2 hover:bg-accent-light rounded-lg cursor-pointer"
        to={route}
      >
        {label}
      </NavLink>
    </div>
  );
};

export default NavbarButton;
