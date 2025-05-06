import { AppBar, Container, Toolbar, Typography } from "@mui/material";

// Header component
 export const Header = () => {
    return(
     <AppBar position="static" sx={{mb:4}}>
      <Toolbar>
        <Container>
        <Typography variant="h6">E-commerce</Typography>
        </Container>
      </Toolbar>
     </AppBar>
    )
  };