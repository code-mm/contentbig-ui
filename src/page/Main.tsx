import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./login/index";


const Main: React.FC = () => {

    return<>
        <BrowserRouter>
            <Route path="/" component={Login}/>
            {/* <Route path="/" exact component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/> */}
        </BrowserRouter>
    </>
}


export default Main