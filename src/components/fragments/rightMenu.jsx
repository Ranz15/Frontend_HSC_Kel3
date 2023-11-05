import RightMenuList from "../elements/RightMenu/rightMenuList";

const RightMenu = () => {
  return (
    <div className="flex gap-3">
      <RightMenuList className="text-xs hover:underline" href="#">
        Customer Service
      </RightMenuList>
      <RightMenuList className="text-xs hover:underline" href="#">
        Mencari Lokasi Toko
      </RightMenuList>
      <RightMenuList className="text-xs" href="#">
        Unduh Android
      </RightMenuList>
      <RightMenuList className="text-xs" href="#">
        Unduh iOS
      </RightMenuList>
    </div>
  );
};

export default RightMenu;
