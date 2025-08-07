import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../store/store";


export default function AuthGuard(){

    const {user} = useAppSelector(state => state.account);

    if(!user){
        return <Navigate to="login" state={{from: location}}/>
    }

    return(
        <Outlet/>
    )
}