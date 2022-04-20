import React from "react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import TableContainer from "./table.js"
import "../css/header.css"
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Searchbar from "./search"
const columns = [
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
];
const data = [];
export default function Header() {
    const [menuCollapsedStatus, setMenuCollapsedStatus] = React.useState(false);
    const [pageContent, setPageContent] = React.useState(0);
    // pageContent: 0 = landing, 1 = Police, 2 = Stations, 3 = Complaints, 4 = Offenses, 5 = Camera
    function menuClick() {
        setMenuCollapsedStatus(prevStatus => !prevStatus);
    }
    function setContent(val) {
        setPageContent(() => val);
    }
    return (
        <div className="main">
            <Navbar menuClick={menuClick} />
            <div className="bod">

                <Sidebar menuClick={menuClick} menuCollapsedStatus={menuCollapsedStatus} pageContent={pageContent} setContent={setContent} />
                <div className="main-cont">
                <Searchbar columns={columns}/>
                <Container className="table-cont">
                    <TableContainer columns={columns} data={data} />
                </Container>
                </div>
                
            </div>

        </div>
    );
}
