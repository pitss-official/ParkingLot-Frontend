import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar, faBiking} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import swal from 'sweetalert2';
//todo fix links
export default class CustomerHome extends React.Component{
    url="http://localhost:5000/api";
    state={
        countries : [],
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
    }
    componentDidMount() {
        axios.get(this.url+'/country/')
            .then(res=>this.setState({countries:res.data}))
            .catch(err=>swal.fire("error","Error fetching","Error Fetching countries from server"))
    }
    fetchDetails(){
        axios.get(this.url+'/vehicle/'+this.state.vehicleNumber+'/isParked/').then(res=>{
            if(res.data.status===1){
                this.setState({isFresh:false});
            swal.fire({
                title: 'Do you want to checkout?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
                    axios.post(this.url+'/vehicle/checkout/'+this.state.vehicleNumber).then(res=>{
                        console.log(res.data);
                    });
                }
            })}
            else{
                this.setState({isFresh:true});
            }
        })
        axios.get(this.url+'/vehicle/'+this.state.vehicleNumber).then(
            res=>{
                if(res.data.length===0){
                    this.setState({blocked:false});
                }
                else{
                    this.setState({blocked:true});
                    this.setState({customerName:res.data[0].customer.name});
                }
            }
        );
    }
    render(){
        return(
            <div className="container mt-2">
                <div className="d-flex align-items-center justify-content-center" style={{height:"350px"}}>
                    {/*<Link to={{pathname:"/employee/"}} style={{textDecoration:'none'}}>*/}
                    <form action="javascript:">
                        <input
                            required={true}
                            type="text"
                            className="p-2 text-uppercase text-center rounded-pill"
                            style={{minWidth:'250px'}}
                            placeholder="ENTER VEHICLE NUMBER"
                            value={this.state.vehicleNumber}
                            onMouseOut={()=>{this.fetchDetails()}}
                            onChange={this.handleVehicleNumberChange.bind(this)}
                        />
                        <div hidden={!this.state.isFresh}>
                        <br/><input
                            required={true}
                            type="text"
                            disabled={this.state.blocked}
                            className="p-2 text-uppercase text-center rounded-pill"
                            style={{minWidth:'250px'}}
                            placeholder="ENTER NAME"
                            value={this.state.customerName}
                            onChange={this.handleCustomerNameChange.bind(this)}
                        />
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
                        <div className="mt-1 d-flex align-items-center justify-content-center">
                            <Link to={{pathname:"/customer/checkin/"+this.state.lot,state:{...this.state,vehicleType:1}}}>
                                <button className="rounded-circle p-3 "><FontAwesomeIcon icon={faCar}/></button>
                            </Link>
                            <div className="ml-2"></div>
                            <Link to={{pathname:"/customer/checkin/"+this.state.lot,state:{...this.state,vehicleType:0}}}>
                            <button className="rounded-circle p-3 "><FontAwesomeIcon icon={faBiking}/></button>
                        </Link>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}