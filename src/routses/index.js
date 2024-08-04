import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Items from "../pages/Items";

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/items" element={<Items />}></Route>
        </Routes>
    );
};

export default AllRoutes