
import { useEffect, useState } from "react";
import { CircularProgress, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import requests from "./api/request";
import { useAppDispatch } from "./hooks/hooks";
import { getCart, setCart } from "./features/counter/cartSlice";
import { setUser } from "./features/account/accountSlice";
import { Header } from "./layout/Header";



function App() {


  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true)

  const initApp = async () => {
    dispatch(setUser(JSON.parse(localStorage.getItem("user")!)))
    requests.Account.getUser()
    .then(user => {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user))
  })
    .catch(error => console.log(error))

    await dispatch(getCart());
  }


  useEffect(()=>{
    initApp().then(() => setLoading(false));
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


