import {createBrowserRouter} from "react-router-dom";
import AuthResourcesPage from "../pages/AuthResourcesPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";


export const routes =  createBrowserRouter([
    {
        path:'/', element:<MainLayout/>, children:[
            {index: true, element:<HomePage/>},
            {path: '/login',element:<LoginPage/>},
            {path: '/auth/resources', element: <AuthResourcesPage/>}
        ]
    }
])