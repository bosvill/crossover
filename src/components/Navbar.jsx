import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='nav'>
			<div className='logo'>
				<img src='/logo.jpg' alt='Logo' />
			</div>
			<div className='nav-links'>
				<NavLink to='/'>Home</NavLink>

				<NavLink to='/story'>Our Story</NavLink>

				<NavLink to='/contact'>Contact Us</NavLink>
			</div>
    <div class="form-container">
            <form>
      <input type="search" placeholder="Search"/>
    
    </form>
    </div>
		</div>
	)
}

export default Navbar
