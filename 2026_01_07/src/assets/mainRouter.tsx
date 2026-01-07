import type {ReactElement} from "react";
import { Route, Routes } from "react-router";
import Path from "../components/Path/Path.tsx";
import WelcomePage from "../components/welcomePage/WelcomePage.tsx";

export default function MainRouter() :ReactElement {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />}/>
            <Route path="/pathOne" element={<Path content={"Path one"} />}/>
            <Route path="/pathTwo" element={<Path content={"Path two"} />}/>
            <Route path="/pathThree" element={<Path content={"Path three"}/>}/>
        </Routes>
    )
}