import React, { useEffect, useState } from "react";
import Card from "../components/fragments/Card";
import Header from "../components/layouts/Header";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/layouts/footer";
import Navbar from "../components/fragments/Navbar/navbar";

const Products = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const category = queryParams.get("category");
  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const getApiProduct = async () => {
    const filterQuery = category ? `?category=${category}` : "";
    const response = await fetch(
      `https://65130d0f8e505cebc2e982ab.mockapi.io/api/Product${filterQuery}`
    );
    const data = await response.json();
    setDataProduct(data);
  };

  useEffect(() => {
    getApiProduct();
  }, [category]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderProducts = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return dataProduct
      .slice(startIndex, endIndex)
      .map((item, key) => (
        <Card
          key={key}
          imgLink={item.image}
          title={item.name}
          price={item.price}
          onClick={() => (window.location.href = "/products-detail")}
        />
      ));
  };

  return (
    <>
      <Header />
      <Navbar className={"flex flex-row"} />
      <div className="mx-auto pt-20 pb-20">
        <div className="flex flex-wrap gap-5 px-9">{renderProducts()}</div>
        {dataProduct.length > ITEMS_PER_PAGE && (
          <div className="">
            {Array.from(
              { length: Math.ceil(dataProduct.length / ITEMS_PER_PAGE) },
              (_, index) => (
                <button
                  key={index + 1}
                  className={`mx-2 px-4 py-2 rounded ${
                    currentPage === index + 1
                      ? "bg-gray-800 text-white"
                      : "bg-gray-300"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Products;
