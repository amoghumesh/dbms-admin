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
import { GrUserPolice } from "react-icons/gr";
import {MdLocalPolice} from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaTrafficLight } from "react-icons/fa";
import { BiBuilding } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";

export default function sidebar(props) {
    return (
        <>
            <div id="header">
                <ProSidebar collapsed={props.menuCollapsedStatus}>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <div onClick={() => props.setContent(1)}>
                                <MenuItem active={props.pageContent === 1} icon={<MdLocalPolice/>}>Authority</MenuItem>
                            </div>
                            <div onClick={() => props.setContent(2)}>
                                <MenuItem active={props.pageContent === 2} icon={<GrUserPolice />}>Police</MenuItem>
                            </div>
                            <div onClick={() => props.setContent(3)}>
                                <MenuItem active={props.pageContent === 3} icon={<BiBuilding />}>Stations</MenuItem>
                            </div>

                            <div onClick={() => props.setContent(4)}>
                                <MenuItem active={props.pageContent === 4} icon={<FiUsers />}>Complaints</MenuItem>
                            </div>

                            <div onClick={() => props.setContent(5)}>
                                <MenuItem active={props.pageContent === 5} icon={<FaTrafficLight />}>Offenses</MenuItem>
                            </div>

                            <div onClick={() => props.setContent(6)}>
                                <MenuItem active={props.pageContent === 6} icon={<AiOutlineCamera />}>Camera</MenuItem>
                            </div>
                            {/* active = {props.pageContent === 5}  */}

                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </>

    );
}

