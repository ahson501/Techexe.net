import React from 'react';
import { Link } from 'react-router';

function Navbar() {
    return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
          <link to='/' className='navbar-logo'> 
                Tech <i className='fab fa-typo3'/> 
           </link>
        </div>
    </nav>
   </>
    );
}

export default Navbar
