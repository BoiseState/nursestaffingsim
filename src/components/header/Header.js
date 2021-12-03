import './Header.css';
import React from 'react';
import logo from '../../assets/Left-aligned-square-gray-2.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    onReload = () => {
        console.log("Reload clicked");
        window.location.reload();
    }

    render() {
        return (

            <header>
                <Navbar bg="light" >
                    <Container>
                        <img src={logo} alt="Logo" data-testid="reload" onClick={this.onReload} />
                        <Nav className="me-auto">
                            <Link className="text-dark nav-link" to="/f21-angels-of-mercy">Home</Link>
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
