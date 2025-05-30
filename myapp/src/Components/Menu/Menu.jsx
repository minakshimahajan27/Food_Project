import React from 'react'
import "./Menu.css"
export default function Menu() {
  return (
    <>
        <p className='heading1'>POPULAR DISES</p>
<p className='contant'>Morbi in sed enim viverra ammet. A commondo nunc mauris , in accumsan facilisi montes </p>
  <div className='dishes1'>
    <div>
       <img className='dish_img' src='dinner1.jpeg'/>
       <h2>ROASTED LAMB RUMP</h2>
    </div>
    <div>
      <img className='dish_img' src='dinner2.png'/>
       <h2>CITRUS CURED SALMON</h2>
    </div>
    <div>
      <img className='dish_img' src='dinner4.png'/>
       <h2>MUSSELS SOUP</h2>
    </div>
    <div>
      <img className='dish_img' src='dinner3.png'/>
       <h2>ATUFFED STRAWBERRY</h2>
    </div>
  </div> 

  <div className='dishes2'>
    <div>
      <img className='dish_img' src='lunch1.png'/>
       <h2>BEEF BURGER MEAL</h2>
    </div>
    <div>
      <img className='dish_img' src='dinner5.png'/>
       <h2>ITALIAN APAGHETTI</h2>
    </div>
    <div>
      <img className='dish_img' src='dinner6.png'/>
       <h2>GRILLED FISH</h2>
    </div>
    <div>
      <img className='dish_img' src='dinner6.png'/>
       <h2>GRILLED FISH</h2>
    </div>
  </div>


    </>
  )
}
