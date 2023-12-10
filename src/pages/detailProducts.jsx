import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import DetailLayouts from "../components/layouts/detailLayouts";
import ButtonBeli from "../components/elements/button/buttonBeli";

const DetailProduct = () => {
  return (
    <div>
      <Header />
      <DetailLayouts>
        <DetailLayouts.Header
          src={"./public/assets/images/produk_pria/pria1.jpeg"}
        />

        <DetailLayouts.Description />
      </DetailLayouts>
      <Footer />
    </div>
  );
};
export default DetailProduct;
