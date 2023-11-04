import { Link } from "react-router-dom";

const Third_Content = ({ destination, imglink, title, category, message }) => {
  return (
    <>
      <div>
        <Link
          to={destination}
          className="flex flex-col justify-center items-center"
        >
          <img
            src={imglink}
            alt={title}
            className="w-20 h-24 rounded-full bg-neutral-200"
          />
          <p className="text-slate-600 text-xs">{category}</p>
          <p className="text-sm">{message}</p>
        </Link>
      </div>
    </>
  );
};

export default Third_Content;
