import { createBrowserRouter } from "react-router-dom";
import Blog from "../Page/Blog/Blog";
import Contract from "../Page/Contract/Contract";
import Home from "../Page/Home/Home";
import Project from "../Projects/Project";
import ProjectDetails from "../Projects/ProjectDetails";
import Service from "../Service/Service";
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
                path: '/about',
                element: <Service></Service>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/project',
                element: <Project></Project>
            },
            {
                path: '/contract',
                element: <Contract></Contract>
            },
            {
                path: '/details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/projects/${params.id}`),
                element: <ProjectDetails></ProjectDetails>
            }
        ]
    }
    
])


export default router;