import React from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider";
function Product({img, title, price}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
           title: title,
           img: img,
           price: price,     
            },
        });
    };
  return (
  <div className="product">
      <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
              <small>$</small>
              <strong>
                  {price}
              </strong>
          </p>
          <div className="product__rating">
          </div>
      </div>
      <img src={img}></img>
      <button onClick={addToBasket}>Add to List</button>
  </div>
    )
}

export default Product;
