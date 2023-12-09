import { useState } from "react";

const FooterShop = ({ className }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={className}>
      <a href="#" className="hover:underline">
        Wanita
      </a>
      <a href="#" className="hover:underline">
        Pria
      </a>
      <a href="#" className="hover:underline">
        Divided
      </a>
      <a href="#" className="hover:underline">
        Baby
      </a>
      <a href="#" className="hover:underline">
        Anak-anak
      </a>
    </div>
  );
};

export default FooterShop;
