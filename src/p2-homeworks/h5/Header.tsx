import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {

    const classActive = (active: { isActive: boolean }) => active.isActive ? s.act : ''
    return (
        <div className={s.wrapper}>
            <button className={s.button}>menu</button>
            <div className={s.menu}>
                <NavLink className={classActive} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                <NavLink className={classActive} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={classActive} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </div>

        </div>
    )
}

export default Header
