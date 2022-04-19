import React from "react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
export default function Header() {
    const [menuCollapsedStatus, setMenuCollapsedStatus] = React.useState(false);
    function menuClick() {
        setMenuCollapsedStatus(prevStatus => !prevStatus);
    }
    return (
        <>
            <Navbar menuClick = {menuClick} />
            <Sidebar menuClick = {menuClick} menuCollapsedStatus = {menuCollapsedStatus} />
        </>
    );
}
