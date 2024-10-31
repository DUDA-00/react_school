import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import RecipesPage from "../pages/RecipesPage";
import MainLayout from "../layouts/MainLayout";
import CustomErrorLayout from "../layouts/CustomErrorLayout";
import ProductsDetlaisPage from "../pages/ProductsDetlaisPage";



export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>,children:[
            {index: true, element:<HomePage/>},
            {path: 'products',element:<ProductsPage/>},
            {path: 'products/:id',element:<ProductsDetlaisPage/>},
            {path: 'recipes', element: <RecipesPage/>}
        ],
        errorElement: <CustomErrorLayout/>
    }
])


