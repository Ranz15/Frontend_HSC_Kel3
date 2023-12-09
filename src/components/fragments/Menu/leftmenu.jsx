import LeftMenuList from "../../elements/LeftMenu/leftMenuList";
import Navbar from "../Navbar/navbar";

const LeftMenu = () => {
  return (
    <div className="absolute flex flex-col w-4/5 h-screen px-5 py-20 gap-y-14 bg-[#faf9f8] top-0 left-0 overflow-y-scroll">
      <Navbar className={""} />
      <LeftMenuList className="text-xs hover:underline" href="#">
        Customer Service
      </LeftMenuList>
      <LeftMenuList className="text-xs hover:underline" href="#">
        Mencari Lokasi Toko
      </LeftMenuList>
      <LeftMenuList className="text-xs" href="#">
        Unduh Android
      </LeftMenuList>
    </div>
  );
};

export default LeftMenu;
