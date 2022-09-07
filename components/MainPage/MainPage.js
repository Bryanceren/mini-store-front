import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { HttpClient } from "../../services/httpClient";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const ratings = [1, 2, 3, 4, 5];
  useEffect(() => {
    const getProducts = async () => {
      const response = await HttpClient(
        "/products",
        {},
        "get",
        "https://fakestoreapi.com"
      );
      if (response?.status === 200) {
        setProducts(response.data);
      }
    };
    getProducts();
  }, []);

  return (
    <div className=" block lg:flex justify-center max-w-[100rem] mx-auto p-8 gap-2">
      <div className="h-60 md:w-full col-span-1 bg-gray-100 lg:max-w-sm">
        filtros
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 col-span-1">
        {products.map((product) => (
          <div
            className="col-span-1  p-6 h-[28rem] justify-center flex flex-col"
            key={product.id}
          >
            <Image
              src={product.image}
              layout="responsive"
              width="100"
              height="100"
              className="bg-contain"
            ></Image>
            <div className="font-semibold ">
              {product.title.substring(0, 30)}
              {product.title.length >= 30 && "..."}
            </div>
            <span class="bg-gray-100  text-xs mr-2 px-2.5 py-0.5 rounded-full w-fit mt-1">
              {product.category}
            </span>
            <div className="inline-flex mt-2">
              {ratings.map((star) =>
                star <= parseInt(product.rating.rate) ? (
                  <AiFillStar className="fill-yellow-300" />
                ) : (
                  <AiOutlineStar className="" />
                )
              )}
            </div>
            <br />
            <div className="flex justify-between mt-auto items-end">
              <span className="font-bold text-xl ">{"$ " + product.price}</span>
              <button className="py-2 px-4 font-semibold bg-primary text-white block active:scale-95 transition-all transform">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
