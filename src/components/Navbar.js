import React, {usestate} from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const [click, setClick] = usestate(false);
    return (
        <>
        <nav classname="navbar">
            <div classname="navbar-container">
                <link to="/" classname="navbar-logo"> 
                Tech <i classname="fab fa-typo3"></i> 
           </link>
            <div classname="menu-item">
                <i classname={click ?" 'fas fa-time' : 'fas fa-bars'}/> 
                </div>
              </div>
           </nav>
        </>
    )
}

export default Navbar

