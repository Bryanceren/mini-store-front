import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

const BottomNavigation = () => {
  return (
    <div className="fixed  w-full justify-center bg-white bg-opacity-75 bottom-0 mx-auto sm:hidden p-3">
      <div className="flex justify-around">
        <button>
          <BsHouseDoor color="black" size={25} />
        </button>
        <button>
          <AiOutlineShoppingCart color="black" size={25} />
        </button>
        <button>
          <IoSearchOutline color="black" size={25} />
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
