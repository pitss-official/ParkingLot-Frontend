import React from "react";
import {Link} from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";
import { MDBDataTableV5 } from 'mdbreact';
export default class Bills extends React.Component{
    url = "http://localhost:5000/api";
    state={
        columns: [
            {
                label: 'Bill Number',
                field: 'id',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Start Time',
                field: 'startTime',
                width: 270,
            },
            {
                label: 'End Time',
                field: 'endTime',
                width: 200,
            },
            {
                label: 'Amount',
                field: 'amount',
                width: 100,
            },
            {
                label: 'Vehicle Number',
                field: 'vehicleNumber',
                width: 150,
            }
        ],
        rows: [],
    }
    componentDidMount() {
        axios.get(this.url+'/bill').then(res=>this.setState({rows:res.data})).catch(err=>swal.fire("Error Fectching data","Error fetching data from server","error"));
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
                    <div className="card-body bg-white">
                    <MDBDataTableV5  striped
                                     bordered
                                     responsive
                                     hover entriesOptions={[5, 20, 25]} entries={9} pagesAmount={4} data={this.state} fullPagination />
                    </div>
                </div>
            </div>
        )
    }
}