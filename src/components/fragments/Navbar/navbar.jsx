import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ className }) => {
  // menggunakan navigate
  const navigate = useNavigate();
  // agar ada event saat user mengklik navigate, cth : wanita(bg-red)
  const [activeTab, setActiveTab] = useState("");
  const dataNavbar = [
    {
      label: "Wanita",
      value: "wanita",
    },
    {
      label: "Pria",
      value: "pria",
    },
    {
      label: "Divided",
      value: "divided",
    },
    {
      label: "Baby",
      value: "baby",
    },
    {
      label: "Anak-anak",
      value: "anak-anak",
    },
  ];

  return (
    <nav>
      <div className={className}>
        {dataNavbar.map((item) => {
          console.log(`${setActiveTab}`);
          return (
            <>
              <Link
                to={`/products?category=${item.value}`}
                className={`text-base hover:underline ${
                  activeTab == item.value ? "text-lime-500" : ""
                }`}
                onClick={() => setActiveTab(item.value)}
              >
                {item.label}
              </Link>
            </>
          );
        })}

        <Link to="/products" className="text-base hover:underline">
          {" "}
          Semua Produk{" "}
        </Link>
        <form
          action="#"
          method="post"
          className="hidden justify-center items-center gap-1"
        >
          <img
            src="./assets/images/[1]_Header/Search_Icon.png"
            alt="Search Icon"
            className="w-5 h-5"
          />
          <input
            type="search"
            name=""
            id=""
            placeholder="Cari produk..."
            className="focus:outline-none"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
