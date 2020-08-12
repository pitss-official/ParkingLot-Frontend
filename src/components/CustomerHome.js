import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIdCardAlt, faUser} from "@fortawesome/free-solid-svg-icons";

export default class CustomerHome extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="d-flex align-items-center justify-content-center" style={{height:"350px"}}>
                    {/*<Link to={{pathname:"/employee/"}} style={{textDecoration:'none'}}>*/}
                    <form action="javascript:">
                        <input
                            required={true}
                            type="text"
                            className="p-2 text-uppercase text-center rounded-pill"
                            style={{minWidth:'250px'}}
                        />
                        <br/>
                    </form>
                    {/*<div className="p-1  app-main-select-tiles-boarders rounded">*/}
                    {/*        <div className="card p-3 app-main-select-tiles-background">*/}
                    {/*            <div className="text-center display-3">*/}
                    {/*                <FontAwesomeIcon icon={faIdCardAlt}/>*/}
                    {/*            </div>*/}
                    {/*            <br/>*/}
                    {/*            I am Employee*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Link>*/}
                </div>
            </div>
        )
    }
}