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
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img src={logo} alt="Logo" height="50" data-testid="reload" onClick={this.onReload} />

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.boisestate.edu/nursing/">Nursing Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="p-5 bg-primary text-white rounded">
                    <h1>In-Patient Staffing Simulator</h1>
                </div>
            </header>

        );
    }
}

export default Header;