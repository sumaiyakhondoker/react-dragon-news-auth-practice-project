import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import NewsDetails from "../pages/NewsDetails/NewsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/news.json')
            },
            {
                path:'/news/:id',
                element: <NewsDetails></NewsDetails>,
                loader: ()=> fetch('/news.json')
            }
        ]
        
    }
])

export default router;