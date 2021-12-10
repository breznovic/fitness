import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Junior from "./pages/Junior";
import PreJunior from "./pages/PreJunior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    // add paths
}

function RoutesPage() {
    return (
        <div>
            <Routes>
                <Route path={'/*'} element={<Error404/>} />
                <Route path={'/'} element={<PreJunior />} />
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
                <Route path={PATH.JUNIOR} element={<Junior />} />
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />
                {/*<Route path="about" element={<About />} />*/}
            </Routes>
            {/*Switch выбирает первый подходящий роут*/}
            {/*<Switch>*/}

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

            {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
            {/*    // add routes*/}

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            {/*<Route render={() => <Error404/>}/>*/}

            {/*</Switch>*/}
        </div>
    )
}

export default RoutesPage