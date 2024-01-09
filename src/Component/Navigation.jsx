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
                <NavDropdown title="Industries We Serve" id="basic-nav-dropdown" href="/industries-we-serve">
                  <NavDropdown.Item href="/industries-we-serve/hotel-marketing">Hotel Marketing</NavDropdown.Item>
                  <NavDropdown.Item href="/industries-we-serve/restaurant-marketing">Restaurant Marketing</NavDropdown.Item>
                  <NavDropdown.Item href="/industries-we-serve/cloud-kithen-marketing">Cloud Kithen Marketing</NavDropdown.Item>
                </NavDropdown><span>&#124;</span>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/services/website-development">Website Development</NavDropdown.Item>
                  <NavDropdown.Item href="/services/social-media-marketing">Social Media Marketing</NavDropdown.Item>
                  <NavDropdown.Item href="/services/serach-engine-optimization">Serach Engine Optimization(SEO)</NavDropdown.Item>
                  <NavDropdown.Item href="/services/paid-ad-campaigns">Paid Ad Campaigns</NavDropdown.Item>
                </NavDropdown><span>&#124;</span>
                <Nav.Link href="/our-team">Our Team</Nav.Link><span>&#124;</span>
                <Nav.Link href="/blog-page">Blogs</Nav.Link><span>&#124;</span>
                {/* <Nav.Link href="/landing-page2">Landing Page2</Nav.Link><span>&#124;</span> */}
                <Nav.Link href="/contact-page">Contact Us</Nav.Link> 

              </Nav>
              <Nav.Link className='navphone' href="#link"><i className="fa-solid fa-phone"></i>+919501868775</Nav.Link>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Navigation
