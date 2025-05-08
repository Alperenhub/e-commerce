import { useEffect, useState } from "react";
import { IProduct } from "./model/IProduct";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import ButtonUsage from "./components/ButtonUsage";
import { Container, CssBaseline } from "@mui/material";
import { error } from "jquery";



function App() {
  const [products, setProducts] = useState<IProduct[]>([]);


  useEffect(()=>{
    fetch("http://localhost:5173/api/Products")
    .then((res)=>{
      if(!res.ok){
        throw new Error("Veriler çekilemedi.");
      }
      return res.json();
    })
    .then((data)=>setProducts(data))
    .catch((err)=> console.log(err, " fetch hatası"));
  },[])


  // const addProduct = () => {
  //   setProducts([
  //     ...products,
  //     {
  //       name: "product 4",
  //       price: 4000,
  //       id: 5,
  //       description: "aciklama",
  //       isActive: true,
  //       imageUrl: "xd.png",
  //       stock: 15
  //     },
  //   ]);
  // };

  return (
    <>
    <CssBaseline/> 
      <Header/>
      <Container>
      <p>Hor görme hiç bu keli</p>
      <ProductList products={products} />
      </Container>

      <ButtonUsage/>
    </>
  );
}

//Container içine koyduklarımız responsive
//sayfadaki margin ve paddingleri sıfırlar CssBaseline
// Props tipi tanımı




export default App;
