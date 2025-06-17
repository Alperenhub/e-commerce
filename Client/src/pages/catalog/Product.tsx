import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../../model/IProduct";
import { AddShoppingCart, Search } from "@mui/icons-material";
import { Link } from "react-router";
import { useState } from "react";
import requests from "../../api/request";
import { LoadingButton } from '@mui/lab';
import { useCartContext } from "../../context/CartContext";


interface Props{
  product: IProduct[]
}

export const Product = ({ product }: Props) => {

  const [loading,setLoading] = useState(false);

  const { setCart } = useCartContext();
  
  function handleAddItem(productId: number){
    
    setLoading(true);

    requests.Cart.addItem(productId)
      .then(cart => setCart(cart))
      .catch(error => console.log(error))
      .finally(()=> setLoading(false));
  }

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

          <LoadingButton
          variant="outlined"
          loadingPosition="start"
          size= "small"
          startIcon={<AddShoppingCart/>} 
          loading={loading} 
          onClick={()=> handleAddItem(product.id)}>Sepete Ekle</LoadingButton> 

          <Button component={Link} to={`/catalog/${product.id}`} variant="outlined" size="small" startIcon={<Search/>}>View</Button>

        </CardActions>   
      </Card>

      ))
      }

    </>
  );
};