import React, { useState } from 'react';

import {
  
  faBars,
 
} from '@fortawesome/free-solid-svg-icons';



import Navbar from './Navbar/nav';


export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);


  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
 
  };
 
  return (
    <header className="header">
       <div className="box">
       <img width="95px" src="bblogo.jpeg" alt="" />
      
      </div>
      <Navbar active={activeMenu} />
      <div className="icons">
        <button type="button" id="menu-btn" onClick={handleMenuButton}>
        
        </button>
   
      </div>
  
    </header>
  );
}
