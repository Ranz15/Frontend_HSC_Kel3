import { Link } from "react-router-dom";

const Five_Content = ({ destination, title, bgColor, textColor }) => {
  return (
    <>
      <div className="mt-[30rem] flex flex-row gap-5">
        <Link to={destination} className={`${bgColor} ${textColor} border p-2`}>
          {title}
        </Link>
      </div>
    </>
  );
};

export default Five_Content;
