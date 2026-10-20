import type { ReactNode } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App(props: {children: ReactNode}) {
    return (
        <div id="page-wrapper">
            <Header />
            <div id="container">
                <Nav />
                {props.children}
            </div>
            <Footer />
        </div>
    );
}
