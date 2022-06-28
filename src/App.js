import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Shop from './Shop';
import About from './About';
import Contact from './Contact';


function App() {

  return <Router>  

  <nav>
  <Link to='/' className='Link'>Shop</Link>
  <Link to='/about' className='Link'>About</Link>
  <Link to='/contact' className='Link'>Contact</Link>
</nav>

<Routes>
  <Route path='/' element={< Shop/>} />
  <Route path='/about' element={< About/>} />
  <Route path='/contact' element={< Contact/>}/>
</Routes>

</Router>
}
  
export default App;
