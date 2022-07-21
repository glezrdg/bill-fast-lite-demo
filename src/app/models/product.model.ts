export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}

export interface ProductItem {
  id: string,
  title: string,
  price: number,
  qty: number
}

export interface AddProductDTO extends Partial<Product> {}

