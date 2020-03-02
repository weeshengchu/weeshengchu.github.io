import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Alan CHU",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Stay Curious",
        subTitle: "projects that make a difference",
        text: "Checkout my latest projects below"
      },
      about: {
        title: "About Me!"
      },
      contact: {
        title: "Let's Talk"
      }
    };
  }

  render() {
    return (
      <Router>
        {/* 2. getting the header with navbar */}
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Alan CHU</Navbar.Brand>

            <Navbar.Toggle
              className="border-bottom"
              aira-controls="navbar-toggle"
            ></Navbar.Toggle>

            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* 4. Routing */}
          <Route
            path="/react-portfolio/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />

          <Route
            path="/about"
            exact
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          {/* 3. importing the footer */}
          <Footer></Footer>
        </Container>
      </Router>
    );
  }
}

export default App;
