//  import React from 'react'
import styles from "./navigation.module.css";
import logo from '../../assets/image/frame.png'
   import '../../App.css'
const navigation = () => {
  console.log(styles);
  return (
 
      <nav className={`${styles.navigation} container`}>
    
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li>menu</li>
                <li >about</li>
                <li >query</li>
            </ul>
           
            
        
           
        </nav>
      
   
  )
}

export default navigation;
