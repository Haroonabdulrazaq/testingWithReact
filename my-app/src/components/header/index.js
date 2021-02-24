import React from 'react';
import './index.scss';
import logo from '../../assets/logo192.png';

const Header = () => {
  return (
    <div className="wrapper">
       <div className="logo">
         <img src={logo} alt="logo" width="50" height="50"/>
       </div>
    </div>
  )
}

export default Header;
