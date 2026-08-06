import type { Product } from "./product";

export interface CartItem extends Product {
  quantity: number;
}

export type cartProduct = {
  title: string;
  price: number;
  description: string;
  image: string;
  cate: "string";
  id: number;
};

export type cartProductItem = cartProduct &{
  item:cartProduct
}