import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";


axios.defaults.baseURL = "http://localhost:5173/api/";
axios.defaults.withCredentials = true;

axios.interceptors.response.use(response => {
    return response},
 (error: AxiosError)=>{
    if(!error.response){
        toast.error("Sunucuya ulaşılamadı!");
        return Promise.reject(error);
    }
    const {data, status} = error.response as AxiosResponse;
        switch(status){
            case 400:
            if(data.errors){
                const modelErrors : string[] = [];

                for(const key in data.errors){
                    modelErrors.push(data.errors[key]);
                }
                throw modelErrors;
            }
            break;
            case 401:
            toast.error(data.title);
            break;
            case 404:
            router.navigate("/not-found");
            break;
            case 500:
            router.navigate("/server-error");
            break;
            default:
                break;
            
        }
    return Promise.reject(error.response);
});


const Errors = {
    get400Error: ()=> queries.get("/error/bad-request"),
    get401Error: ()=> queries.get("/error/unauthorized"),
    get404Error: ()=> queries.get("/error/not-found"),
    get500Error: ()=> queries.get("/error/server-error"),
    getValidationError: ()=> queries.get("error/validation-error")
}


const queries = {
    get: (url: string) => axios.get(url).then((response: AxiosResponse)=> response.data),
    post: (url: string, body: {}) => axios.post(url,body).then((response: AxiosResponse)=> response.data),
    put: (url: string, body: {}) => axios.put(url, body).then((response: AxiosResponse)=> response.data),
    delete: (url: string) => axios.delete(url).then((response: AxiosResponse)=> response.data),
}

const Catalog = {
    list: () => queries.get("Products"),
    details: (id: number) => queries.get(`Products/${id}`)
}

const Cart = {
    get: ()=> queries.get("cart"),
    //addItem'da değişkenleri api'deki isimleriyle yazıyoruz.
    addItem: (productId:number, quantity =1) => queries.post(`cart?productId=${productId}&quantity=${quantity}`, {}),
    deleteItem: (productId: number, quantity =1) => queries.delete(`cart?productId=${productId}&quantity=${quantity}`)
}

const Account = {
    login:(formData:any) => queries.post("account/login",formData),
    register:(formData:any) => queries.post("account/register",formData),
}

const requests = {
    Catalog, Errors, Cart, Account
}

export default requests;