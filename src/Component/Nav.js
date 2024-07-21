import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { Home, HomeTwo } from "../Pages/Home/Home";
import { Project, ProjectHeading, SmallProject } from "./Project/Project";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import "../Css/Nav.css";
export default class Navibar extends Component {
  render() {
    return (
      <Router>
        <Navbar expand="lg" className=" nav-bg-body fixed-top   ">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto nav-text-white font-face-gm">
                <Nav.Link as={Link} to="/">
                  #Home
                </Nav.Link>
                <Nav.Link as={Link} to="/project">
                  #Project
                </Nav.Link>
                <Nav.Link as={Link} to="/blog">
                  #Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  #Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div style={{ marginTop: "70px" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <HomeTwo />{" "}
                </>
              }
            />
            <Route
              path="/project"
              element={
                <>
                  <ProjectHeading />
                  <Project />
                  <SmallProject />
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
