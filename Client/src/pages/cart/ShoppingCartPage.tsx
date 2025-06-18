import { useState } from "react"
import { Alert, CircularProgress, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { AddCircleOutline, AddCircleOutlineOutlined, Delete, RemoveCircleOutline } from "@mui/icons-material";
import { useCartContext } from "../../context/CartContext";
import { LoadingButton } from "@mui/lab";
import requests from "../../api/request";

export default function ShoppingCartPage(){

    const [loading, setLoading] = useState(false);

    const { cart, setCart } = useCartContext();

    function handleAddItem(productId: number){

        setLoading(true);

        requests.Cart.addItem(productId)
        .then(cart => setCart(cart))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false));

    }

    function handleDeleteItem(productId: number, quantity = 1){
        setLoading(true);

        requests.Cart.deleteItem(productId, quantity)
            .then((cart)=> setCart(cart))
            .catch(error => console.log(error))
            .finally(()=> setLoading(false));
    }
  

     if(loading) return <CircularProgress/>

    if(cart?.cartItems?.length === 0) return <Alert severity="warning">Sepetinizde ürün yok</Alert>

    return (
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">Fiyat</TableCell>
            <TableCell align="right">Adet</TableCell>
            <TableCell align="right">Toplam</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.cartItems?.map((item) => (
            <TableRow
              key={item.productId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={`http://localhost:5173/images/${item.imageUrl}`} style={{height:60}}/>
              </TableCell>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">
                <LoadingButton loading={loading} onClick={()=> handleAddItem(item.productId)}>
                <AddCircleOutline/>
                </LoadingButton>
                {item.quantity}
                <LoadingButton loading={loading} onClick={()=> handleDeleteItem(item.productId)}>
                <RemoveCircleOutline/>
                </LoadingButton>
                </TableCell>
              <TableCell align="right">{item.price*item.quantity} ₺</TableCell>
              <TableCell align="right">
                <LoadingButton loading={loading} onClick={()=> handleDeleteItem(item.productId,item.quantity)}>

                    <Delete/>

                </LoadingButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}