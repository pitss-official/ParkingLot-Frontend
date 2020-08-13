import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import swal from 'sweetalert2';
export default class AddCountry extends React.Component{
    url = "http://localhost:5000/api";
    state={
        name:'',
    }
    handleNameChange(e){
        this.setState({name:e.target.value});
    }
    post(){
        axios.post(this.url+'/country',this.state).then(res=>swal.fire("Country Added Successfully","A new country has been successfully added into the system","success"));
    }
    render(){
        return(
            <div className="d-flex align-items-center justify-content-center">
                <br/>
                <br/>
                <form action="javascript:">
                    <input
                        required={true}
                        type="text"
                        className="p-2 text-uppercase text-center rounded-pill"
                        style={{minWidth:'250px'}}
                        placeholder="ENTER COUNTRY NAME"
                        value={this.state.name}
                        onChange={this.handleNameChange.bind(this)}
                    /><br/>
                    <div className="text-center mt-3">
                        <button className="btn btn-success" onClick={()=>{this.post()}}>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}