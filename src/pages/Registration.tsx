import { NavLink } from "react-router-dom";

const Registration = () => {
  return (
    <div className="text-center pt-12 gap-2">
      <div>Registration</div>
      <div className="col-span-2 flex flex-col items-center">
        <NavLink
          className="border-primary rounded-md border-2 bg-accent-dark w-32 text-center hover:underline"
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
      </div>
      <div className="col-span-2 flex flex-col items-center">
        <NavLink
          className="border-primary rounded-md border-2 bg-accent-dark w-32 text-center hover:underline"
          to={"/login"}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Registration;
