import React from 'react';
import './Banner.css';
import { Button } from "@material-ui/core"

function Banner() {
  return (
    <div className="banner">
      <div className="bannerInfo">
        <h1>Get out and stretch you imagination</h1>
        <h5>Plan a different kind of getaway, uncover the hidden gems near you</h5>
        <Button variant='outlined'>Explore Now</Button>
      </div>
      
    </div>
  )
}

export default Banner