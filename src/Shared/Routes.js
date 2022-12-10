import { createBrowserRouter } from "react-router-dom";
import Contract from "../Page/Contract";
import Home from "../Page/Home/Home";
import Project from "../Page/Project";
import Service from "../Page/Service";
import Main from "./Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/project',
                element: <Project></Project>
            },
            {
                path: '/contract',
                element: <Contract></Contract>
            }
        ]
    }
])


export default router;