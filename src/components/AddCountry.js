import React from "react";
import axios from 'axios';
import swal from 'sweetalert2';
import {Link} from "react-router-dom";
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
            </div></div>
        )
    }
}