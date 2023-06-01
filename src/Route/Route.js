import { createBrowserRouter } from "react-router-dom";
import Login from "../layout/login/Login/Login";
import Register from "../layout/login/Register/Register";
import Home from "../pages/Home/Home";
import Destination from "../pages/shared/Destination/Destination";
import Main from "../layout/Main/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/countries')
            },

            {
                path: 'destination',
                element: <Destination></Destination>
            }

        ])
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
])

