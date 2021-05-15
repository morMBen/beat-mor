import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';


const Navbar = ({ openCloseLogMenu, userlog, userDetails }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const menuOpen = () => {
        if (isNavOpen) {
            return '300px'
        } else {
            return '0'
        }
    }


    return (

        <div className="my-nav" style={{ fontSize: '17px' }}>
            <Link to='/' className="menu-logo">
                A Beat Mor
            </Link>
            <div className="hamburger" onClick={() => { setIsNavOpen(!isNavOpen) }}>
                {/* nav here */}
                dads
            </div>
            <div className="nav-menu" style={{ maxHeight: menuOpen() }}>
                <Link to='/search' className="menu-link">Search</Link>
                <Link to='/create' className="menu-link">Create</Link>
                <Link to={`/`} className="menu-link">Home</Link>
            </div>
        </div >
    )
}

export default Navbar;