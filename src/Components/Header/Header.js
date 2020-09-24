import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { Button } from "@material-ui/core"
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
      <Button variant='outlined'>Become a Member</Button>
        <div className="headerSignUp">
          <MenuIcon />
          <AccountCircleIcon />
          
        </div>
      </div>
    </div>
  )
}

export default Header