import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import HW6 from "../h6/HW6";
import HW5 from "./HW5";
import HW7 from "../h7/HW7";
import HW8 from "../h8/HW8";
import HW9 from "../h9/HW9";
import HW10 from "../h10/HW10";
import Junior from "./pages/Junior";

export const PATH = {
    PRE_JUNIOR: "/PRE_JUNIOR",
    HW1: "/hw1",
    HW2: "/hw2",
    HW3: "/hw3",
    HW4: "/hw4",
}

function RoutesTo() {
    return (
        <div>
            <Routes>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path="/" element={<Navigate replace to="/PRE_JUNIOR" />} />
                <Route path="/PRE_JUNIOR"  element={<PreJunior/>}/>
                <Route path="/JUNIOR"  element={<Junior/>}/>
                <Route path="/hw1"  element={<HW1/>}/>
                <Route path="/hw2"  element={<HW2/>}/>
                <Route path="/hw3"  element={<HW3/>}/>
                <Route path="/hw4"  element={<HW4/>}/>
                <Route path="/hw4"  element={<HW5/>}/>
                <Route path="/hw4"  element={<HW6/>}/>
                <Route path="/hw4"  element={<HW7/>}/>
                <Route path="/hw4"  element={<HW8/>}/>
                <Route path="/hw4"  element={<HW9/>}/>
                <Route path="/hw4"  element={<HW10/>}/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>
            </Routes>

        </div>
    );
}

export default RoutesTo;