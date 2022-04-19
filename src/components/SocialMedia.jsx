import React from 'react'
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
       <div>
         <a href="https://twitter.com/@WoodyJohnsonMah" target={"_blank"}><BsTwitter/></a>
       </div>
       <div>
        <a href="https://facebook.com/tawanda.187" target={"_blank"}><FaFacebookF/></a>
       </div>
       <div>
        <a href="https://www.linkedin.com/in/blessed-tawanda-mahuni" target={"_blank"}><BsLinkedin/></a>
       </div>
    </div>
  )
}

export default SocialMedia  