import React from 'react'

const Cartitems = ({Productitem , Addtocart}) => {
  return (
    <div className='Cartitem'>
    <img src={Productitem.url}/>
    <p>{Productitem.name} || {Productitem.category}</p>
    
    <p>{Productitem.seller}</p>
    <p> Rs.{Productitem.price}/-</p>
    {/* <button onClick={(()=>{
      const _CART = cart.map((Productitem, itemindex)=>{
      return Productitemindex === itemindex ? {...Productitem , quantity : Productitem.quantity>0 ? Productitem.quantity-1 : 0} : Productitem
      
    })
    setCart(_CART)
})}>-</button> */}
    {Productitem.quantity}
    <button onClick={()=>Addtocart(Productitem)}>Add to cart</button>
    

</div>
  )
}

export default Cartitems