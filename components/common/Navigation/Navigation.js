import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
const Navigation = () => {
  const cartState = useSelector((state) => state.persisted.cart);
  const cartItemsQty = cartState.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <nav className="w-full bg-dark text-sm md:text-base pt-6 sm:pt-0">
      <div className=" text-white px-4 md:px-20 justify-between hidden sm:flex">
        <Link href={"/"}>
          <Button variants="translate">
            <FiShoppingCart
              className="mr-3 text-white fill-primary"
              size={25}
            ></FiShoppingCart>
            <span className="text-sm md:text-xl">Mini Store</span>
          </Button>
        </Link>
        <div className="inline-flex items-center gap-2">
          <Link href={"/cart/"}>
            <Button variants="translate" size="lg">
              <AiOutlineShoppingCart size={25} />
              <span className="border border-white rounded-full text-xs px-1 absolute top-1 right-2 bg-dark">
                {cartItemsQty}
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <hr className="hidden sm:block" />
      <div className="flex text-white sm:px-4 md:px-20 py-3 justify-end">
        <div className="flex items-center gap-3">
          <IoPerson></IoPerson>
          <span className=" font-light cursor-default select-none hover:scale-105 transition-all hidden sm:block">
            Guest
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
