import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import CustomerHome from "./components/CustomerHome";
import EmployeeHome from "./components/EmployeeHome";
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/customer" component={CustomerHome}/>
            <Route path="/employee" component={EmployeeHome}/>
            {/*<Route path="/create/contact" component={CreateContact} />*/}
            {/*<Route path="/edit/contact/:id" component={EditContact}/>*/}
        </Switch>

    </BrowserRouter>

)

export default Router