import React from 'react';

class ShiftTotals extends React.Component {

    // grab staff info and add up budget
    getDayShift = (staffs) => {
        let dayShiftHours = 0;

        for (var i = 0; i < staffs.length; i++) {
            let shiftTotal = parseInt(staffs[i].shiftTotal);
            if (staffs[i].shift === '12 Hours Day') {
                dayShiftHours += shiftTotal;
            } else if (staffs[i].shift === '8 Hours Day') {
                dayShiftHours += shiftTotal;
            }
        }

        return dayShiftHours;
    }

    getEveningShift = (staffs) => {
        let eveningShiftHours = 0;

        for (var i = 0; i < staffs.length; i++) {
            let shiftTotal = parseInt(staffs[i].shiftTotal);
            if (staffs[i].shift === '8 Hours Evening') {
                eveningShiftHours += shiftTotal;
            }
        }

        return eveningShiftHours;
    }
    getNightShift = (staffs) => {
        let nightShiftHours = 0;

        for (var i = 0; i < staffs.length; i++) {
            let shiftTotal = parseInt(staffs[i].shiftTotal);
            if (staffs[i].shift === '12 Hours Night') {
                nightShiftHours += shiftTotal;
            } else if (staffs[i].shift === '8 Hours Night') {
                nightShiftHours += shiftTotal;
            }
        }

        return nightShiftHours;
    }

    render() {

        const dayShiftHours = this.getDayShift(this.props.staffs);
        const eveningShiftHours = this.getEveningShift(this.props.staffs);
        const nightShiftHours = this.getNightShift(this.props.staffs);
        return (
        
            <div>
                <div className="card mt-4">
                    <div className="card-header">Total Day Shift Hours</div>
                    <div id="dayTotal" className="card-body">
                        <h1>{dayShiftHours}</h1>
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-header">Total Evening Shift Hours</div>
                    <div id="eveningTotal" className="card-body">
                        <h1>{eveningShiftHours}</h1>
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-header">Total Night Shift Hours</div>
                    <div id="nightTotal" className="card-body">
                        <h1>{nightShiftHours}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShiftTotals;