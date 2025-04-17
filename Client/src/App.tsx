import { useEffect, useState } from "react";

// Ürün tipi tanımı
type ProductType = {
  name: string;
  price: number;
};

function App() {
  const [products, setProducts] = useState<ProductType[]>([
    { name: "product 1", price: 1000 },
    { name: "product 2", price: 2000 },
    { name: "product 3", price: 3000 },
  ]);

  useEffect(() => {
    fetch("http://localhost:5173/api/Products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Veri çekilemedi");
        }
        return response.json();
      })
      .then((data: ProductType[]) => setProducts(data))
      .catch((error) => console.error("Fetch hatası:", error));
  }, []);

  const addProduct = () => {
    setProducts([
      ...products,
      { name: "product 4", price: 4000 },
    ]);
  };

  return (
    <>
      <Header />
      <p>Hor görme hiç bu keli</p>
      <ProductList products={products} addProduct={addProduct} />
    </>
  );
}

// Header component
const Header = () => {
  return <h1>Header</h1>;
};

// Props tipi tanımı
type ProductListProps = {
  products: ProductType[];
  addProduct: () => void;
};

const ProductList = ({ products, addProduct }: ProductListProps) => {
  return (
    <div>
      <p>Product info</p>
      <Product products={products} />
      <button onClick={addProduct}>Ürün ekle</button>
    </div>
  );
};

// Props tipi tanımı
type ProductProps = {
  products: ProductType[];
};

const Product = ({ products }: ProductProps) => {
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
