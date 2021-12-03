import React from 'react';
import { Card, Figure } from 'react-bootstrap';
import budget from '../../assets/budget.jpeg';
import error from '../../assets/error.jpeg';
import initialpg from '../../assets/initialpg.jpeg';
import input from '../../assets/input.jpeg';
import shifts from '../../assets/shifts.jpeg';
import staffModal from '../../assets/staffModal.jpeg';


class About extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <h3>Senior Design Project</h3>
                    <h3>CS 481 Fall 2021</h3>
                    <h3>Boise State University</h3>
                </div>
                <div className="row mt-3">
                    <h4>Project Members</h4>
                    <p>Emma Lytle, Lih Wei Liang, and Becka Seevers</p>
                </div>
                <div className="row mt-3">
                    <h4>Sponsor</h4>
                    <p>Dr. Renee Walters - reneewalters@boisestate.edu</p>
                </div>
                <div className="row mt-3">
                    <h4>Project Statement</h4>
                    <p>The goal of the Inpatient Nurse Staffing Simulator was to create an interactive interface that will help Boise State nursing students simulate how to staff a hospital unit.
                    </p>
                </div>
                <div className="row mt-3">
                    <h4>Project Description</h4>
                    <p>
                        The Boise State Nursing Department requires that students practice staffing a hospital unit. In the past, students were given scenarios
                        and they were expected to calculate the HPPD, which is the measurement of the average number of hours needed to care for each patient on the unit. After calculating
                        the HPPD, students then fill out their staffing choices and subtract the hours staffed from the HPPD to determine how many hours they have left in the budget. The goal
                        is to staff the unit so that the HPPD is met, or is 0. If HPPD is a negative value, the unit is overstaffed and if it is positive, then it is understaffed. The purpose
                        of the simulator was to take the math component out of the equation, to allow students to just focus on allocating resources appropriately. The simulator will usually be
                        used in class where the instructor is providing the scenario values, but students have the option to create values with the "Random Scenario" button for more practice.
                    </p>
                    <p>
                        Students can prepopulate the hospital staffing scenario fields by clicking the "Random Scenario" button or they can enter values manually.
                        Once values are entered in the scenario fields, the HPPD value will change in the "Hours Remaining in the Day" box. Students are then expected to add staff members to determine how to
                        staff for this scenario while still remaining within budget. If they schedule too many staff members, the HPPD value will become negative and display red.
                        Students can also choose to show the salary budget by selecting the "Show Budget" checkbox. This will display the total cost to staff the unit based off of their staffing decisions.
                        For this application's calculations, RNs are $35/hour, LVNs are $24/hour, and Unlicensed are $15/hour. Once students add staff members, they appear in the table
                        below the scenario fields and total staff hours for each shift are shown to the right of the page. Calculations used for this project are shown below:
                    </p>
                    <Card className="mb-4">
                        <Card.Body>
                            <h6>Calculating HPPD</h6>
                            <p>totalHPPD = (numberPatients * inputHPPD) - totalStaffHours</p>
                            <h6>Calculating Staff Budgets</h6>
                            <p>totalBudget = totalRNs * 35 + totalLVNs * 24 + totalUnlicensed * 15</p>
                        </Card.Body>
                    </Card>
                    <p>
                        This project is written in ReactJS and hosted on Github Pages. ReactJS was chosen as the framework for this project because it is a popular web development framework and we, as a team,
                        wanted to gain more experience with it, as well as it is useful when creating responsive web pages. With ReactJS, it is important to keep components simple as each of them are considered
                        building blocks that stack on top of one another. We built our file structure as follows:
                    </p>
                    <Card className="mb-4">
                        <Card.Body>
                            <ul>
                                <li>Index.js </li>
                                <ul>
                                    <li>App.js</li>
                                    <ul>
                                        <li>Header.js </li>
                                        <li>Scenario.js </li>
                                        <ul>
                                            <li>RandomHPPDInfo.js </li>
                                            <li>Result.js</li>
                                            <li>StaffBudget.js </li>
                                            <li>ShiftTotals.js </li>
                                            <li>StaffAdd.js </li>
                                            <li>StaffList.js  </li>
                                        </ul>
                                        <li>About.js </li>
                                        <li>Footer.js</li>
                                    </ul>
                                </ul>
                            </ul>
                        </Card.Body>
                    </Card>
                    <p>
                        State was used to pass information between components, such as adding a new staff member updates the state, which allows StaffList.js to
                        display that new staff member in the table below the scenario. React-Bootstrap was used in all of our styling to keep it consistent between developers.
                        React-Bootstrap also has a lot of documentation on how to write the HTML tags and classes to utilize their various styling options. NPM was used as
                        the package manager and to build, test, run, and deploy the web application.
                    </p>
                    <p>
                        Here are some example screenshots from the web application:
                    </p>
                    <Figure>
                        <Figure.Image
                            width="60%"
                            height="60%"
                            alt="Inital load"
                            src={initialpg}
                        />
                        <Figure.Caption>
                            Web application on initial load.
                        </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width="60%"
                            height="60%"
                            alt="Page after input is entered"
                            src={input}
                        />
                        <Figure.Caption>
                            Web application after scenario information is entered and staff are added.
                        </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width="60%"
                            height="60%"
                            alt="Error handling"
                            src={error}
                        />
                        <Figure.Caption>
                            Error handling in form.
                        </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width="60%"
                            height="60%"
                            alt="Staff modal"
                            src={staffModal}
                        />
                        <Figure.Caption>
                            Staff modal.
                        </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width="60%"
                            height="60%"
                            alt="Staff shifts"
                            src={shifts}
                        />
                        <Figure.Caption>
                            Staff shifts displayed.
                        </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width="60%"
                            height="60%"
                            alt="Budget"
                            src={budget}
                        />
                        <Figure.Caption>
                            Budget is displayed.
                        </Figure.Caption>
                    </Figure>
                </div>
                <div className="row mt-3">
                    <h4>Technical Details</h4>
                    <div className="container">
                        <ul>
                            <li>ReactJS</li>
                            <li>React-Bootstrap styling</li>
                            <li>Hosted on Github Pages</li>
                            <li>NPM</li>
                        </ul>
                    </div>
                </div>
                <p><a href="https://github.com/BoiseState/nursestaffingsim">Nurse Staffing Simulator</a> is maintained by <a href="https://github.com/cs481-ekh">Dr. Eric Henderson</a>  - ehenderson@boisestate.edu</p>
            </div>
        );
    }
}

export default About;