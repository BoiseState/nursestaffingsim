import React from 'react';
import './StaffList.css';

class StaffList extends React.Component {



    render() {

        const staffList = this.props.staffs.map((staff, i) =>
            <tr key={staff.id} id={staff.id} >
                <td>{staff.type}</td>
                <td>{staff.quantity}</td>
                <td>{staff.shift}</td>
                <td>{staff.shiftTotal}</td>
            </tr>

        );

        return (
           
                    <table className="table table-striped table-hover" id="staffCont">
                        <thead className="table-BSU">
                            {staffList.length > 0 ? <tr>
                                <th scope="col">Staff Type</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Shift Type</th>
                                <th scope="col">Shift Total</th>
                            </tr> : false}
                        </thead>
                        <tbody>

                            {staffList}
                        </tbody>

                    </table>
        
        );
    }
}

export default StaffList;
