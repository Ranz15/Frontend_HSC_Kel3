import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import MenLayouts from "../components/layouts/menLayout";
import PageDirectory from "../components/fragments/pageDirectory";
import AsideLeftProduct from "../components/fragments/asideLeftProdcuts";
import HotCard from "../components/fragments/hotCard";
import AsideHeader from "../components/elements/asideLeft/asideHeader";
import List from "../components/elements/asideLeft/asideList";
import Navbar from "../components/layouts/navbar";
import DiscountBanner from "../components/fragments/discountBanner";

const MenPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <PageDirectory />
      <MenLayouts>
        <AsideLeftProduct>
          <AsideHeader title="New Arrivals">
            <List>View all</List>
            <List>Clothes</List>
            <List>Shoes & Accessories</List>
          </AsideHeader>
          <AsideHeader title="Shop by Product">
            <List>View all</List>
            <List>T-Shirts & Vests</List>
            <List>Hoodies & Sweatshirts</List>
            <List>Trousers</List>
            <List>Shirts</List>
            <List>Basics</List>
            <List>Shorts</List>
            <List>Jeans</List>
            <List>Cardigans & Jumpers</List>
            <List>Jacket & Coats</List>
            <List>Blazers & Suits</List>
            <List>Sportswear</List>
            <List>Swimwear</List>
            <List>Underwear</List>
            <List>Lounge Wear</List>
            <List>Shoes</List>
            <List>Socks</List>
            <List>Accessories</List>
          </AsideHeader>
        </AsideLeftProduct>
        <div className="w-2/3">
          <img src="../public/assets/images/Men/offers-banner1.jpg" />
          <HotCard className="bg-contentmen1 bg-contain bg-no-repeat w-full h-screen flex justify-center items-end gap-3 mt-10">
            <button className="bg-white mb-20 font-bold p-1">
              Belanja Sekarang
            </button>
          </HotCard>
          <HotCard className="bg-contentmen2 bg-contain bg-no-repeat w-full h-screen flex justify-center items-end gap-3 mt-10">
            <button className="bg-white mb-20 font-bold p-1">
              Belanja Sekarang
            </button>
          </HotCard>
          <HotCard className="bg-contentmen3 bg-contain bg-no-repeat w-full h-screen flex justify-center items-end gap-3 mt-10">
            <button className="bg-white mb-20 font-bold p-1">
              Belanja Sekarang
            </button>
          </HotCard>
        </div>
      </MenLayouts>
      <Footer />
    </div>
  );
};
export default MenPage;
