import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Assests/Images/cropped-fielmente-logo.webp'

const Navigation = () => {
  return (
    <>
      <div className="main_navbar">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand className='logo' href="/"><img src={Logo} alt='Fielmente logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mid_nav">
                <Nav.Link href="/about-page">About</Nav.Link><span>&#124;</span>
                <NavDropdown title="Industries We Serve" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Hotel Marketing</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Restaurant Marketing</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Cloud Kithen Marketing</NavDropdown.Item>
                </NavDropdown><span>&#124;</span>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Website Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Social Media Marketing</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Serach Engine Optimization(SEO)</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Paid Ad Campaigns</NavDropdown.Item>
                </NavDropdown><span>&#124;</span>
                <Nav.Link href="#link">Blogs</Nav.Link><span>&#124;</span>
                {/* <Nav.Link href="/landing-page2">Landing Page2</Nav.Link><span>&#124;</span> */}
                <Nav.Link href="/contact-page">Contact Us</Nav.Link> 

              </Nav>
              <Nav.Link className='navphone' href="#link"><i class="fa-solid fa-phone"></i>+919501868775</Nav.Link>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Navigation
