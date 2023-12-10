import { Link } from "react-router-dom";

const CenterIcon = () => {
  return (
    <div className="flex justify-start w-10 sm:w-14 lg:w-20">
      <Link to="/">
        <img
          src="/assets/images/[1]_Header/brand-icon.png"
          alt="H&M Icon"
          className="w-full "
        />
      </Link>
    </div>
  );
};

export default CenterIcon;
