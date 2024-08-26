import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import CenterBody from "./components/CenterBody";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenuPage from "./components/RestaurantMenuPage";

const App = () => {
return(
    <div className="app">
        <Header />
        <Outlet />
        < Footer />
    </div>
);
};

 export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <CenterBody />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurent/:resId",
                element: <RestaurantMenuPage />,
            }
        ],
        errorElement: <Error />,
    },
]);
export default App;