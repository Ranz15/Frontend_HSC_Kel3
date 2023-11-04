import { useEffect, useState } from "react";
import Card from "../components/fragments/Card";
import Header from "../components/layouts/header";
import Navbar from "../components/layouts/Navbar";
import { useLocation } from "react-router-dom";

const Products = () => {
  // State All Produk
  const [dataProduct, setDataProduct] = useState([]);

  // State Filter by route (navbar)
  const { search } = useLocation();
  const location = useLocation();
  // untuk menangkap url dari navbar
  const queryParams = new URLSearchParams(search);
  // untuk mendapatkan value kategori
  const category = queryParams.get("category");

  // Call API
  // All Product
  const getApiProduct = async () => {
    const filterQuery = category ? `?category=${category}` : "";

    const response = await fetch(
      `https://65130d0f8e505cebc2e982ab.mockapi.io/api/Product${filterQuery}`
    );
    const data = await response.json();
    setDataProduct(data);
  };

  // Use Effect
  useEffect(() => {
    getApiProduct();
  }, [category]);

  // console.log(dataProduct, "halo");

  return (
    <>
      <Header />
      <div className="container">
        <Navbar />
        {/* Produk */}
        <div className="grid grid-cols-4 gap-5 px-9">
          {dataProduct.map((item, key) => {
            return (
              <>
                <Card
                  imgLink={item.image}
                  title={item.name}
                  price={item.price}
                  key={key}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
