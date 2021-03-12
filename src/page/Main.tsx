import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./login/index";
import Home from "./home/index"
import Event from "../components/event/index"

const Main: React.FC = () => {
    return <>
        <BrowserRouter>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/event" component={Event}/>
        </BrowserRouter>
    </>
}

export default Main