import React from 'react';
import './Result.css';

class Result extends React.Component {
    // constructor(props) {
    //     super(props);

    //   }

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
        //ToDO:  Correct Algorithm needed.  This is a sipmple math check to see 
        //       the values work.

        let bedUnitVal = parseInt(info.bedUnit);
        let censusVal = parseInt(info.census);
        let HPPDVal = parseInt(info.HPPD);

        let patients = bedUnitVal * (censusVal/100);
        
        let totalHPPD = (patients * HPPDVal)

        let staffHours = this.getStaffHours(staffs);
        

        return totalHPPD - staffHours;

    }

    render() {

        const calc = this.calculation(this.props.info, this.props.staffs);

        return (
            <div id="results">
                <h1 className={ calc <0 ?"negCalc" : ""}>{calc.toFixed(0)}</h1>
            </div>
        );
    }
}

export default Result;
