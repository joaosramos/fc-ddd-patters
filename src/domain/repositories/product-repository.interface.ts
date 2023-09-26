import Product from "../entity/product";
import RepositoryInterface from "./repository-interface";

// aqui você pode criar conexões exclusívas de produto
export default interface ProductRepositoryInterface
  extends RepositoryInterface<Product> {}
