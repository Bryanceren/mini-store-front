import React, { useEffect, useState } from "react";
import { HttpClient } from "../../services/httpClient";
import Form from "../common/Form/Form";
import Product from "./Product";
import { FormCheckBox } from "../common/FormCheckBox/FormCheckBox";
import { FormInput } from "../common/FormInput/FormInput";
import { IoSearchOutline } from "react-icons/io5";
import { AiFillFilter, AiOutlineClear } from "react-icons/ai";
const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
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
  const getCategories = async () => {
    const response = await HttpClient(
      "/products/categories",
      {},
      "get",
      "https://fakestoreapi.com"
    );
    if (response?.status === 200) {
      setCategories(response.data);
    }
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <div className=" block lg:flex justify-center max-w-[100rem] mx-auto p-4 sm:p-8 gap-2">
      <div className="h-[30rem] md:w-full col-span-1 lg:max-w-sm flex p-8 flex-col">
        <span className="text-2xl font-semibold">Filters</span>
        <hr className="my-5" />
        <span className="font-semibold mb-3">By Category</span>
        <Form onSubmit={onSubmit} onError={onError} id="searchForm">
          {categories.map((category) => (
            <FormCheckBox title={category} name="categorySelect" />
          ))}
          <hr className="my-5" />
          <span className="font-semibold mb-3">By Name</span>
          <FormInput title={"Search by name"} name="search" />
        </Form>
        <div className="inline-flex">
          <button
            className="p-3 flex items-center gap-2 font-semibold hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
            type="submit"
            form="searchForm"
          >
            <AiFillFilter />
            Apply Filters
          </button>
          <button
            className="p-3 flex items-center gap-2 font-semibold hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
            type="submit"
            form="my-form"
            onClick={() => getProducts()}
          >
            <AiOutlineClear />
            Clear Filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 col-span-1">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
