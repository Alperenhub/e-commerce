import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";


export default function PaymentForm(){

    const {register, formState:{errors} } = useFormContext();

    return(
        <Grid container spacing={3}>
            <Grid sx={{sx: 12, md: 6}}>
                <TextField
                        {...register("cardname",{required: "Card name is required"} )}
                        label="Enter card name"
                        fullWidth autoFocus 
                        sx={{mb:2}}
                        size="small"
                        error={!!errors.card_name}
                        >
                </TextField>
            </Grid>

             <Grid sx={{sx:12, md:6}}>
                <TextField
                        {...register("cardnumber",{required: "card number is required"} )}
                        label="Enter card number"
                        fullWidth 
                        sx={{mb:2}}
                        size="small"
                        error={!!errors.card_number}
                        >
                </TextField>
            </Grid>
             <Grid sx={{sx:6, md:4}}>
                <TextField
                        {...register("cardexpiremonth",{required: "Expiry month is required"} )}
                        label="Enter expiry date"
                        fullWidth 
                        sx={{mb:2}}
                        size="small"
                        error={!!errors.card_expiry_date}
                        >
                </TextField>
            </Grid>
            <Grid sx={{sx:6, md:4}}>
                <TextField
                        {...register("cardexpireyear",{required: "Expiry year is required"} )}
                        label="Enter expiry date"
                        fullWidth 
                        sx={{mb:2}}
                        size="small"
                        error={!!errors.card_expiry_date}
                        >
                </TextField>
            </Grid>
             <Grid sx={{sx:12, md:4}}>
                <TextField
                        {...register("cardcvc",{required: "Cvv is required"} )}
                        label="Enter cvv"
                        fullWidth 
                        sx={{mb:2}}
                        size="small"
                        error={!!errors.cardcvc}
                        >
                </TextField>
            </Grid>
             
        </Grid>
    )
}