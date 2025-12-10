import type {ReactElement} from "react";
import { Route, Routes } from "react-router";
import PathOne from "../routes/pathOne.tsx";
import PathTwo from "../routes/pathTwo.tsx";
import PathThree from "../routes/pathThree.tsx";

export default function MainRouter() :ReactElement {
    return (
        <Routes>
            <Route path="/pathOne" element={<PathOne />}/>
            <Route path="/pathTwo" element={<PathTwo />}/>
            <Route path="/pathThree" element={<PathThree/>}/>
        </Routes>
    )
}