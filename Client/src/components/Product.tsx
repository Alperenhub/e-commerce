import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../model/IProduct";
import { AddShoppingCart, Search } from "@mui/icons-material";

interface Props{
  product: IProduct[]
}

export const Product = ({ product }: Props) => {

  return (
    <>
      {product.map(product=>(
        
      <Card>
        <CardMedia sx={{height:160, backgroundSize:"contain"}} image={`http://localhost:5173/images/${product.imageUrl}`}/>
        <CardContent>
        <Typography gutterBottom variant="h6" component="h2" color="text-secondary">
          {product.name}
        </Typography> 
        <Typography gutterBottom variant="h6" component="h2" color="text-secondary">
          {product.description}
        </Typography> 
        <Typography variant="body2" component="h2" color="text-secondary">
          {(product.price/100).toFixed(2)}$
        </Typography> 
        </CardContent> 
        <CardActions>
          <Button variant="outlined" size="small" startIcon={<AddShoppingCart/>}>Add to Cart</Button>
          <Button variant="outlined" size="small" startIcon={<Search/>}>View</Button>

        </CardActions>   
      </Card>

      ))
      }

    </>
  );
};