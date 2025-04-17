const products = [
  {name:"product 1", price:1000},
  {name:"product 2", price:2000},
  {name:"product 3", price:3000},
];

function App() {

  
  return (
    <>
      <Header/>
      <p>Hor görme hiç bu keli</p>
      <ProductList/>
    </>
  )
}

const Header = () =>{
  return(
  <h1>Header</h1>
  )
} 

const ProductList=()=>{
  return(
    <div>
    <p>Product info</p>
    <Product/>
    </div>
  )
}

const Product = () => {
  return(
    <>
    {
      products.map((item,index) => 

        <div key={index}>

         
          <h3>{item.name}</h3>
          <h5>{item.price}</h5>
          
          
         </div> 

      )      
    }

    </>
  )
}


export default App
