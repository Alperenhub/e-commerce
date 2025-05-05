import { AppBar, Toolbar, Typography } from "@mui/material";

// Header component
 export const Header = () => {
    return(
     <AppBar position="static" sx={{mb:4}}>
      <Toolbar>
        <Typography variant="h6">E-commerce</Typography>
      </Toolbar>
     </AppBar>
    )
  };