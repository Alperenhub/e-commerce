// Header component
 export const Header = ({products, addProduct}: any) => {
    return(
      <div>
        <h1>Header [{products.length}]</h1>
        <button onClick={addProduct} />
  
      </div>
    )
  };