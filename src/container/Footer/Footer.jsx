import React, {useState} from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    
  }

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:blessedmahuni@gmail.com" className='p-text'>blessedmahuni@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +263776224111" className='p-text'>+263776224111</a>
        </div>
      </div>

      {
        !isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" name="name" id="" className="p-text" placeholder='Your Name' value={name} onChange={handleTextChange}/>
          </div>
          <div className="app__flex">
            <input type="email" name="email" id="" className="p-text" placeholder='Your Email' value={email} onChange={handleTextChange}/>
          </div>
          <div>
            <textarea 
              name="message"
              id=""
              placeholder='Your Message'
              className="p-text"
              value={message}
              onChange={handleTextChange}  
            />
          </div>
          <button type='button' className="p-text" onClick={handleSubmit}>
            {loading ? 'Sending Message' : 'Send Message'}
          </button>
        </div>
        :
        <div className="">
          <h3 className="head-text">Thank You For Getting In Touch</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');