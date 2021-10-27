import React from 'react';
//import {  Row, Col } from "react-bootstrap";
import './Result.css';

class Result extends React.Component {
    // constructor(props) {
    //     super(props);

    //   }

    calculation = (info, staffs) => {
        //not even attempting to calculate.  
        //Just demonstrating that the data is accessible.
        let result = parseInt(info.bedUnit) + parseInt(info.census) + parseInt(info.HPPD);

        let num = 0;
        for (var i = 0; i < staffs.length; i++) {
            console.log(staffs[i]);

            if(staffs[i].shift === "12 Hours Day")
            {
                    num = result + staffs[i].num;
            }
            num = num + staffs[i].num;

        }

        return num;

    }

    render() {

        const calc = this.calculation(this.props.info, this.props.staffs);

        return (
            <div id="results">
                <h1>{calc}</h1>
            </div>
        );
    }
}

export default Result;
