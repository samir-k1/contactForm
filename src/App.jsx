 import { useState } from 'react';
import Navigation from './component/navigation/navigation'
import ContactUs from './component/contact/ContactUs';
import Contactform from'./component/Form/Contactform';
 import './App.css';

function App() {

  return (
    <div>
   <Navigation/>
   <ContactUs/>
   <Contactform/>
   </div>
  )
}

export default App;
