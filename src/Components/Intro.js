import React from 'react'
import Logo from '../Assets/images/logo.svg'

function Intro() {
  return (
    <div>
        <div className="intro p20 pt80 pb40">
            <img src={Logo} width={300} alt="" />
            <h1>Welcome to Town Scrap Metal</h1>
            <p>We're a private-owned business that will purchase your ferrous and non-ferrous metals for a competitive price. Let us know what metals you have. </p> 
            {/* <p>Follow us on instagram: <strong><a href="#">@townscrapremoval</a></strong></p>            */}
        </div>
    </div>
  )
}

export default Intro