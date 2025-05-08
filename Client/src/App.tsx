
import { Header } from "./components/Header";
import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";



function App() {
  

  return (
    <>
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
