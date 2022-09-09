import React, { useEffect, useState } from "react";
import Product from "./Product";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaFrown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoadingState,
  setProductData,
} from "../../store/reducers/productsSlice";
import MainPageAPI from "./MainPageAPI";
import Filters from "./Filters";

const mainPageApi = new MainPageAPI("https://fakestoreapi.com");
const MainPage = () => {
  const products = useSelector((state) => state.products.productData);
  const loadingState = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();

  const getProducts = async () => {
    dispatch(setLoadingState(true));
    const productsData = await mainPageApi.getProducts();
    dispatch(setProductData(productsData));
    dispatch(setLoadingState(false));
  };

  useEffect(() => {
    if (products.length == 0) {
      getProducts();
    }
  }, []);

  return (
    <div className=" block lg:flex justify-center max-w-[100rem] mx-auto p-4 sm:p-8 gap-2">
      <Filters />
      {!loadingState ? (
        products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 col-span-1">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <div className="w-full flex items-center text-xl font-semibold justify-center text-center p-10">
            No products found!
            <FaFrown className="ml-5" />
          </div>
        )
      ) : (
        <div className="w-full flex items-center text-xl font-semibold justify-center text-center p-10">
          Loading products, please wait...
          <AiOutlineLoading3Quarters className="animate-spin ml-5" />
        </div>
      )}
    </div>
  );
};

export default MainPage;
