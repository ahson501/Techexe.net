import React, {usestate} from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const [click, setClick] = usestate(false);
    
    const handleClick = () => setClick(!click);
    const closemobilemenu =() => setClick(false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <link to='/' className="navbar-logo"> 
                Tech <i className="fab fa-typo3"></i> 
           </link>
            <div className='menu-icon' onClick={handleclick}>
                <i className={click ? 'fas fa-time' : 'fas fa-bars'}/> 
                </div>
        <ul className={Click ? 'nav-menu active' : 'nav-menu'}></ul>
        <li className='nav-item'>
        <link to='/' className='nav-links' onclick={closemobilemenu}>
              </div>
           </nav>
        </>
    )
}

export default Navbar

