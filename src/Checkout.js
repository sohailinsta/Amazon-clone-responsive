import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return ( 
  <div className="checkout">
      <div className="checkout__left">
          <img className="checkout__ad" 
          src="https://rukminim1.flixcart.com/flap/844/140/image/ef3af286194c865e.jpg?q=50" 
          alt=""/>
          <div>
          <h2 className="checkout__title">
            Your Shopping Basket</h2>
            {basket.map(item=>(
              <CheckoutProduct
              title={item.title}
              img={item.img}
              price={item.price}
              />    
            )  
            )}
          </div>
      </div>
      <div className="checkout__right">
      <Subtotal/>
      </div>
    </div>
    )
}

export default Checkout;