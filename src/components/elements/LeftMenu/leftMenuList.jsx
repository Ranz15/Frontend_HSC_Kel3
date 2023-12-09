import { Link } from "react-router-dom";

const LeftMenuList = ({ className, href, children }) => {
  return (
    <span className={className}>
      <Link to={href}>{children}</Link>
    </span>
  );
};

export default LeftMenuList;
