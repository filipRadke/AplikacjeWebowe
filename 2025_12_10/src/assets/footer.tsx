import type {ReactElement} from "react";
import {NavLink} from "react-router";

export default function Footer() :ReactElement {
    return (
        <>
            <footer>
                <NavLink to="/pathOne">Uno</NavLink>
                <NavLink to="/pathTwo">Dos</NavLink>
                <NavLink to="/pathThree">Tres</NavLink>
            </footer>
        </>
    )
}