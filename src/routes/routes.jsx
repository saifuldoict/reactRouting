import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout.jsx";
import Home from "../components/Home.jsx";
import Login from "../pages/Login.jsx";
import Registration from "../pages/Registration.jsx";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },{
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Registration/>
            }
        ]
    }
])

export default router