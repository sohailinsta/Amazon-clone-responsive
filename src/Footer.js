import React from 'react'
import "./Footer.css";
import LanguageIcon from "@material-ui/icons/Language";
function Footer() {
  return (
    <div>
        <div className="footer-top">
           <div className="top-back">Back to top</div>
        </div>
        <div className="another-footer">
        <div className="flex">
        <div className="get-to-know">
           <div className="font-about"> Get To Know Us </div>
        <div className="about">About Us</div>
        <div className="about">Careers</div>
        <div className="about">press Releases</div>
        <div className="about">Amazon Cares</div>
        <div className="about">Gifts a Smile</div>
        <div className="about">Amazon Science</div>
        </div>
        <div className="get-to-know">
        <div className="font-about">Connect With Us </div>
        <div className="about">Facebook</div>
        <div className="about">Twitter</div>
        <div className="about">Instagram</div>
        </div>

        <div className="get-to-know">
        <div className="font-about"> Make Money With Us </div>
        <div className="about">Sell on Amazon</div>
        <div className="about">Sell under Amazon Accelerator</div>
        <div className="about">Amazon Global Selling</div>
        <div className="about">Become an Affiliate</div>
        <div className="about">Fulfilment Your Products</div>
        <div className="about">Advertise Your Products</div>
        <div className="about">Amazon Pay on Merchants</div>
        </div>

        <div className="get-to-know">
        <div className="font-about"> Let Us Help You </div>
        <div className="about">Covid-19 and Amazon</div>
        <div className="about">Your Account</div>
        <div className="about">Return Center</div>
        <div className="about">100% Purchase Protection</div>
        <div className="about">Amazon App Download</div>
        <div className="about">Amazon Assistant Download</div>
        <div className="about">Help</div>
        </div>


        </div>

        <div className="line">-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
        <div className="flex-img-language">
        <img className="header__logo"
      src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="box-language">
          <LanguageIcon className="language-icon"/>
          <div className="english-box">
              English
              </div>
      </div>
      </div>

      <div className="flex-australia">
      <p className="australia">Australia</p>
      <p className="australia-two">Australia</p>
      <p className="australia-two">Brazil</p>
      <p className="australia-two">Canada</p>
      <p className="australia-two">China</p>
      <p className="australia-two">France</p>
      <p className="australia-two">Germany</p>
      <p className="australia-two">Italy</p>
      <p className="australia-two">Japan</p>
      <p className="australia-two">Mexico</p>
      <p className="australia-two">Netherlands</p>
      <p className="australia-two">Poland</p>
      <p className="australia-two">Singapore</p>
      <p className="australia-two">Spain</p>
      <p className="australia-two">Turkey</p>
      </div>


    <div className="third-footer">
      <div className="flex">
        <div className="get-to-know-two">
           <div className="font-about-two"> AbeBooks </div>
        <div className="about-two">Books, ar & collectibles</div>
        <div className="about-two">Careers</div>
        </div>
        <div className="get-to-know-two">
        <div className="font-about-two">Amazon Web Services </div>
        <div className="about-two">Scalable Cloud</div>
        <div className="about-two">Computing Services</div>
        </div>

        <div className="get-to-know-two">
        <div className="font-about-two"> Audible </div>
        <div className="about-two">Download</div>
        <div className="about-two">Audio Books</div>
        </div>

        <div className="get-to-know-two">
        <div className="font-about-two"> DPReview </div>
        <div className="about-two">Digital</div>
        <div className="about-two">Photography</div>
        </div>
        </div>

        <div className="flex-two">
        <div className="get-to-know-two">
           <div className="font-about-two"> Shopbop </div>
        <div className="about-two">Designer</div>
        <div className="about-two">Fashion Brands</div>
        </div>
        <div className="get-to-know-two">
        <div className="font-about-two-business">Amazon Business</div>
        <div className="about-two-everything">Everything For </div>
        <div className="about-two-everything">Your Business</div>
        </div>

        <div className="get-to-know-two">
        <div className="font-about-two">Prime Now</div>
        <div className="about-two">2-Hour Delivery</div>
        <div className="about-two">on Everyday Items</div>
        </div>

        <div className="get-to-know-two">
        <div className="font-about-two"> Amazon Prime Music </div>
        <div className="about-two">90 million songs, ad-free</div>
        <div className="about-two">over 15 million podcast episodes</div>
        </div>
        </div>


    <p className="margin-copy">Conditions of Use & Sale   Privacy Notice   Interest-Based-Ads &copy; 1996-2022, Amazon.com, Inc. or its affiliates</p>

        </div>


        </div>
        </div>
  )
}

export default Footer