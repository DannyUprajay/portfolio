import React, {useState} from 'react';
import './App.css'
// import Nav from "./Nav.jsx";
import {Routes, Route} from "react-router-dom";
import Home from "./Home.jsx";


function App() {
    let [isMenuOpen, setMenuOpen] = useState(false);

    let toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/*<Nav/>*/}
            <Routes>
                <Route path={"/"} element={<Home/>}/>
            </Routes>

        </>


    );

}

export default App;