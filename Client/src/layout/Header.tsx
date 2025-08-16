import { KeyboardArrowDown, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, Container, IconButton, List, ListItem, Menu, MenuItem, Stack, Toolbar } from "@mui/material";
import { Link, NavLink } from "react-router";
import { logout } from "../features/account/accountSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { clearCart } from "../features/counter/cartSlice";
import { useState } from "react";

const links = [
  { title: "Anasayfa", to: "/"},
  { title: "Katalog", to: "/catalog"},
  { title: "Hakkımızda", to: "/about"},
  { title: "İletişim", to: "/contact"},
]

const authLinks = [
  {title: "Giriş Yap", to: "/login"},
  {title: "Kayıt Ol", to: "/register"}

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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleMenuClick(event: React.MouseEvent<HTMLButtonElement>){
    setAnchorEl(event.currentTarget);
  }

  function handleClose(){
    setAnchorEl(null);
  }

  const {cart} = useAppSelector(state=> state.cart);
  const {user} = useAppSelector(state=> state.account);
  const dispatch = useAppDispatch();


  const itemCount = cart?.cartItems?.reduce((total,item)=>total+ item.quantity,0);
    return(
     <AppBar position="static" sx={{mb:4}}>
      <Container maxWidth="lg">
      <Toolbar disableGutters sx={{display:"flex", justifyContent:"space-between"}}>
        <Box sx={{display: "flex", alignItems:"center"}}>
        <List sx={{display:"flex"}}>
          {links.map(link =>
            <ListItem key={link.to} component={NavLink} to={link.to} sx={navStyles}>{link.title}</ListItem>
          )}
        </List>
        </Box>

        <Box sx={{display:"flex", alignItems:"center"}}>
            <IconButton component={Link} to="/cart" size="large" edge="start" color="inherit">
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>

            {
              user ? (
                <>

                  <Button id="user-button" onClick={handleMenuClick}
                  endIcon={<KeyboardArrowDown/>}
                   sx={navStyles}>{user.name}</Button>

                      <Menu id="user-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                      <MenuItem component={Link} to="/orders">Orders</MenuItem>
                      <MenuItem  onClick={()=>
                    {
                    dispatch(logout())
                    dispatch(clearCart())
                    }}>Logout</MenuItem>
                      
                    </Menu>


                </>
              ):(
                <>
                 <Stack direction="row">
          {authLinks.map(link =>
            <Button key={link.to} component={NavLink} to={link.to} sx={navStyles}>{link.title}</Button>
          )}
        </Stack>
                </>
              )
            }

           
        </Box>

      </Toolbar>
      </Container>

     </AppBar>
    )
  };