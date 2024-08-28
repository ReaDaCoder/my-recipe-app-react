import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes(){
    let user = null
    return user ? <Outlet/> : <Navigate to="/login"/>
}
