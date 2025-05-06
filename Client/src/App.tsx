import { useEffect, useState } from "react";
import { IProduct } from "./model/IProduct";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import ButtonUsage from "./components/ButtonUsage";
import { Container, CssBaseline } from "@mui/material";

// Ürün tipi tanımı


function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5173/api/Products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Veri çekilemedi");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Fetch hatası:", error));
  }, []);

  const addProduct = () => {
    setProducts([
      ...products,
      {
        name: "product 4",
        price: 4000,
        id: 5,
        description: "aciklama",
        isActive: true,
        imageUrl: "xd.png",
        stock: 15
      },
    ]);
  };

  return (
    <>
    <CssBaseline/> 
      <Header products={products} addProduct={addProduct} />
      <Container>
      <p>Hor görme hiç bu keli</p>
      <ProductList products={products} addProduct={addProduct} />
      </Container>

      <ButtonUsage/>
    </>
  );
}

//Container içine koyduklarımız responsive
//sayfadaki margin ve paddingleri sıfırlar CssBaseline
// Props tipi tanımı

type ProductType = {
  name: string;
  price: number;
};


// Props tipi tanımı
type ProductProps = {
  products: ProductType[];
};


export default App;
