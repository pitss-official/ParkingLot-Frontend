import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default class EmployeeHome extends React.Component{
    url = "http://localhost:5000/api";
    state={
        earningsToday:'Loading...',
        earningsSoFar:'Loading...'
    }
    componentDidMount() {
     axios.get(this.url+'/bill/earnings').then(res=>{
         this.setState({earningsSoFar:res.data[0].totalAmount,earningsToday:res.data[1].totalAmount})
     }
     );
    }
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
                <div className="d-flex align-items-center justify-content-center">
                    <span className="badge">Earnings Total: {this.state.earningsSoFar}</span>
                    <span className="badge">Earnings Today: {this.state.earningsToday}</span>
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
                            <Link to={{pathname:"/employee/bills"}}>
                                <button className="btn employee-buttons bg-light rounded-pill">Bills  <FontAwesomeIcon className="fa-pull-right m-1" icon={faPlus}/></button>
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