import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Education from './Components/Education';
import Pricing from './Components/Pricing';
import Reviews from './Components/Reviews';
import FAQs from './Components/FAQs';
import HireMe from './Components/HireMe';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />

        {/* {About ME Pages} */}
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Education' element={<Education />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/Testimonials' element={<Reviews/>}/>
        <Route path='/FAQs' element={<FAQs />} />
        <Route path='/HireMe' element={<HireMe />} />
      </Routes>
      {/* <Education/> */}
      <Footer />
    </>
  );
}

export default App;
