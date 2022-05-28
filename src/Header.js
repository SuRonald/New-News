import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from './img/MyLogo.png';

const Header = () => {
    const [user, setUser] = useState("Hello, Guest");
    const [status, setStatus] = useState("Login");

    const handleClickAcc = () => {
        if (status === "Login"){
            setUser("Welcome, User");
            setStatus("Logout");
        }
        else {
            setUser("Hello, Guest");
            setStatus("Login");
        }
    }

    return (    
        <div className="bg-dark">
            <div className="py-3 text-white">
                <div className="container d-flex flex-wrap justify-content-center">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-decoration-none">
                        <img src={Logo} alt="Logo" className="newlogo" />
                    </Link>

                    <div className="text-end pad-top">
                        <button className="btn-hollow me-2">{user}</button>
                        <button type="button" className="btn btn-outline-light me-2" onClick={handleClickAcc}>{status}</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="d-flex justify-content-center py-3">
                    <Link to="/" className="nav-link px-2 text-white">Home</Link>
                    <Link to="/AboutUs" className="nav-link px-2 text-white">About Us</Link>
                    <Link to="/Category/general" className="nav-link px-2 text-white">General</Link>
                    <Link to="/Category/business" className="nav-link px-2 text-white">Business</Link>
                    <Link to="/Category/entertainment" className="nav-link px-2 text-white">Entertainment</Link>
                    <Link to="/Category/health" className="nav-link px-2 text-white">Health</Link>
                    <Link to="/Category/science" className="nav-link px-2 text-white">Science</Link>
                    <Link to="/Category/sports" className="nav-link px-2 text-white">Sports</Link>
                    <Link to="/Category/technology" className="nav-link px-2 text-white">Technology</Link>
                    <Link to="/Country/jp" className="nav-link px-2 text-white">Japan</Link>
                    <Link to="/Country/cn" className="nav-link px-2 text-white">China</Link>
                    <Link to="/Country/my" className="nav-link px-2 text-white">Malaysia</Link>
                    <Link to="/Country/gb" className="nav-link px-2 text-white">UK</Link>
                    <Link to="/Country/us" className="nav-link px-2 text-white">USA</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Header;