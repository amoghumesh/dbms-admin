import React from "react"
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import "../css/sidebar.css";
import "react-pro-sidebar/dist/css/styles.css";
import {GrUserPolice} from "react-icons/gr";
import { FiUsers} from "react-icons/fi";
import { FaTrafficLight } from "react-icons/fa";
import { BiBuilding } from "react-icons/bi";

export default function sidebar(props) {

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={props.menuCollapsedStatus}>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem icon={<GrUserPolice />}>Police</MenuItem>
                            <MenuItem icon={<BiBuilding />}>Stations</MenuItem>
                            <MenuItem icon={<FiUsers />}>Complaints</MenuItem>
                            <MenuItem icon={<FaTrafficLight />}>Offenses</MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </>

    );
}

