import './Header.css';
import React from 'react';
import logo from '../../assets/Left-aligned-square-gray-2.png';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Header extends React.Component {

    onReload = () => {
        console.log("Reload clicked");
        window.location.reload();
    }

    render() {
        return(
            <Jumbotron id="header">
                <img src={logo} alt="Logo" data-testid="reload" onClick={this.onReload}/>
                <h1>BSU In-Patient Nurse Staffing Simulator</h1>
            </Jumbotron>
        );
    }
}

export default Header;
