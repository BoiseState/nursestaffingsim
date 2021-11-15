import React from 'react';

class StaffBudget extends React.Component {

    // grab staff info and add up budget
    getShiftBudget = (staffs) => {
        let shiftBudget = 0;

        for (var i = 0; i < staffs.length; i++) {
            let shiftTotal = parseInt(staffs[i].shiftTotal);
            if (staffs[i].type === 'RN') {
                shiftBudget += shiftTotal * 35;
            } else if (staffs[i].type === 'LVN') {
                shiftBudget += shiftTotal * 24;
            } else {
                shiftBudget += shiftTotal * 15;
            }
        }

        return shiftBudget;
    }

    render() {

        const shiftBudget = this.getShiftBudget(this.props.staffs);
        return (
    //         const content = this.state.checked 
    //   ? <div> Content </div>
    //   : null;
            this.props.showBudget ?
            <div className="card mt-4">
                <div className="card-header">Total Budget for Staff</div>
                <div id="budget" className="card-body">
                    <h1 data-testid="shiftBudgetValue-id">${shiftBudget}</h1>
                </div>
            </div>
            :
            null
        )
    }
}

export default StaffBudget;