import React from 'react';
import './Result.css';

class Result extends React.Component {

    getShiftValue = (shiftString) => {
        //considered changing shift to just be 12,...8 so parseint would just work
        //but additional information from string i.e. day, night might be needed.
        let shiftValue = 0;
        switch (shiftString) {
            case '12 Hours Day':
                shiftValue = 12;
                break;
            case '12 Hours Night':
                shiftValue = 12;
                break;
            case '8 Hours Day':
                shiftValue = 8;
                break;
            case '8 Hours Evening':
                shiftValue = 8;
                break;
            case '8 Hours Night':
                shiftValue = 8;
                break;
            default:
                shiftValue = 0;
        }

        return shiftValue;
    }


    getStaffHours = (staffs) => {
        let totalHours = 0;
        for (var i = 0; i < staffs.length; i++) {
            //Do we need to check on stafftype Here?
            let shiftValue = this.getShiftValue(staffs[i].shift);
            let quantity = parseInt(staffs[i].quantity);

            totalHours += shiftValue * quantity;
        }
        return totalHours;
    }


    calculation = (info, staffs) => {

        let censusVal = parseInt(info.census);
        let HPPDVal = parseInt(info.HPPD);

        let patients = censusVal;

        let totalHPPD = (patients * HPPDVal)

        let staffHours = this.getStaffHours(staffs);

        let retVal = totalHPPD - staffHours;
        
        if(retVal){
            return retVal;
        }

        return "--";

    }

    render() {

        const calc = this.calculation(this.props.info, this.props.staffs);

        return (

                <div className="card">
                    <div className="card-header">Hours for Day Remaining</div>
                    <div id="results" className="card-body">
                        <label>HPPD</label>
                        <h1 className={calc < 0 ? "negCalc" : ""}>{calc !== "--" ? calc.toFixed(0) : calc}</h1>

                    </div>
                </div>


        );
    }
}

export default Result;
