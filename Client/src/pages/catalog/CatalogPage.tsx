import { useEffect, useState } from "react"
import { IProduct } from "../../model/IProduct"
import { ProductList } from "./ProductList";
import requests from "../../api/request";

export default function CatalogPage(){
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(()=>{
        requests.Catalog.list()
        .then((data)=> setProducts(data));
    }, []);

    return(
        <ProductList products={products} />
    );
}