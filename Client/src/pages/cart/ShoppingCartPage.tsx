import { useEffect } from "react"
import requests from "../../api/request"

export default function ShoppingCartPage(){

    useEffect(()=>{
        requests.Cart.get()
        .then(cart => console.log(cart))
    })

    return (
        <h1>Shopping cart</h1>
    )
}