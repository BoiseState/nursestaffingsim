import React from 'react';
import Header from './Header';
import Footer from '../footer/Footer';

class About extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="App">
                    <Header />
                    <div className="row mt-3">
                        <h2>About</h2>
                    </div>
                    <div className="row mt-3">
                        <h4>Project Members</h4>
                        <p>Emma Lytle, Lih Wei Liang, and Becka Seevers</p>
                    </div>
                    <div className="row mt-3">
                        <h4>Project Statement</h4>
                        <p>The goal of the Inpatient Nurse Staffing Simulator was to create an interactive interface that will help Boise State nursing students simulate how to staff a hospital unit.</p>
                    </div>
                    <div className="row mt-3">
                        <h4>Project Description</h4>
                        <p>Students can prepopulate the hospital staffing scenario fields by clicking the "Random Scenario" button or they can enter values. 
                            This will change the HPPD value in the "Hours Remaining in the Day" box. Students are then expected to add staff members to determine how to 
                            staff for this scenario while still remaining within budget. If they schedule too many staff members, the HPPD value will become red and negative. 
                            Students can also choose to show their salary budget by selecting the "Show Budget" checkbox. Once students add staff members, they appear in the table 
                            below the scenario fields and total staff hours for each shift are shown to the right of the page.</p>
                    </div>
                    <div className="row mt-3">
                        <h4>Technical Details</h4>
                        <div className="container">
                            <ul>
                                <li>ReactJS</li>
                                <li>Hosted on Github Pages</li>
                            </ul>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default About;