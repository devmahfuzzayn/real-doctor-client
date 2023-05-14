import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import About from "../pages/About/About";
import Bookings from "../pages/Bookings/Bookings";
import Service from "../pages/Service/Service";
import CheckOut from "../pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/bookings",
                element: (
                    <PrivateRoute>
                        <Bookings></Bookings>
                    </PrivateRoute>
                ),
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/service/:id",
                element: <Service></Service>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: "/book/:id",
                element: (
                    <PrivateRoute>
                        <CheckOut></CheckOut>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
            },
        ],
    },
]);

export default router;
