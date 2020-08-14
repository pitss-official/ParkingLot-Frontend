import React from "react";
import swal from "sweetalert2";
import {Link} from "react-router-dom";

export default class CheckInSlip extends React.Component{
    componentDidMount() {
        console.log(this.props.location)
        if(!this.props.location.state){
            swal.fire("Error","You cannot access this page directly. Follow checkin routine.","error");
            return;
        }
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
            <div className="checkin-card">
            <div className="cardWrap">
                <div className="card cardLeft">
                    <h1>MegaParking <span>Lot</span></h1>
                    <div className="title">
                        <h2>CheckIn Slip</h2>
                        <span>{this.props.location.state.prev.customerName}</span>
                    </div>
                    <div className="name">
                        <h2>{this.props.location.state.prev.vehicleNumber}</h2>
                        <span>{this.props.location.state.prev.vehicleType===0?'Two-Wheeler':'Four-Wheeler'}</span>
                    </div>

                </div>
                <div className="card cardRight">
                    <div className="eye"></div>
                    <div className="number">
                        <h3>{this.props.location.state.bill.id}</h3>
                    </div>
                </div>
            </div></div></div>
        )
    }
}