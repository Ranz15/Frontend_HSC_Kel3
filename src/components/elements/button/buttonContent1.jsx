import { Link } from "react-router-dom";

const First_Content = ({ destination, title }) => {
  return (
    <>
      <div className="mt-[16rem]">
        <Link to={destination} className="bg-slate-100 border p-2">
          {title}
        </Link>
      </div>
    </>
  );
};

export default First_Content;
