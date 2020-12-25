import React, {usestate} from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const [click, setClick] = usestate(false);
    const [button,setButton] = usestate(true);
    
    const handleClick = () => setClick(!click);
    const closemobilemenu =() => setClick(false);
    
    const showButton = () => {if(window.innerwidth <= 950){setButton =(false);}
                              else{setButton =(true);}};
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <link to='/' className="navbar-logo"> 
                Tech <i className="fab fa-typo3"></i> 
           </link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-time' : 'fas fa-bars'}/> 
                </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
        <link to='/' className='nav-links' onClick={closemobilemenu}>
        home
        </link>
        </li>
        <li className='nav-item'>
        <link to='/' className='nav-links' onClick={closemobilemenu}>
        home1
        </link>
        </li>
        <li className='nav-item'>
        <link to='/HOME2' className='nav-links' onClick={closemobilemenu}>
        home2
        </link>
        </li>
        <li className='nav-item'>
        <link to='/HOME3' className='nav-links' onClick={closemobilemenu}>
        home3
        </link>
        </li>
        <li className='nav-item'>
        <link to='/HOME4' className='nav-links-mobile' onClick={closemobilemenu}>
        home4
        </link>
       </li>
      </ul>
        {button && <button buttonStyle='btn--outline'>HOME4</Button>}
     </div>
    </nav>
   </>
    )
}

export default Navbar

