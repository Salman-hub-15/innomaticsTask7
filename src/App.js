import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-bootstrap';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Placements from './components/Placements';
import Events from './components/Events';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/services/*' element={<Services />} />
            <Route path='/services/placements' element={<Placements/>} />
            <Route path='/services/events' element={<Events />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes> 
      {/* <Events/> */}
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
