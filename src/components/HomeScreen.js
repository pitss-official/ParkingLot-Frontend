import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIdCardAlt, faUser} from "@fortawesome/free-solid-svg-icons";
export default class HomeScreen extends React.Component{
render() {
    return(
    <div className="container">
        <div className="d-flex align-items-center justify-content-center" style={{height:"350px"}}>
            <Link to={{pathname:"/employee/"}} style={{textDecoration:'none'}}>
            <div className="p-1 app-main-select-tiles-boarders rounded">
                <div className="card p-3 app-main-select-tiles-background">
                    <div className="text-center display-3">
                        <FontAwesomeIcon icon={faIdCardAlt}/>
                    </div>
                    <br/>
                    I am Employee
                </div>
            </div>
            </Link>
            <Link to={{pathname:"/customer/"}} style={{textDecoration:'none'}}>
            <div className="ml-2 p-1 app-main-select-tiles-boarders rounded">
                <div className="card p-3 app-main-select-tiles-background">
                    <div className="text-center display-3">
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <br/>
                    I am Customer
                </div>
            </div>
            </Link>
        </div>
    </div>
    )
}
}