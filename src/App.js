
import './App.css';
import './Style/Main.css'
import './Style/Responsive.css'
import { Route, Routes } from 'react-router-dom';

import Navigation from './Component/Navigation'
import About from './Pages/About Page/About'
import Footer from './Component/Footer';
import Home from './Pages/Home Page/Home';
import Contact from './Pages/Contact Page/Contact';
import LandingPage2 from './Pages/LandingPage2/LandingPage2';
function App() {
  return (
    <>

      <LandingPage2 />
      {/* <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-page" exact element={<About />} />
        <Route path="/contact-page" exact element={<Contact />} />
        <Route path="/landing-page2" exact element={<LandingPage2/>} />
      </Routes>
      <Footer /> */}
    </>
  );
}

export default App;
