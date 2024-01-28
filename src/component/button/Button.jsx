import React from 'react'
import { MdMessage } from "react-icons/md";
import  style from './Button.module.css'

const Button = (props) => {
  const {isOutLine,icon,text,...rest}=props;
  return (
    
   
       <button 
       {...rest}className={isOutLine?style.outline_btn:style.primary_btn}>
         {icon} 
      {text}
      
       </button>

   
  )
}

export default Button
