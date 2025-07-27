
import { useEffect, useState } from "react";
import { Header } from "./layout/Header";
import { CircularProgress, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import requests from "./api/request";
import { useAppDispatch } from "./hooks/hooks";
import { setCart } from "./features/counter/cartSlice";



function App() {


  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    requests.Cart.get()
    .then(cart => dispatch(setCart(cart)))
    .catch(error => console.log(error))
    .finally(()=> setLoading(false));
  },[]);

  if(loading) return <CircularProgress/>;

  return (
    <>
    <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
    <CssBaseline/> 
      <Header/>
      <Container>
      <p>Hor görme hiç bu keli</p>
      <Outlet/>
      </Container>

    </>
  );
}

//Container içine koyduklarımız responsive
//sayfadaki margin ve paddingleri sıfırlar CssBaseline
// Props tipi tanımı




export default App;
