import { Link } from "react-router-dom";

const CenterIcon = () => {
  return (
    <div className="flex gap-6">
      <Link to="/">
        <img
          src="/assets/images/[1]_Header/H&M_Icon.svg"
          alt="H&M Icon"
          className="w-16 h-16"
        />
      </Link>
    </div>
  );
};

export default CenterIcon;
