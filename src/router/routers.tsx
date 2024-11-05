import {createBrowserRouter} from "react-router-dom";

import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import TodosPage from "../pages/TodosPage";



export const  router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout/>,
       children: [
        {index: true , element: <HomePage/>},
        {path: 'todos', element: <TodosPage/>}

           ]
    }
]);

export default router;