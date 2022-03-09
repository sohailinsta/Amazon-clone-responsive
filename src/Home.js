import React from 'react';
import "./Home.css";
import Product from './Product';
import Data from "./data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Home() {
  return <div className="home">
      <div className="home__container">
        <Carousel>
          <img className="home__image"
          src="https://m.media-amazon.com/images/I/71MwDPWV9XL._SX3740_.jpg" alt=""> 
          </img>
          <img className="home__image"
          src=" https://m.media-amazon.com/images/I/61nkZRiUABL._SX3740_.jpg" alt=""> 
          </img>
          <img className="home__image"
          src="https://m.media-amazon.com/images/I/71hHxMf4KVL._SX3740_.jpg" alt=""> 
          </img>
          <img className="home__image"
          src=" https://m.media-amazon.com/images/I/71nRigVIXuL._SX3740_.jpg" alt=""> 
          </img>
          <img className="home__image"
          src=" https://m.media-amazon.com/images/I/61-e1sYEjoL._SX3740_.jpg" alt=""> 
          </img>
          <img className="home__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt=""> 
          </img>
          <img className="home__image"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt=""> 
          </img>
          <img className="home__image"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt=""> 
          </img>
          <img className="home__image"
          src="https://m.media-amazon.com/images/I/51KPomo7-cL._SX1500_.jpg" alt=""> 
          </img>
          <img className="home__image"
          src="https://m.media-amazon.com/images/I/616FAruqXHL._SX3000_.jpg" alt=""> 
          </img>
          <img className="home__image"
          src="https://m.media-amazon.com/images/I/61tuFkugZXL._SX3740_.jpg" alt=""> 
          </img>
          </Carousel>
        <div className="home__row">
        {
          Data.map((items)=>{
            return(
              <>
              <Product img={items.img}
                 title={items.title}
                 price={items.price}   
        />
              </>
            )
          })
        }

</div>
</div>
  </div>;
}

export default Home;

        