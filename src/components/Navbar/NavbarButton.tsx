import { NavLink } from "react-router-dom";

interface NavbarButtonProps {
  label: string;
  route: string;
  secondLevelLabels?: string[];
  secondLevelRoutes?: string[];
}

function SecondLevel(secondLevelLabels: string[], secondLevelRoutes: string[]) {
  return (
    <div className="grid grid-cols-1">
      {secondLevelLabels.map((label, index) => (
        <NavLink
          className="px-3 py-2 hover:bg-accent-light rounded-lg cursor-pointer text-center"
          to={secondLevelRoutes[index]}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

const NavbarButton = ({
  label,
  route,
  secondLevelLabels,
  secondLevelRoutes,
}: NavbarButtonProps) => {
  return (
    <div>
      {secondLevelLabels && secondLevelRoutes ? (
        <div>
          <div className="peer/parent_button px-3 py-2 hover:bg-accent-light rounded-lg cursor-pointer">
            {label}
          </div>
          <div className="absolute max-xl:bottom-0 max-xl:right-20  invisible peer-hover/parent_button:visible hover:visible bg-light p-2 rounded-md border-primary border-2 w-40">
            {/* <div className="absolute invisible peer-hover/parent_button:visible hover:visible bg-light p-2 rounded-md"> */}
            {/* <div className="absolute bottom-0 right-20 invisible peer-hover/parent_button:visible hover:visible bg-light p-2 rounded-md border-primary border-2 w-40"> */}
            {SecondLevel(secondLevelLabels, secondLevelRoutes)}
          </div>
        </div>
      ) : (
        <NavLink
          className="px-3 py-2 hover:bg-accent-light rounded-lg cursor-pointer"
          to={route}
        >
          {label}
        </NavLink>
      )}
    </div>
  );
};

export default NavbarButton;
