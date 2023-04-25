import { useRoutes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";
import Layout from "../component/Layout";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";
export default function Route() {

    return  useRoutes([
        {
            path : '/',
            element : <Layout />,
            children: [      
                {
                    path : '/',
                    element : <Navigate to = '/product' replace />
                },                
                {
                    path : '/product',
                    element : <Product />
                },
                {
                    path : '/cart',
                    element : <Cart />
                },
                {
                    path : '/detail/:id',
                    element : <Detail />
                }                
            ]
        },
        {
            path : '/login',
            element : <Login />
        },
        {
            path : '*',
            element : <NotFound />
        }        
    ]);
};