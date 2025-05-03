import { Product } from "../App";

type ProductListProps = {
    products: ProductType[];
    addProduct: () => void;
  };

  type ProductType = {
    name: string;
    price: number;
  };

export const ProductList = ({ products, addProduct }: ProductListProps) => {
    return (
      <div>
        <p>Product info</p>
        <Product products={products} />
        <button onClick={addProduct}>Ürün ekle</button>
      </div>
    );
  };