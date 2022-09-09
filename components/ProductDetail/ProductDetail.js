import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  AiFillStar,
  AiOutlineLoading3Quarters,
  AiOutlineStar,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducers/cartSlice";
import Button from "../common/Button/Button";
import ProductDetailAPI from "./ProductDetailAPI";

const productDetailAPI = new ProductDetailAPI("https://fakestoreapi.com");
const ratings = [1, 2, 3, 4, 5];

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const addToCart = (newProduct) => {
    dispatch(addProduct({ ...newProduct, amount: 1 }));
  };

  const getProduct = async () => {
    const productData = await productDetailAPI.getProduct(productId);
    setProduct(productData);
  };

  useEffect(() => {
    if (!productId) {
      return;
    }
    getProduct();
  }, [productId]);

  return (
    <div className="justify-center max-w-[70rem] pt-10 mx-auto sm:pt-32 px-5">
      {product ? (
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
          <div className="bg-contain max-w-[25rem] mb-2 mx-auto w-full">
            <Image
              src={product.image}
              layout="responsive"
              width="100"
              height="100"
            ></Image>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{product.title}</span>
            <hr className="my-5" />
            <div className="justify-between flex mb-5">
              <div className="inline-flex mt-2">
                {ratings.map((star, index) =>
                  star <= parseInt(product.rating.rate) ? (
                    <AiFillStar
                      className="fill-yellow-300"
                      key={"starFill" + index}
                      size={20}
                    />
                  ) : (
                    <AiOutlineStar
                      className=""
                      key={"starOutline" + index}
                      size={20}
                    />
                  )
                )}
              </div>
              <span className="bg-gray-100  text-xs mr-2 px-2.5 py-0.5 rounded-full w-fit mt-1">
                {product.category}
              </span>
            </div>
            <span>{product.description}</span>
            <hr className="mt-5 mb-10" />
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold">{"$ " + product.price}</span>
              <Button size="lg" onClick={() => addToCart(product)}>
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center text-xl font-semibold justify-center text-center p-10">
          Loading product, please wait...
          <AiOutlineLoading3Quarters className="animate-spin ml-5" />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
