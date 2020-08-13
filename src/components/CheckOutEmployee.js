import React from "react";
import { Redirect } from "react-router-dom";
import {faCar, faBiking} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from 'axios';
import swal from 'sweetalert2';
//todo fix links
export default class CheckOutEmployee extends React.Component{
    url = "http://localhost:5000/api";
    state={
        countries : [],
        spots: [],
        cities:[],
        lots:[],
        vehicleNumber:"",
        vehicleType:0,
        country:0,
        city:0,
        customerName:"",
        lot:0,
        blocked:false,
        isFresh:false
    }
    handleCustomerNameChange(e){
        this.setState({customerName: e.target.value});
    }
    handleVehicleNumberChange(e){
        this.setState({vehicleNumber:e.target.value})
    }
    handleCountryChange(e){
        axios.get(this.url+'/city/byCountryId/'+e.target.value)
            .then(res=>this.setState({cities:res.data}))
            .catch(err=>swal.fire("error","Error fetching","Error Fetching cities from server"))
        this.setState({country:e.target.value})
    }
    handleCityChange(e){
        axios.get(this.url+'/lot/byCityId/'+e.target.value)
            .then(res=>this.setState({lots:res.data}))
            .catch(err=>swal.fire("Error fetching","Error Fetching lots from server","error"))
        this.setState({city:e.target.value})
    }
    handleLotChange(e){
        this.setState({lot:e.target.value})
        axios.get(this.url+'/spot/byLotId/'+e.target.value).then(res=>this.setState({spots:res.data}))
            .catch(err=>swal.fire("Invalid Request","Error Occurred while fetching spots. Check data again.","error"));
    }
    componentDidMount() {
        axios.get(this.url+'/country/')
            .then(res=>this.setState({countries:res.data}))
            .catch(err=>swal.fire("error","Error fetching","Error Fetching countries from server"))
    }
    book(e){
        console.log(e.target.name)
        let obj = {
            spotID:e.target.id,
            type:e.target.name,
        }
        axios.post(this.url+'/vehicle/empcheckOut', obj).then(res=> {
            console.log(res.data)
            swal.fire("Amount: "+res.data.amount,"Time: "+res.data.hours,"success").then(click=>{
                this.setState({ bill:res.data,redirect: "/customer/checkInSlip/"+res.data.id });
            })
        });
    }
    render(){
        if (this.state.redirect) {
            // window.location.reload('/employee/allocateSpot')
            // return <Redirect to={{pathname:this.state.redirect,state:this.state}} />
        }
        return(
            <div>

                <div className="text-center">
                    <h4>Select Slot</h4>
                </div>
                <br/>
                <select
                    name="country"
                    onChange={this.handleCountryChange.bind(this)}
                    className="mt-1 p-2 text-uppercase text-center rounded-pill"
                    style={{minWidth:'250px'}}
                    value={this.state.country}
                >
                    <option value="0" selected={true}>Select Country</option>
                    {this.state.countries.map(
                        country=><option key={`country_${country.id}`} value={country.id}>{country.name}</option>
                    )}
                </select>
                <br/>
                <select
                    name="city"
                    onChange={this.handleCityChange.bind(this)}
                    className="mt-1 p-2 text-uppercase text-center rounded-pill"
                    style={{minWidth:'250px'}}>
                    <option value="0" selected={true}>Select City</option>
                    {this.state.cities.map(
                        city=><option key={`city_${city.id}`} value={city.id}>{city.name}</option>
                    )}
                </select>
                <br/>
                <select
                    name="lot"
                    onChange={this.handleLotChange.bind(this)}
                    className="mt-1 p-2 text-uppercase text-center rounded-pill"
                    style={{minWidth:'250px'}}>
                    <option value="0" selected={true}>Select Lot</option>
                    {this.state.lots.map(
                        lot=><option key={`lot_${lot.id}`} value={lot.id}>{lot.name}</option>
                    )}
                </select>
                <div className="d-flex align-items-center justify-content-center">
                    <br/>
                    <div className="row p-2">
                        {this.state.spots.map(spot=>{
                            if(spot.isBlocked==1)
                                return (
                                    <div className="text-center p-2 m-1 bg-danger rounded" style={
                                        {width:spot.type==1?'100px':'50px'}

                                    } id={spot.id} name={spot.type}  onClick={this.book.bind(this)}>
                                        {spot.name}
                                        <br/>
                                        <FontAwesomeIcon icon={spot.type==1?faCar:faBiking}/>
                                        <br/>
                                        L:{spot.level}
                                    </div>)
                            else return (
                                <div className="text-center p-2 m-1 bg-success rounded" style={
                                    {width:spot.type==1?'100px':'50px'}
                                }
                                >
                                    {spot.name}
                                    <br/>
                                    <FontAwesomeIcon icon={spot.type==1?faCar:faBiking}/>
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