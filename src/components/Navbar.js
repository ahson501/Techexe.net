import React, {usestate} from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
        <nav classname="navbar">
            <div classname="navbar-container">
                <link to="/" classname="navbar-logo"> 
                Tech <i class="fab fa-typo3"></i>   
                </link>
                
            </div>
        </nav>
        </>
    )
}

export default Navbar

