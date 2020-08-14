import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default class EmployeeHome extends React.Component{
    render(){
        return(
            <div>
                <div className="d-flex align-items-center justify-content-center">
                    <Link to={{pathname:'/'}}>
                        <button className="btn m-1 btn-primary">Site Home</button>
                    </Link><Link to={{pathname:'/customer/'}}>
                        <button className="btn m-1 btn-primary">Customer Home</button>
                    </Link>
                </div>
                <div className="container mt-5">
                    <div className="d-flex align-items-center justify-content-center" style={{height:"350px"}}>
                        <div className="card p-2 d-flex align-items-center justify-content-center mt-5" style={{backgroundColor:"transparent"}}>
                            <Link to={{pathname:"/employee/checkoutWithSlip"}}>
                                <button className="btn employee-buttons bg-light rounded-pill">Checkout using Slip  <FontAwesomeIcon className="fa-pull-right m-1" icon={faPlus}/></button>
                            </Link><br/>
                            <Link to={{pathname:"/employee/allocateSpot"}}>
                                <button className="btn employee-buttons bg-light rounded-pill">Allocate Spot  <FontAwesomeIcon className="fa-pull-right m-1" icon={faPlus}/></button>
                            </Link>
                            <br/>
                            <Link to={{pathname:"/employee/checkoutSpot"}}>
                                <button className="btn employee-buttons bg-light rounded-pill">Deallocate Spot  <FontAwesomeIcon className="fa-pull-right m-1" icon={faPlus}/></button>
                            </Link>
                            <br/>
                            <Link to={{pathname:"/employee/addCountry"}}>
                                <button className="btn employee-buttons bg-light rounded-pill">Add Country  <FontAwesomeIcon className="fa-pull-right m-1" icon={faPlus}/></button>
                            </Link>
                            <br/>
                            <Link to={{pathname:"/employee/addCity"}}>
                                <button className="btn employee-buttons bg-light rounded-pill">Add City  <FontAwesomeIcon className="fa-pull-right m-1" icon={faPlus}/></button>
                            </Link>
                            <br/><Link to={{pathname:"/employee/addLot"}}>
                            <button className="btn employee-buttons bg-light rounded-pill">Add Lots  <FontAwesomeIcon className="fa-pull-right m-1" icon={faPlus}/></button>
                        </Link>
                            <br/>
                            <Link to={{pathname:"/employee/addSpot"}}>
                                <button className="btn employee-buttons bg-light rounded-pill">Add Spots  <FontAwesomeIcon className="fa-pull-right m-1" icon={faPlus}/></button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}