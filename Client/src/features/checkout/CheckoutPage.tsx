import { Grid, Paper } from "@mui/material";
import Info from "./Info";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

export default function CheckoutPage(){

    return(

        <Paper>

        <Grid container sx={{p:4}} spacing={2}>
            <Grid size={4}>
                <Info/>
            </Grid>
            <Grid size={8}>
                <AddressForm/>
                <PaymentForm/>
                <Review/>
            </Grid>
        </Grid>

        </Paper>

    )
}