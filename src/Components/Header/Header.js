import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import './Header.css'

function Header() {
  return ( 
    <div className="header">
      <LocalDiningIcon />
      <div className="headerSearch">
        <input className="" placeholder="Start your Search"></input>
        <SearchIcon />
      </div>
      <div className="headerUtility">
        <button>Become a Member</button>
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