import { Grid } from "@mui/material";
import { IProduct } from "../model/IProduct";
import { Product } from "./Product";




  interface Props {
    products: IProduct,
    // addProduct: () => void;
  }

export const ProductList = ({ products}: Props) => {
    return (
      <Grid container spacing={2}>
        <p>Product info</p>
        <Grid size={{xs:6,md:4,lg:3}}>
        <Product product={products} />
        </Grid>
        {/* <button onClick={addProduct}>Ürün ekle</button> */}
      </Grid>
    );
  };