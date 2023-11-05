import FooterShop from "../fragments/footerShop";
import FooterCompanyInfo from "../fragments/footerCompanyInfo";
import FooterHelp from "../fragments/footerHelp";

const Footer = () => {
  return (
    <footer className="bg-gray-300 w-full h-auto text-sm">
      <div className="flex justify-center gap-52">
        <FooterShop />
        <FooterCompanyInfo />
        <FooterHelp />
      </div>
      <div className="flex flex-col gap-2 mt-7">
        <h1 className="flex justify-center items-center">
          <a href="index.html" className="flex justify-center items-center">
            HENNES
            <img
              src="./assets/images/[3]_Footer/Logo.png"
              alt="Logo"
              className="w-16 h-16"
            />
            MAURITZ
          </a>
        </h1>
        <div className="gap-2 mx-[18rem] mt-2 w-[55rem]">
          <p className="text-center">
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
