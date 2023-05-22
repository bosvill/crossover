import React from 'react';
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
        
            <img src="./public/logo.jpg" alt="Logo" />

            <NavLink to='/'>Home</NavLink>
        
            <NavLink to='/story'>Our Story</NavLink>
    
            <NavLink to='/contact'>Contact Us</NavLink>
        

        </div>
        
    );
}

export default Navbar;
