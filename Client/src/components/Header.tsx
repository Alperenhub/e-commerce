import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router";

const links = [
  { title: "Home", to: "/"},
  { title: "Catalog", to: "/catalog"},
  { title: "About", to: "/about"},
  { title: "Contact", to: "/contact"},
]

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  "&:hover":{
    color: "text.primary"
  },
  // & = bu bileşenin kendisi anlamına geliyor.
  "&.active":{
    color:"warning.main"
  }
}


// Header component
 export const Header = () => {
    return(
     <AppBar position="static" sx={{mb:4}}>
      <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
        <Box sx={{display: "flex", alignItems:"center"}}>
        <Typography variant="h6">E-commerce</Typography>
        <List sx={{display:"flex"}}>
          {links.map(link =>
            <ListItem key={link.to} component={NavLink} to={link.to} sx={navStyles}>{link.title}</ListItem>
          )}
        </List>
        </Box>

        <Box sx={{display:"flex", alignItems:"center"}}>
            <IconButton component={Link} to="/cart" size="large" edge="start" color="inherit">
              <Badge badgeContent="2" color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>
        </Box>

      </Toolbar>
     </AppBar>
    )
  };