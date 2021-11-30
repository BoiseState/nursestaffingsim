import './Header.css';
import React from 'react';
import logo from '../../assets/Left-aligned-square-gray-2.png';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
class Header extends React.Component {

    onReload = () => {
        console.log("Reload clicked");
        window.location.reload();
    }

    render() {
        return (

            <header>
                {/* <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <img src={logo} alt="Logo" data-testid="reload" onClick={this.onReload} />
                        <div className="navbar-nav me-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav navbar-right me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="text-dark nav-link" to="/f21-angels-of-mercy/about">About</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav navbar-right me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="text-dark nav-link" href="https://www.boisestate.edu/nursing/">BSU Nursing Department</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
                <Navbar bg="light" >
                    <Container>
                        <img src={logo} alt="Logo" data-testid="reload" onClick={this.onReload} />
                        <Nav className="me-auto">
                        <Link className="text-dark nav-link" to="/f21-angels-of-mercy/">Home</Link>
                        <Link className="text-dark nav-link" to="/f21-angels-of-mercy/about">About</Link>
                        <Nav.Link className="text-dark" href="https://www.boisestate.edu/nursing/">BSU Nursing Department</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <div className="p-5 bg-primary text-white rounded">
                    <h1>Inpatient Nurse Staffing Simulator</h1>
                </div>
            </header>

        );
    }
}

export default Header;
