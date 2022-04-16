import gear from "../images/gear.png"
import "../css/navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function navbar() {
    return (
        <nav className="navbar navbar-expand" role="navigation">
            <div className="home home-block nav-element nav-element-white">
                
                <div className="center">Menu</div>
            </div>
            <div className="home home-block nav-element nav-element-white"><div className="center">Home</div></div>
            <div className="navbar-brand mx-auto"><center><h2>Traffic Manager</h2></center></div>
            <div className="nav-element settings nav-element-white"><img className="settings-image" src={gear} alt="gear" /></div>
            <div className="logout nav-element nav-element-dark "><div className="center">Logout</div></div>

        </nav>
    )
}
