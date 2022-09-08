import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product = ({ product }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div
      className="col-span-1  p-6 h-[28rem] justify-center flex flex-col"
      key={product.id}
    >
      <div className="bg-contain max-w-[20rem] mb-2 sm:max-w-full mx-auto w-full">
        <Image
          src={product.image}
          layout="responsive"
          width="100"
          height="100"
        ></Image>
      </div>
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
  );
};

export default Product;
