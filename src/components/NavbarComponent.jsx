import React, { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { navLinks } from "../data"
import DarkModeComponent from "./DarkModeComponent"

import NavImg from "../assets/logonav.png"

const NavbarComponent = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  useEffect(() => {
    const closeNavbarOnOutsideClick = (e) => {
      if (navbarOpen && !e.target.closest(".navbar")) {
        setNavbarOpen(false)
      }
    }

    document.addEventListener("click", closeNavbarOnOutsideClick)

    return () => {
      document.removeEventListener("click", closeNavbarOnOutsideClick)
    }
  }, [navbarOpen])

  return (
    <Navbar expand="lg" className="position-fixed top-0 " expanded={navbarOpen}>
      <Container>
        <Navbar.Brand>
          {/* <img src={NavImg} alt="" /> */}
          DIGI<span>WEB</span>CREATIVE
        </Navbar.Brand>
        <DarkModeComponent />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setNavbarOpen(!navbarOpen)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    end
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                </div>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
