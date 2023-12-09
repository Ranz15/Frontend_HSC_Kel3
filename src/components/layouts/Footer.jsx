import FooterShop from "../fragments/Footer/footerShop";
import FooterCompanyInfo from "../fragments/Footer/footerCompanyInfo";
import FooterHelp from "../fragments/Footer/footerHelp";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <footer className="bg-[#e4e4e4] w-full max-h-full text-sm">
      <div className="w-full flex flex-col lg:flex-row justify-between lg:gap-x-16 px-4 py-10">
        <div className="flex flex-col justify-between py-3 px-5">
          <span
            className="font-bold hover:cursor-pointer lg:hover:cursor-text "
            onClick={() => setIsActive(!isActive)}
          >
            SHOP
          </span>
          {/* Tampilan Mobile */}
          <FooterShop
            className={
              isActive ? "flex flex-col gap-5 mt-5 lg:hidden " : "hidden"
            }
          />
          {/* Tampilan Dekstop */}
          <FooterShop className="hidden justify-start lg:flex lg:flex-col" />
        </div>
        <div className="flex flex-col justify-between py-3 px-5  ">
          <span
            className="font-bold lg:hover:cursor-text"
            onClick={() => setIsActive(!isActive)}
          >
            INFORMASI PERUSAHAAN
          </span>
          {/*Tampilan Mobile*/}
          <FooterCompanyInfo
            className={
              isActive ? "flex flex-col gap-5 mt-5 text-sm lg:hidden" : "hidden"
            }
          />
          {/*Tampilan Deskstop*/}
          <FooterCompanyInfo className="hidden justify-start lg:flex lg:flex-col" />
        </div>
        <div className="flex flex-col justify-between py-3 px-5 ">
          <span
            className="font-bold lg:hover:cursor-text"
            onClick={() => setIsActive(!isActive)}
          >
            BANTUAN
          </span>
          {/*Tampilan Mobile*/}
          <FooterHelp
            className={
              isActive ? "flex flex-col gap-5 mt-5 text-sm lg:hidden" : "hidden"
            }
          />
          {/*Tampilan Dekstop*/}
          <FooterHelp className="hidden justify-start lg:flex lg:flex-col" />
        </div>
      </div>
      <div className="max-w-full flex flex-col items-center p-10">
        <Link to={"/"} className="flex justify-center items-center">
          <span>HENNES</span>
          <img
            src="./assets/images/[3]_Footer/Logo.png"
            alt="Logo"
            className="w-16"
          />
          <span>MAURITZ</span>
        </Link>
        <div className="max-w-md mx-auto md:max-w-lg lg:max-w-lg xl:max-w-xl">
          <p className="text-justify text-xs md:text-xs md:break-normal  xl:text-center  ">
            Konsep bisnis H&M menawarkan fashion dan kualitas dengan harga
            terbaik dan cara yang berkelanjutan. H&M sejak didirikan pada tahun
            1947 tumbuh menjadi salah satu perusahaan fesyen terkemuka di dunia.
            Seluruh isi dan informasi dari situs ini dilindungi hak cipta dan
            merupakan milik H&M Hennes and Mauritz AB. Layanan Pengaduan
            Konsumen, Direktorat Jenderal Perlindungan Konsumen dan Tertib
            Niaga, Kementerian Perdagangan Republik Indonesia, 0853-1111-1010
            (WhatsApp)
          </p>
        </div>
        <div className="flex justify-center items-center gap-7 mt-4">
          <a href="#">
            <img
              src="./assets/images/[3]_Footer/facebook.png"
              alt="facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="#">
            <img
              src="./assets/images/[3]_Footer/twitter.png"
              alt="twitter"
              className="w-6 h-6"
            />
          </a>
          <a href="#">
            <img
              alt="instagram"
              src="./assets/images/[3]_Footer/instagram.png"
              className="w-6 h-6"
            />
          </a>
          <a href="#">
            <img
              src="./assets/images/[3]_Footer/youtube.png"
              alt="youtube"
              className="w-6 h-6"
            />
          </a>
        </div>
        <div className="flex justify-center items-center my-4">
          <p>Indonesia | Rp</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
