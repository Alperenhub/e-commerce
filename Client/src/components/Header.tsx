import { AppBar, Toolbar, Typography } from "@mui/material";

// Header component
 export const Header = ({products, addProduct}: any) => {
    return(
      <div>
        <h1>Header [{products.length}]</h1>
        <button onClick={addProduct} />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">E-commerce</Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  };