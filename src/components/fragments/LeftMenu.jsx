import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <div className="flex gap-3 justify-center items-center">
      <Link
        to="/login"
        className="text-xs hover:underline flex gap-1 justify-center items-center"
      >
        <img
          src="/assets/images/[1]_Header/Person_Icon.png"
          alt="Love Icon"
          className="w-[18px] h-[18px]"
        />
        Masuk Akun
      </Link>
      <a
        href="#"
        className="text-xs hover:underline flex justify-center items-center"
      >
        Indonesian
        <span>
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </a>
      <a
        href="#"
        className="text-xs hover:underline flex gap-1 justify-center items-center"
      >
        <img
          src="../assets/images/[1]_Header/Heart_Icon.png"
          alt="Love Icon"
          className="w-[18px] h-[18px]"
        />
        Favorit
      </a>
      <a
        href="#"
        className="text-xs hover:underline flex gap-1 justify-center items-center"
      >
        <img
          src="../assets/images/[1]_Header/ShoppingBag_icon.png"
          alt="Love Icon"
          className="w-[18px] h-[18px]"
        />
        Tas Belanja (0)
      </a>
    </div>
  );
};

export default LeftMenu;
