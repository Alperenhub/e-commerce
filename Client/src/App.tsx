import { useEffect, useState } from "react";
import { IProduct } from "./model/IProduct";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

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
        name: "product 4", price: 4000,
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
      <Header products={products} addProduct={addProduct} />
      <p>Hor görme hiç bu keli</p>
      <ProductList products={products} addProduct={addProduct} />
    </>
  );
}



// Props tipi tanımı




// Props tipi tanımı
type ProductProps = {
  products: ProductType[];
};

export const Product = ({ products }: ProductProps) => {
  return (
    <>
      {products.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <h5>{item.price}</h5>
        </div>
      ))}
    </>
  );
};

export default App;
