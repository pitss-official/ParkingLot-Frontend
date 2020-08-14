import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import CustomerHome from "./components/CustomerHome";
import EmployeeHome from "./components/EmployeeHome";
import CheckIn from "./components/CheckIn";
import CheckInSlip from "./components/CheckInSlip";
import AddCity from "./components/AddCity";
import AddSpot from "./components/AddSpot";
import AddLot from "./components/AddLot";
import AddCountry from "./components/AddCountry";
import AllocateSpot from "./components/AllocateSpot";
import CheckOutEmployee from "./components/CheckOutEmployee";
import CheckoutWithSlip from "./components/CheckoutWithSlip";
import CustomerCheckoutWithSlip from "./components/CustomerCheckoutWithSlip";
import Bills from "./components/Bills";
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomeScreen} exact />

            <Route path="/customer" component={CustomerHome} exact/>
            <Route path="/customer/checkin/:lotID" component={CheckIn}/>
            <Route path="/customer/checkInSlip/:id" component={CheckInSlip}/>
            <Route path="/customer/checkoutWithSlip" component={CustomerCheckoutWithSlip}/>

            <Route path="/employee" component={EmployeeHome} exact/>
            <Route path="/employee/addCountry" component={AddCountry}/>
            <Route path="/employee/addCity" component={AddCity}/>
            <Route path="/employee/addLot" component={AddLot}/>
            <Route path="/employee/addSpot" component={AddSpot}/>
            <Route path="/employee/allocateSpot" component={AllocateSpot}/>
            <Route path="/employee/checkoutSpot" component={CheckOutEmployee}/>
            <Route path="/employee/checkoutWithSlip" component={CheckoutWithSlip}/>
            <Route path="/employee/bills" component={Bills}/>
        </Switch>
    </BrowserRouter>
)

export default Router