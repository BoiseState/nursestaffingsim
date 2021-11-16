import './Header.css';
import React from 'react';
import logo from '../../assets/Left-aligned-square-gray-2.png';

class Header extends React.Component {

    onReload = () => {
        console.log("Reload clicked");
        window.location.reload();
    }

    render() {
        return (

            <header>
                <nav className="navbar navbar-light bg-light ">
                    <div className="container-fluid">
                        <img src={logo} alt="Logo" data-testid="reload" onClick={this.onReload} />
                        <div id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="text-dark nav-link" href="https://www.boisestate.edu/nursing/">BSU Nursing Department</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="p-5 bg-primary text-white rounded">
                    <h1>Inpatient Nurse Staffing Simulator</h1>
                </div>
            </header>

        );
    }
}

export default Header;
