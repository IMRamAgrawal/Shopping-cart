import Header from './Components/Header';
import Cart from './Components/Cart';
import './App.css';
import { useState } from 'react';
import Listcart from './Components/Listcart';

function App() {
  const [cart, setCart] = useState([])
  const [show, setShow] = useState(true)
  const [warning, setWarning] = useState(false)
  const Addtocart = (data)=> {
    let ispresent = false;
   
    cart.forEach((e) => {
     if(data.id === e.id) {
      ispresent = true;
     }
   
    });
    if(ispresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false);
        // console.log("item is already added in your cart")
      },2000)
      
      return ;
     }
    setCart([...cart,{...data , quantity:1}])
    
   
 
  }
  const handleclick = (value)=> {
    setShow(value)
   
  }
  
  const count = cart.length
  // const [showcart, setShowcart] = useState(false)

  return (
    <div>
     {/* <Header count={count} showcart={showcart}/> */}
     <Header count={count} handleclick={handleclick}/>   
          
     {show ? <Cart Addtocart={Addtocart} show={show} setShow={setShow}/> :  <Listcart cart={cart} setCart={setCart}/> }
     {warning && <div className='warning'>Item is already added in your cart</div>}
     {/* <hr/>
     <Listcart handleclick={handleclick} cart={cart}/> */}
    </div>
  );
}

export default App;
