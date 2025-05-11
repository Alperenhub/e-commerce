
import { Header } from "./components/Header";
import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  

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
