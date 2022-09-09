import { HttpClient } from "../../services/httpClient";

export default class MainPageAPI {
  baseUrl;
  constructor(url) {
    this.baseUrl = url;
  }

  getProducts = async () => {
    const response = await HttpClient("/products", {}, "get", this.baseUrl);
    if (response?.status === 200) {
      return response.data;
    }
    return response;
  };

  // La api de fakestore no provee busqueda por nombre de producto
  // por lo que se tuvo que hacer una busqueda en el frontend
  getProductsByName = (array, word) => {
    if (word) {
      return array.filter((element) =>
        element.title.toLowerCase().includes(word)
      );
    } else {
      return array;
    }
  };

  getProductsByCategory = async (category = "") => {
    const response = await HttpClient(
      "/products/category/" + category,
      {},
      "get",
      this.baseUrl
    );
    if (response?.status === 200) {
      return response.data;
    }
    return response;
  };

  getCategories = async () => {
    const response = await HttpClient(
      "/products/categories",
      {},
      "get",
      this.baseUrl
    );
    if (response?.status === 200) {
      return response.data;
    }
    return response;
  };
}
