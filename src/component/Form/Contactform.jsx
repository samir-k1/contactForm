// import React from 'react';
import Button from '../button/Button';
import styles from './Contactform.module.css';
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import dsx from '../../assets/image/clock.svg';
import { useState } from 'react';

const Contactform = () => {
  const [name,setName]=useState('samir')
  const [email,setEmail]=useState('samirkhan.@gmail.com')
  const [text,setArea]=useState('')
  
  const onSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Extract form data from event target
    const { name, email, text } = event.target.elements;

    // Update the formData state with new values
    setName( name.value)
    setEmail(email.value)
    setArea(text.value)
 
  };
  
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="via SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
          <Button text="via CALL" icon={<FaPhone fontSize="24px" />}/>
        </div>
        <Button isOutLine={true} text="Via e mail form" icon={<CiMail fontSize="24px" />}/>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor='name'>Name</label>
            <input type="text" name='name' placeholder='Enter your name'/>
            <label htmlFor='email'>Email</label>
            <input type="text" name='email' placeholder='Enter your email address'/>
            <label htmlFor='text'>Text</label>
            <textarea name='text' rows={8} placeholder='Enter your message'/>
          </div>
          <Button type="submit" text="Submit" />
        </form>
      </div>
      <div>
      {name +" "+ email +" "+text}
      </div>
      <div className={styles.contact_image}>
        <img src={dsx} alt="frame" />
      </div>
    </section>
  );
}

export default Contactform;