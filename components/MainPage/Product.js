import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducers/cartSlice";
import Button from "../common/Button/Button";

const ratings = [1, 2, 3, 4, 5];
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = (newProduct) => {
    dispatch(addProduct({ ...newProduct, amount: 1 }));
  };
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
      <Link href={"/product/" + product.id}>
        <div className="font-semibold cursor-pointer">
          {product.title.substring(0, 30)}
          {product.title.length >= 30 && "..."}
        </div>
      </Link>
      <span className="bg-gray-100  text-xs mr-2 px-2.5 py-0.5 rounded-full w-fit mt-1">
        {product.category}
      </span>
      <div className="inline-flex mt-2">
        {ratings.map((star, index) =>
          star <= parseInt(product.rating.rate) ? (
            <AiFillStar className="fill-yellow-300" key={"starFill" + index} />
          ) : (
            <AiOutlineStar className="" key={"starOutline" + index} />
          )
        )}
      </div>
      <br />
      <div className="flex justify-between mt-auto items-end">
        <span className="font-bold text-xl ">{"$ " + product.price}</span>
        <Button onClick={() => addToCart(product)}>Add</Button>
      </div>
    </div>
  );
};

export default Product;
