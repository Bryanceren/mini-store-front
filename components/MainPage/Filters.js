import React, { useEffect, useState } from "react";
import { AiFillFilter, AiOutlineClear } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoadingState,
  setProductCategories,
  setProductData,
} from "../../store/reducers/productsSlice";
import Button from "../common/Button/Button";
import Form from "../common/Form/Form";
import { FormCheckBox } from "../common/FormCheckBox/FormCheckBox";
import { FormInput } from "../common/FormInput/FormInput";
import MainPageAPI from "./MainPageAPI";

const mainPageApi = new MainPageAPI("https://fakestoreapi.com");
const Filters = () => {
  const products = useSelector((state) => state.products.productData);
  const categories = useSelector((state) => state.products.categories);
  const [formKey, setFormKey] = useState(1);
  const dispatch = useDispatch();

  const getProducts = async () => {
    dispatch(setLoadingState(true));
    const productsData = await mainPageApi.getProducts();
    dispatch(setProductData(productsData));
    dispatch(setLoadingState(false));
  };
  const getCategories = async () => {
    const categoriesData = await mainPageApi.getCategories();
    dispatch(setProductCategories(categoriesData));
  };

  const getProductsByName = async (products, name) => {
    const productsData = await mainPageApi.getProductsByName(products, name);
    dispatch(setProductData(productsData));
  };

  const getProductsByCategory = async (category) => {
    const productsData = await mainPageApi.getProductsByCategory(category);
    dispatch(setProductData(productsData));
    return productsData;
  };

  const resetFilters = () => {
    getProducts();
    setFormKey(formKey++);
  };
  useEffect(() => {
    if (categories.length == 0) {
      getCategories();
    }
  }, []);

  const onSubmit = async (data) => {
    let productsAux = [];
    if (data.categorySelect) {
      productsAux = await getProductsByCategory(data.categorySelect);
    }
    if (data.search) {
      //se usa productos de categoria auxiliar para asegurar
      //que no se use el estado anterior de productos en caso
      //que el estado global aun no se haya actualizado
      getProductsByName(
        productsAux.length ? productsAux : products,
        data.search
      );
    }
  };
  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <div className="h-[30rem] md:w-full col-span-1 lg:max-w-sm flex p-8 flex-col">
      <span className="text-2xl font-semibold">Filters</span>
      <hr className="my-5" />
      <span className="font-semibold mb-3">By Category</span>
      <Form onSubmit={onSubmit} onError={onError} id="searchForm" key={formKey}>
        {categories.map((category, index) => (
          <FormCheckBox
            title={category}
            name="categorySelect"
            key={"CheckBox" + index}
          />
        ))}
        <hr className="my-5" />
        <span className="font-semibold mb-3">By Name</span>
        <FormInput title={"Search by name"} name="search" />
      </Form>
      <div className="inline-flex">
        <Button variants="clear" type="submit" form="searchForm">
          <AiFillFilter />
          Apply Filters
        </Button>
        <Button
          variants="clear"
          type="submit"
          form="my-form"
          onClick={() => resetFilters()}
        >
          <AiOutlineClear />
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default Filters;
