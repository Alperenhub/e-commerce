import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../../model/IProduct";
import { AddShoppingCart, Search } from "@mui/icons-material";
import { Link } from "react-router";
import { LoadingButton } from '@mui/lab';
import { currencyTRY } from "../../utils/formatCurrency";
import { addItemToCart } from "../counter/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";


interface Props{
  product: IProduct[]
}

export const Product = ({ product }: Props) => {

  const {status} = useAppSelector(state=> state.cart);

  const dispatch = useAppDispatch();
  


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
          {currencyTRY.format(product.price)}
        </Typography> 
        </CardContent> 
        <CardActions>

          <LoadingButton
          variant="outlined"
          loadingPosition="start"
          size= "small"
          startIcon={<AddShoppingCart/>} 
          loading={status == "pendingAddItem" + product.id} 
          onClick={()=> dispatch(addItemToCart({productId: product.id}))}>Sepete Ekle</LoadingButton> 

          <Button component={Link} to={`/catalog/${product.id}`} variant="outlined" size="small" startIcon={<Search/>}>View</Button>

        </CardActions>   
      </Card>

      ))
      }

    </>
  );
};