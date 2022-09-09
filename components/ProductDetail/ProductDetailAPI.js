import { HttpClient } from "../../services/httpClient";

export default class ProductDetailAPI {
  baseUrl;
  constructor(url) {
    this.baseUrl = url;
  }

  getProduct = async (id) => {
    const response = await HttpClient(
      "/products/" + id,
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
