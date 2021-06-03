import React from "react"
import {BrowserRouter} from "react-router-dom"
import NavbarCheek from "./component/navbar"
import Comment from "./component/comment"

function App() {
    return (
        <BrowserRouter>
            <NavbarCheek/>
            <Comment />
        </BrowserRouter>
    );
}

export default App;
