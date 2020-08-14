import React from "react";
import {Link, Redirect} from "react-router-dom";
import {faCar, faBiking} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from 'axios';
import swal from 'sweetalert2';
//todo fix links
export default class CheckIn extends React.Component{
    url = "http://localhost:5000/api";
    state = {
        spots:[],
        prev:undefined,
        redirect: null,
        bill:null
    }
    componentDidMount(){
        if(!this.props.location.state){
            swal.fire("Error","You cannot access this page directly. Follow checkin routine.","error");
            return;
        }
        this.setState({prev:this.props.location.state})
        axios.get(this.url+'/spot/byLotId/'+this.props.location.state.lot).then(res=>this.setState({spots:res.data}))
            .catch(err=>swal.fire("Invalid Request","Error Occurred while fetching spots. Check data again.","error"));
    }
    book(e){
        axios.post(this.url+'/vehicle/checkIn',{
            ...this.props.location.state,spotID:e.target.id
        }).then(res=> {
            swal.fire("Successful","Space Booked Successfully","success").then(click=>{
                this.setState({ bill:res.data,redirect: "/customer/checkInSlip/"+res.data.id });
            })
        });
    }
    render(){
        if (this.state.redirect) {
            return <Redirect to={{pathname:this.state.redirect,state:this.state}} />
        }
        return(
            <div>
                <div className="d-flex align-items-center justify-content-center">
                    <Link to={{pathname:'/'}}>
                        <button className="btn m-1 btn-primary">Site Home</button>
                    </Link><Link to={{pathname:'/customer/'}}>
                    <button className="btn m-1 btn-primary">Customer Home</button>
                </Link>
                </div><br/>
                <div className="text-center">
                    <h4>Select Slot</h4>
                </div>

            <div className="d-flex align-items-center justify-content-center">
                <br/>
                <div className="row p-2">
                    {this.state.spots.map(spot=>{
                        if(spot.isBlocked===1)
                            return (
                                <div className="text-center p-2 m-1 bg-danger rounded" style={
                                    {width:spot.type===1?'100px':'50px'}
                                }>
                                    {spot.name}
                                    <br/>
                                    <FontAwesomeIcon icon={spot.type===1?faCar:faBiking}/>
                                    <br/>
                                    L:{spot.level}
                                </div>)
                        else return (
                            <div className="text-center p-2 m-1 bg-success rounded" id={spot.id} style={
                                {width:spot.type===1?'100px':'50px'}
                            } onClick={this.book.bind(this)}
                            >
                                {spot.name}
                                <br/>
                                <FontAwesomeIcon icon={spot.type===1?faCar:faBiking}/>
                                <br/>
                                L:{spot.level}
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        )
    }
}