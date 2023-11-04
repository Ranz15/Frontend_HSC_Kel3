import { Link } from "react-router-dom";

const RightMenuList = ({ className, href, children }) => {
  return (
    <span className={className}>
      <Link to={href}>{children}</Link>
    </span>
  );
};

export default RightMenuList;
