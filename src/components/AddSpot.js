import React from "react";
import axios from 'axios';
import swal from 'sweetalert2';
import {Link} from "react-router-dom";
export default class AddSpot extends React.Component{
    url = "http://localhost:5000/api";
    state={
        name:'',
        countries:[],
        country:0,
        cities:[],
        city:0,
        type:0,
        lots:[],
        level:1
    }
    handleLevelChange(e){
        this.setState({level:e.target.value})
    }
    handleTypeChange(e){
        this.setState({type:e.target.value})
    }
    handleLotChange(e){
        this.setState({lot:e.target.value})
    }
    componentDidMount() {
        axios.get(this.url+'/country/')
            .then(res=>this.setState({countries:res.data}))
            .catch(err=>swal.fire("error","Error fetching","Error Fetching countries from server"))
    }
    handleNameChange(e){
        this.setState({name:e.target.value});
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
    post(){
        axios.post(this.url+'/spot',{
            name:this.state.name,
            lotId:this.state.lot,
            type:this.state.type,
            level:this.state.level
        }).then(res=>swal.fire("Lot Added Successfully","A new lot has been successfully added into the system","success"));
    }
    render(){
        return(
            <div><div className="d-flex align-items-center justify-content-center">
                <Link to={{pathname:'/'}}>
                    <button className="btn m-1 btn-primary">Site Home</button>
                </Link>
                <Link to={{pathname:'/employee'}}>
                    <button className="btn m-1 btn-primary">Employee Home</button>
                </Link>
                <Link to={{pathname:'/employee/allocateSpot'}}>
                    <button className="btn m-1 btn-primary">Allocate Space</button>
                </Link>
                <Link to={{pathname:'/employee/checkoutSpot'}}>
                    <button className="btn m-1 btn-primary">Deallocate Space</button>
                </Link>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <br/>
                <br/>
                <form action="javascript:">
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
                    <br/>
                    <select
                        name="city"
                        onChange={this.handleCityChange.bind(this)}
                        className="mt-1 p-2 text-uppercase text-center rounded-pill"
                        style={{minWidth:'250px'}}>
                        <option value="0" selected={true}>Select City</option>
                        {
                            this.state.cities.map(
                                city=><option key={`city_${city.id}`} value={city.id}>{city.name}</option>
                            )}
                    </select>
                    <br/>
                    <br/>
                    <select
                        name="lot"
                        onChange={this.handleLotChange.bind(this)}
                        className="mt-1 p-2 text-uppercase text-center rounded-pill"
                        style={{minWidth:'250px'}}>
                        <option value="0">Select Lot</option>
                        {this.state.lots.map(
                            lot=><option key={`lot_${lot.id}`} value={lot.id}>{lot.name}</option>
                        )}
                    </select><br/><br/>
                    <select
                        name="type"
                        onChange={this.handleTypeChange.bind(this)}
                        className="mt-1 p-2 text-uppercase text-center rounded-pill"
                        style={{minWidth:'250px'}}>
                        <option value="0">Two wheeler</option>
                        <option value="1">Four wheeler</option>
                    </select>
                    <br/>
                    <input

                        required={true}
                        type="text"
                        className="p-2 mt-3 text-uppercase text-center rounded-pill"
                        style={{minWidth:'250px'}}
                        placeholder="ENTER SPOT NAME"
                        value={this.state.name}
                        onChange={this.handleNameChange.bind(this)}
                    />
                    <br/>
                    <input

                        required={true}
                        type="text"
                        className="p-2 mt-3 text-uppercase text-center rounded-pill"
                        style={{minWidth:'250px'}}
                        placeholder="ENTER LEVEL"
                        value={this.state.level}
                        onChange={this.handleLevelChange.bind(this)}
                    /><br/>
                    <br/>

                    <div className="text-center mt-3">
                        <button disabled={this.country===0} className="btn btn-success" onClick={()=>{this.post()}}>Create</button>
                    </div>
                </form>
            </div></div>
        )
    }
}