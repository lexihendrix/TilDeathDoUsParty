import { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import { SuitHeartFill } from "react-bootstrap-icons";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar collapseOnSelect expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          A <SuitHeartFill className="heart" color="red" /> R
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              ></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#the-location"
                className={
                  activeLink === "the-location"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("the-location")}
              >
                The Details
              </Nav.Link>
            </Nav.Item>
            <NavItem>
              <Nav.Link
                id="rsvp-txt"
                href="#rsvp"
                className={
                  activeLink === "rsvp" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("rsvp")}
              >
                RSVP
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
