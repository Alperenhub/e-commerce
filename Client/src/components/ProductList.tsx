import { IProduct } from "../model/IProduct";
import { Product } from "./Product";

// type ProductListProps = {
//     products: ProductType[];
//     addProduct: () => void;
//   };

  // type ProductType = {
  //   name: string;
  //   price: number;
  //   description:string;
  // };

  interface Props {
    products: IProduct[],
    addProduct: () => void;
  }

export const ProductList = ({ products, addProduct }: Props) => {
    return (
      <div>
        <p>Product info</p>
        <Product products={products} />
        <button onClick={addProduct}>Ürün ekle</button>
      </div>
    );
  };