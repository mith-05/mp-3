
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experiences from "./pages/Experiences";
import Certifications from "./pages/Certifications";
import References from "./pages/References";
import Projects from "./pages/Projects";
import "./index.css";

const router = createBrowserRouter([
    {path: "/", element: <App><Home /></App>},
    {path: "/education", element: <App><Education /></App>},
    {path: "/experiences", element: <App><Experiences /></App>},
    {path: "/certifications", element: <App><Certifications /></App>},
    {path: "/references", element: <App><References /></App>},
    {path: "/projects", element: <App><Projects /></App>}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
