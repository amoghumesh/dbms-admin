import React from "react"
import Searchbar from "./search"
import TableContainer from "./table.js"
import "../css/header.css"
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
export default function TableManager(props) {
    const columns = [
    [
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "username",
            accessor: "username",
        },
        {
            Header: "position",
            accessor: "position",
        }
    ],        
        [
        {
            Header: "Police ID",
            accessor: "name.title",
        },
        {
            Header: "First Name",
            accessor: "name.first",
        },
        {
            Header: "Last Name",
            accessor: "name.last",
        },
        {
            Header: "Username",
            accessor: "email",
        },
        {
            Header: "Station",
            accessor: "location.city",
        },
    ],
    [
        {
            Header: "Station ID",
            accessor: "sid",
        },
        {
            Header: "Station Name",
            accessor:"sname",
        },
        {
            Header: "Station Address",
            accessor: "saddress",
        },
    ],
    [
        {
            Header: "Complaint ID",
            accessor: "cid",
        },
        {
            Header: "Description",
            accessor: "cdesc",
        },
        {
            Header: "Date",
            accessor: "cdate",
        }
    ],
    [
        {
            Header: "Fine ID",
            accessor: "oid",
        },
        {
            Header:"Name",
            accessor: "oname",
        },
        {
            Header: "Description",
            accessor: "odesc",
        },
        {
            Header: "DL Number",
            accessor: "odl",
        },
        {
            Header: "Fine",
            accessor: "ofine",
        },
        {
            Header: "Place",
            accessor: "oplace",
        },
        {
            Header: "Time",
            accessor: "otime",
        }
    ],
    [
        {
            Header: "Camera ID",
            accessor: "cid",
        },
        {
            Header: "Camera Location",
            accessor: "clocation",
        },
        {
            Header: "token",
            accessor: "ctoken",
        }
    ]
];
    const data = [];
    let pad = props.menuCollapsedStatus ? 100 : 250;
    let table = <div id="table" className="main-cont" style={{paddingLeft:`${pad}px`,transition:"0.4s"}}><Searchbar columns={columns[props.pageContent-1]} /><Container className="table-cont"><TableContainer columns={columns[props.pageContent-1]} data={data} /></Container></div>
    
    if(props.pageContent === 0) {
        return(<div></div>)
    }else{
        return(table)
    }
}