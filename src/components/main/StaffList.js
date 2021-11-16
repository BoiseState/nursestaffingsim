import React from 'react';
import './StaffList.css';
import { Dash, Plus, Trash } from 'react-bootstrap-icons';

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

    listRemove = (index) =>{

        this.props.staffs.splice(index,1)
        this.props.onStaffChangeOnUpdate(this.props.staffs)

    }

    render() {

        const staffList = this.props.staffs.map((staff, i) =>
            <tr key={staff.id} id={staff.id} >
                <td >
                    <Trash className="bTrash" data-testid="delete-id" onClick={this.listRemove.bind(staff,i)} />
                </td>
                <td >{staff.type}</td>
                <td>
                   <Plus className="bPlus" data-testid="add-id" onClick={this.listAdd.bind(staff,i)}/> 
                   {staff.quantity} 
                   <Dash className="bDash" data-testid="minus-id" onClick={this.listSub.bind(staff,i)}/>
                </td>
                <td>{staff.shift}</td>
                <td>{staff.shiftTotal}</td>
            </tr>

        );

        return (
            <table className="table table-striped table-hover data-filter-data" id="staffCont">
                <thead className="table-BSU">
                    {staffList.length > 0 ? <tr data-testid="staffList-id">
                        <th></th>
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
