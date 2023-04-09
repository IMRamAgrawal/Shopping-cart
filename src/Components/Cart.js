import React from 'react'
import Product from './Product'
import '../App.css';
import Cartitems from './Cartitems';

const Cart = ({Addtocart}) => {
  return (
    <div className='Cart'>
      {Product.map((Productitem, index)=>{
      return(
       <Cartitems Productitem={Productitem} Addtocart={Addtocart} key={index}/>
      ) })}
    </div>
  )
}

export default Cart


