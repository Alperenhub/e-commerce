import { DeliveryDining, Payments } from "@mui/icons-material";
import { Divider, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form"


export default function Review(){

    const { getValues } = useFormContext();

    return(
        <Stack spacing={2} sx={{mb:3}}>
            <Stack direction="column" divider={<Divider/>} spacing={2} sx={{my:2}}>
                <div>
                    <Typography variant="subtitle2" gutterBottom 
                    sx={{display: "flex", alignItems: "center", mb: 2, color:"text.secondary"}}>
                        <DeliveryDining color="secondary" sx={{mr:2}}/> Teslimat Bilgileri
                        </Typography>
                    <Typography gutterBottom sx={{color: "text.secondary"}}>{getValues("firstname")} {getValues("lastname")} </Typography>
                    <Typography gutterBottom sx={{color: "text.secondary"}}> {getValues("phone")} </Typography>
                    <Typography gutterBottom sx={{color: "text.secondary"}}> {getValues("addressline")} / {getValues("city")} </Typography>

                </div>
                <div>
                    <Typography variant="subtitle2" gutterBottom 
                    sx={{display: "flex", alignItems: "center", mb: 2, color:"text.secondary"}}>
                        <Payments color="secondary" sx={{mr:2}}/>  Ödeme Bilgileri</Typography>
                    <Typography gutterBottom sx={{color: "text.secondary"}}>{getValues("cardname")}  </Typography>
                    <Typography gutterBottom sx={{color: "text.secondary"}}> {getValues("cardnumber")} </Typography>
                    <Typography gutterBottom sx={{color: "text.secondary"}}> {getValues("cardexpirymonth")} </Typography>
                    <Typography gutterBottom sx={{color: "text.secondary"}}> {getValues("cardexpiryyear")} </Typography>

                </div>
            </Stack>
        </Stack>
    )
}