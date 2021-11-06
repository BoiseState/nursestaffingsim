import React from 'react';
import './StaffList.css';

class StaffList extends React.Component {
   
    listAdd = (index) =>{
        let quantity = parseInt(this.props.staffs[index].quantity)
        let shiftTotal = parseInt(this.props.staffs[index].shiftTotal)
        let shift = parseInt(this.props.staffs[index].shift)
        quantity = quantity + 1

        if (shift === 12) {
            shiftTotal = parseInt(shiftTotal) + 12;
        }else{
            shiftTotal = parseInt(shiftTotal) + 8;
        }
       
       if(quantity <= 100){
           this.props.staffs[index].quantity = quantity
           this.props.staffs[index].shiftTotal = shiftTotal
           this.props.onStaffChangeOnUpdate(this.props.staffs)
       }
       
    }

    listSub = (index) =>{
        let quantity = parseInt(this.props.staffs[index].quantity)
        let shiftTotal = parseInt(this.props.staffs[index].shiftTotal)
        let shift = parseInt(this.props.staffs[index].shift)
        quantity = quantity - 1;

        if (shift === 12) {
            shiftTotal = parseInt(shiftTotal) - 12;
        }
        else {
            shiftTotal = parseInt(shiftTotal) - 8;
        }

       if(quantity <= 0){
           this.props.staffs.splice(index,1)
       }else{
           this.props.staffs[index].quantity = quantity
           this.props.staffs[index].shiftTotal = shiftTotal
       }
        this.props.onStaffChangeOnUpdate(this.props.staffs)
    }
   
    listDelete = (index) =>{
        this.props.staffs.splice(index, 1)
        this.props.onStaffChangeOnUpdate(this.props.staffs)
    }
   
    listEdit = () =>
    {
        
    }

    render() {

        const staffList = this.props.staffs.map((staff, i) =>
            <tr key={staff.id} id={staff.id} >
                <td>{staff.type}</td>
                <td>
                    {staff.quantity} 
                    <button type="btext1" className="btn btn-outline-primary" onClick={this.listAdd.bind(staff, i)}>&#10010;</button>
                    <button type="btext2" className="btn btn-outline-primary" onClick={this.listSub.bind(staff, i)}>&#9866;</button>
                </td>
                <td>{staff.shift}</td>
                <td>{staff.shiftTotal}</td>
                <td>
                    <button type="btext3" className="btn btn-outline-primary" onClick={this.listDelete.bind(staff, i)}>&#128465;</button>
                    <button type="btext4" className="btn btn-outline-primary" onClick={this.listEdit}>&#9999;</button>
                </td>
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
                                <th scope="col">Function</th>
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
