import Image from "next/image";
import { IoAdd, IoRemove } from "react-icons/io5";
import Button from "../common/Button/Button";

const CartItem = (props) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="inline-flex items-center gap-4">
          <div className="bg-contain max-w-[5rem] w-full">
            <Image
              src={props.image}
              layout="responsive"
              width="100"
              height="100"
            ></Image>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{props.name}</span>
            <div className="inline-flex">
              <span>{`$${props.price.toFixed(2)}`}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-end">
            <Button onClick={props.onAdd} variants="clear">
              <IoAdd />
            </Button>
            <span className="py-3 px-4 font-semibold ">{props.amount}</span>
            <Button onClick={props.onRemove} variants="clear">
              <IoRemove />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
