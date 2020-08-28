import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'

function Header() {
  return ( 
    <div className="header">
      <img src="https://i.pinimg.com/originals/7b/03/4a/7b034a90114ee20e4fa002c80d276444.png" alt="Logo"></img>
      <div className="headerSearch">
        <input className=""></input>

      </div>
      <div className="headerUtility">
        <button>Become a Host</button>
        <LanguageIcon />
        <div className="headerSignUp">
          <MenuIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  )
}

export default Header