import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline, IoPerson } from "react-icons/io5";
import Form from "../Form/Form";
import { FormInput } from "../FormInput/FormInput";
const Navigation = () => {
  const handleSearchClick = () => {};
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <nav className="w-full bg-dark text-sm md:text-base pt-6 sm:pt-0">
      <div className=" text-white px-4 md:px-20 justify-between hidden sm:flex">
        <div className="flex items-center gap-2 p-3 hover:bg-primary  transition-all duration-300 active:scale-95 hover:translate-x-1">
          <FiShoppingCart
            className="mr-3 text-white fill-primary"
            size={25}
          ></FiShoppingCart>
          <span className="text-sm md:text-xl">Mini Store</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <Form onSubmit={onSubmit} onError={onError} id="my-form">
            <FormInput
              solo={true}
              placeholder="Search"
              title={"Search"}
              name="search"
            ></FormInput>
          </Form>
          <button
            className="p-3 hover:bg-primary transition-all duration-300 active:scale-95 hover:translate-x-1"
            type="submit"
            form="my-form"
          >
            <IoSearchOutline size={25} />
          </button>
          <button className="p-3 hover:bg-primary  transition-all duration-300 active:scale-95 hover:translate-x-1">
            <AiOutlineShoppingCart size={25} />
          </button>
        </div>
      </div>
      <hr className="hidden sm:block" />
      <div className="flex text-white sm:px-4 md:px-20 justify-between">
        <div className="flex items-center gap-1 sm:gap-3 text-sm md:text-xl pl-3">
          <button className="p-2 sm:p-4 hover:bg-primary  transition-all duration-300 active:scale-95 hover:translate-x-1">
            Categories
          </button>
        </div>
        <div className="flex items-center gap-3">
          <IoPerson></IoPerson>
          <span className=" font-light cursor-default select-none hover:scale-105 transition-all hidden sm:block">
            Guest
          </span>
          {/* <button className="text-sm md:text-xl group hover:bg-primary p-4 transition-all duration-300">
            SIGN OUT
            <span className="border-b-2 block w-0 mt-1 group-hover:w-full transition-all duration-300 transform mx-auto"></span>
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
