import CenterIcon from "../fragments/centerIcon";
import LeftMenu from "../fragments/leftMenu";
import RightMenu from "../fragments/rightMenu";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-8 w-full h-[50px]">
      <RightMenu />
      <CenterIcon />
      <LeftMenu />
    </header>
  );
};

export default Header;
