import { ReactNode } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

interface CustomNavLinkProps {
  to: string;
  className?: string;
  children: ReactNode;
}

function linkTo(to: string, navigate: NavigateFunction) {
  navigate(to);
}

const CustomNavLink = (props: CustomNavLinkProps) => {
  const navigate = useNavigate();
  return (
    <div className={props.className}>
      <button onClick={() => linkTo(props.to, navigate)}>
        {props.children}
      </button>
    </div>
  );
};

export default CustomNavLink;
