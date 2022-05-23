import React from 'react'
import Image1 from '../Assets/images/1.png'
import Image2 from '../Assets/images/2.png'
import Image3 from '../Assets/images/3.png'
import Image4 from '../Assets/images/4.png'
import Image5 from '../Assets/images/5.png'
import Image6 from '../Assets/images/6.png'

function Photos() {
  return (
    <div>
        <div className="photos">
          <div>
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
          </div>
          <div>
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
          </div>
          <div>
            <img src={Image5} alt="" />
            <img src={Image6} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Photos