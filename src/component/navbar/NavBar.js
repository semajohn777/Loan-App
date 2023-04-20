import React, { useState } from 'react'
import './navbar.css'
import logo from '../images/semaLogo.png'

import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  Offcanvas,
  Image,
  NavDropdown,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [menuOpen, toggleMenuOpen] = useState(false)
  // const [colorChange, setColorchange] = useState(false)
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 80) {
  //     setColorchange(true)
  //   } else {
  //     setColorchange(false)
  //   }
  // }
  // window.addEventListener('scroll', changeNavbarColor)

  return (
    <>
      <Navbar
        className="pe-4 ps-4 colorChange border text-white"
        expand="lg"
        sticky="top"
        fixed="top"
      >
        <Container fluid>
          <NavbarBrand as={Link} to="/">
            <Image src={logo} width="150"></Image>
          </NavbarBrand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />

          <Navbar.Offcanvas bg="dark" variant="dark" className="text-end">
            <Offcanvas.Header closeButton className=" text-white">
              {' '}
              <Offcanvas.Title expand="lg">
                <Image src={logo} width="100"></Image>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <br className="br" />

            <Navbar.Collapse id="basic-navbar-nav m-0">
              <Nav className="ms-auto justify-content-center">
                {/* <Nav.Link as={Link} to="/loan" className="nav_link text-white">
                  Loan Criteria
                </Nav.Link> */}
                <NavDropdown
                  // id={`offcanvasNavbarDropdown-expand-`}
                  className="nav_link m-0 pt-0 nav_dropdown text-white"
                  title="Loan Criteria"
                  onMouseEnter={() => {
                    toggleMenuOpen(true)
                  }}
                  onMouseLeave={() => {
                    toggleMenuOpen(false)
                  }}
                  show={menuOpen}
                >
                  <NavDropdown.Item
                    href="#action3"
                    className="nav_link navItem text-white"
                    as={Link}
                    to="/personal"
                  >
                    Personal Loan
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action4"
                    className="nav_link m-0 pt-0 navItem"
                    as={Link}
                    to="/business"
                  >
                    Business Loan
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action5"
                    className="nav_link m-0 pt-0 navItem"
                    as={Link}
                    to="/car"
                  >
                    Car Loan
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action5"
                    className="nav_link m-0 pt-0 navItem"
                  >
                    House Loan
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/" className="nav_link text-white">
                  Features
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="nav_link text-white">
                  About Us
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/signin"
                  className="nav_link text-white "
                >
                  Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
