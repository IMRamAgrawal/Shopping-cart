import React from 'react'
import '../App.css';


const Header = ({count, handleclick ,show , setShow}) => {
  return (
    <div className="Header">
        <div className="cart-icon" onClick={()=>handleclick(true)}>Shopping Cart</div>
       
        <div className="cart-icon"  onClick={()=>handleclick(false)}>Cart
          <sup>{count}</sup>
        </div>
    </div>
  )
}

export default Header   