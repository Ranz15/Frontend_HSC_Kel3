import { useState, useEffect, useRef } from "react";
import CenterIcon from "../fragments/Navbar/centerIcon";
import LeftMenu from "../fragments/Menu/leftmenu";
import RightMenu from "../fragments/Menu/rightMenu";
import Navbar from "../fragments/Navbar/navbar";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className=" flex items-center w-full px-2 h-16 fixed z-10 bg-[#faf9f8] shadow-md">
      <div
        className="flex flex-col w-8 h-11 justify-evenly z-10 bg-transparent hover:cursor-pointer lg:hidden "
        onClick={() => setIsActive(!isActive)}
      >
        <span className="bg-black w-8 h-1  rounded-sm"></span>
        <span className="bg-black w-8 h-1  rounded-sm"></span>
        <span className="bg-black w-8 h-1  rounded-sm"></span>
      </div>
      {isActive && <LeftMenu />}
      <CenterIcon />
      <RightMenu />
      <Navbar className={"hidden  "} />
    </header>
  );
};

export default Header;
