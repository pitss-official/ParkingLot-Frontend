import React from "react";
import axios from 'axios';
import swal from 'sweetalert2';
import {Link} from "react-router-dom";
export default class CheckoutWithSlip extends React.Component{
    url = "http://localhost:5000/api";
    state={
        id:'',
    }
    handleIDChange(e){
        this.setState({id:e.target.value});
    }
    post(){
        axios.post(this.url+'/vehicle/empcheckOut',{spotID:this.state.id}).then(res=>{
            swal.fire("Amount: "+res.data.amount,"A bill has been generated for hours: "+res.data.hours);
        }).catch(err=>{
            swal.fire("Error",err.response.data.message,"error")
        });
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
                            type="number"
                            className="p-2 text-uppercase text-center rounded-pill"
                            style={{minWidth:'250px'}}
                            placeholder="ENTER SLIP NUMBER"
                            value={this.state.id}
                            onChange={this.handleIDChange.bind(this)}
                        /><br/>
                        <div className="text-center mt-3">
                            <button className="btn btn-success" onClick={()=>{this.post()}}>Checkout</button>
                        </div>
                    </form>
                </div></div>
        )
    }
}