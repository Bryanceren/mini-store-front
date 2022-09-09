import { useRouter } from "next/router";
import { Fragment, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../store/reducers/cartSlice";
import Button from "../common/Button/Button";
import CartItem from "./CartItem";

const Cart = () => {
  const cartState = useSelector((state) => state.persisted.cart);
  const authState = useSelector((state) => state.persisted.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const totalAmount = `$${cartState.totalAmount.toFixed(2)}`;

  const processPaymentHandler = (e) => {
    if (authState.token == null) {
      router.push("/signin");
    }
    console.log("a");
  };

  const cartItemAddHandler = (item) => {
    dispatch(addProduct({ ...item, amount: 1 }));
  };
  const cartItemRemoveHandler = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="flex items-center justify-center pt-10 px-10">
      <div className="flex flex-col max-w-[70rem] w-full">
        <div className="flex justify-between flex-col md:flex-row mb-10">
          <h1 className="text-3xl font-bold ">Your Cart</h1>
          <div className="md:max-w-[20rem] w-full flex shadow-md p-5 flex-col">
            <span className="font-semibold mb-2 flex justify-between items-center">
              <span>Total Amount:</span>{" "}
              <span className="text-2xl">{totalAmount || "$0.00"}</span>
            </span>
            <Button
              disabled={cartState.items.length > 0 ? false : true}
              onClick={processPaymentHandler}
            >
              Process Payment
            </Button>
          </div>
        </div>
        {cartState.items.length > 0 ? (
          cartState.items.map((product) => (
            <Fragment key={product.id}>
              <CartItem
                image={product.image}
                name={product.title}
                price={product.price}
                amount={product.amount}
                onAdd={cartItemAddHandler.bind(null, product)}
                onRemove={cartItemRemoveHandler.bind(null, product.id)}
              />
              <hr className="my-5" />
            </Fragment>
          ))
        ) : (
          <span className="font-semibold text-2xl">
            You have no items in your cart!
          </span>
        )}
      </div>
    </div>
  );
};
export default memo(Cart);
