import React, { useEffect ,useState} from 'react'
import '../App.css';
const Listcart = ({cart, setCart}) => {
 const[price , setPrice] = useState(0)
const handleprice = ()=>{
  let ans = 0;
  {cart.map((Productitem)=>
  ans += (Productitem.price)*(Productitem.quantity))}
  setPrice(ans)
}
const handleremove = (id)=>{
 const arr = cart.filter((item)=>{
  return item.id !== id 
}
  )
  setCart(arr)
}
useEffect (() =>{
  handleprice();
})
  return (
    <>
    <div className='listcartitem'>
        {cart.map((Productitem, Productitemindex)=>{
      return(
        <div className='Cartitems' key={ Productitemindex}>
            <img src={Productitem.url}/>
            <p style={{marginLeft:"10px"}}>{Productitem.name} || {Productitem.category}</p>
            
            <p>{Productitem.seller}</p>
          
            <div className='quantity'>
         <button  onClick={(()=>{
              const _CART = cart.map((Productitem, itemindex)=>{
              return Productitemindex === itemindex ? {...Productitem ,quantity : Productitem.quantity+1 } : Productitem
              
            })
            setCart(_CART)
    })}>+</button>
   
            <span style={{marginLeft:"10px"}}>{Productitem.quantity}</span>
            <button style={{marginLeft:"10px"}} onClick={(()=>{
              const _CART = cart.map((Productitem, itemindex)=>{
              return Productitemindex === itemindex ? {...Productitem , quantity : Productitem.quantity>0 ? Productitem.quantity-1 : 0} : Productitem
              
            })
            setCart(_CART)
           
    })}>-</button>
    </div>
          <p className="price" style={{marginLeft:"50px"}}> Rs.{(Productitem.price)*(Productitem.quantity)}/-</p>
        <button className="remove"  onClick={(()=>handleremove(Productitem.id))}>Remove</button>
       
        </div>
      ) })}
    </div>
       <span style={{marginLeft:"60px", marginTop:"20px"}}>Total price : </span>
       <span>
        Rs.{price}/-
       </span>
       </>
  )
}

export default Listcart