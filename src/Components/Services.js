import React from 'react'
import pickup from '../../src/Assets/images/pickup.png'
import copper from '../../src/Assets/images/13.png'
import cash from '../../src/Assets/images/cash.png'
var service_pickup = {
  backgroundImage: `url(${pickup})`,
};
var service_copper = {
  backgroundImage: `url(${copper})`,
};
var service_cash = {
  backgroundImage: `url(${cash})`,
};

function Services() {
  return (
    <div>
        <div className="services">
            <div className="col service-left" style={service_pickup}>
              <h2>Free Pickups</h2>
            </div>
            <div className="col service-right" style={service_copper}>
              <h2>Bin Services </h2>
            </div>
            <div className="col service-right" style={service_cash}>
              <h2>Pay Cash</h2>
            </div>
        </div>
    </div>
  )
}

export default Services