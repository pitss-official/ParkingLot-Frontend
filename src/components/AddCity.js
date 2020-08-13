import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import swal from 'sweetalert2';
export default class AddCity extends React.Component{
    url = "http://localhost:5000/api";
    state={
        name:'',
        countries:[],
        country:0
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
    post(){
        axios.post(this.url+'/city',{
            name:this.state.name,
            countryId:this.state.country
        }).then(res=>swal.fire("City Added Successfully","A new city has been successfully added into the system","success"));
    }
    render(){
        return(
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
                    <input

                        required={true}
                        type="text"
                        className="p-2 mt-3 text-uppercase text-center rounded-pill"
                        style={{minWidth:'250px'}}
                        placeholder="ENTER CITY NAME"
                        value={this.state.name}
                        onChange={this.handleNameChange.bind(this)}
                    /><br/>
                    <div className="text-center mt-3">
                        <button disabled={this.country===0} className="btn btn-success" onClick={()=>{this.post()}}>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}