import { Link } from "react-router-dom";

const Six_Content = ({ destination, title, bgColor, textColor }) => {
  return (
    <>
      <div className="mt-[16rem] ml-[23rem] flex flex-row gap-5 ">
        <Link to={destination} className={`bg-slate-${bgColor} text-${textColor} border px-5 py-[0.5rem] flex justify-center items-center`}>
          {title}
        </Link>
      </div>
    </>
  );
};

export default Six_Content;
