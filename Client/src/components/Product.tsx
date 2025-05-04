type ProductProps = {
    products: ProductType[];
  };

  type ProductType = {
    name: string;
    price: number;
    description: string;
  };

export const Product = ({ products }: ProductProps) => {
  return (
    <>
      {products.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <h5>{item.price}</h5>
          <h3>{item.description}</h3>
        </div>
      ))}
    </>
  );
};