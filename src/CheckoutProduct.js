import React from 'react';
import "./CheckoutProduct.css";
function CheckoutProduct({img, title, price}) {

const removeFromBasket = () =>{
    dispatchEvent({
        type: 'REMOVE_FROM_BASKET',
        
    })
}

  return <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={img}
      />
      <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
              {title}
          </p>
          <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove from Checkout</button>
      </div>
  </div>;
}

export default CheckoutProduct;
