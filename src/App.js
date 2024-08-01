import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import CenterBody from "./components/CenterBody";

const App = () => {
return(
    <div className="app">
        <Header />
        <CenterBody />
        < Footer />
    </div>
);
}

export default App;