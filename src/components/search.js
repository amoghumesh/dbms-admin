import React from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import "../css/search.css"
import { AiOutlineSearch } from "react-icons/ai"
export default function Searchbar(props) {
    const columns = props.columns;
    const [searchText, setSearchText] = React.useState("Name");
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    function toggle() {
        setDropdownOpen(prevStatus => !prevStatus);
    }
    let button_list = columns.map((item, index)=>{
        return <div onClick={()=>{setSearchText(item.Header);}}><DropdownItem>{item.Header}</DropdownItem></div>
    })

    return (
        <div className="wrap">
            <div className="search-selector">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        {searchText}
                    </DropdownToggle>
                    <DropdownMenu>
                        {button_list}
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className="search">
                <input type="text" className="searchTerm" placeholder={`Search ${searchText}`} />
                <button type="submit" className="searchButton">
                    <AiOutlineSearch />
                </button>
            </div>
        </div>
    )
}