import { Card, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../model/IProduct";

interface Props{
  product: IProduct
}

export const Product = ({ product }: Props) => {
  return (
    <>

      <Card>
        <CardMedia image={`http://localhost:5173/images/${product.imageUrl}`}/>
        <Typography gutterBottom variant="h6" component="h2" color="text-secondary">
          {product.name}
        </Typography>     
      </Card>

    </>
  );
};