import React from "react"
import Searchbar from "./search"
import TableContainer from "./table.js"
import "../css/header.css"
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
export default function TableManager(props) {
    const columns = [[
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
    ]
];
    const data = [];
    return (
        <div className="main-cont">
            <Searchbar columns={columns[props.pageContent]} />
            <Container className="table-cont">
                <TableContainer columns={columns[props.pageContent]} data={data} />
            </Container>
        </div>
    )
}