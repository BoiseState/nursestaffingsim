import React from 'react';
import { Select, InputNumber } from 'antd';
import { Modal, Button, Container, Form } from "react-bootstrap";
import './StaffAdd.css';

class StaffAdd extends React.Component
{
	
	state=
	{
		   
		   staffs: [],
		   results:"",
		   open:false,
		   show:false,
		   inputW:{width: 150,},
		   staffNum:"The Results:"
		//    style : {
		//      position: 'absolute',
		//      top: '50%',
		//      left: '50%',
		//      transform: 'translate(-50%, -50%)',
		//      width: 1000,
		//      bgcolor: 'background.paper',
		//      border: '2px solid #000',
		//      boxShadow: 24,
		//      p: 4,
		//    }
	}
	
	 
	 
	  handleAdd = (value) =>
	  {
		  
		  var s = [];
		  var hexDigits = "0123456789abcdef";
		  for (var i = 0; i < 36; i++) {
		      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		  }
		  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
		  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
		  s[8] = s[13] = s[18] = s[23] = "-";
		  	  
		  var uuid = s.join("");
		  
		  let staff = {id:uuid,num:value.quantity,type:value.type,shift:value.shift};
		  let staffs=[...this.state.staffs,staff]
		  this.setState({staffs:staffs});
		  this.handleClose();
		  this.setResult(staffs);
	  }
	 addNum = (id) =>
	 {
	 	 let staffs=this.state.staffs;
	 	 for(var i=0;i<staffs.length;i++)
	 	 {
	 		 if(staffs[i].id===id)
	 		 {
	 			 staffs[i].num++;
	 		 }
	 	 	
	 	 }
	 	 this.setState({staffs:staffs});
		 this.setResult(staffs);
	 }
	
	 reduceNum = (e,id) =>
	 {
	 	 let staffs=this.state.staffs;
		
		 let isDelete=false;
	 	 for(var i=0;i<staffs.length;i++)
	 	 {
	 		 if(staffs[i].id===id)
	 		 {
	 			 if(e>=1)
	 			 {
	 				  staffs[i].num=e;
					  
	 			 }else
				 {
					 	isDelete=true;  
				 }
	 			break;
	 		 }
	 	 	
	 	 }
		 if(isDelete)
		 {
			  staffs = staffs.filter(item => item.id!==id )
		 }
		 
	 	 this.setState({staffs:staffs});
		this.setResult(staffs);
	 }
	
	setResult = (staffs) =>
	{
			 
		 let num = 0;
		 for(var i=0;i<staffs.length;i++)
		 {
			
			num = num+staffs[i].num;
			
		 }
		 const result = this.props.result;
		 if(result===''){
			 return;
		 }
		 this.props.setInfoStaffNum(num)
		
		 // if(parseInt(num)<=parseInt(result))
		 // {
			//  let show = `In line with budget`;
			//  this.setState({"results":show});
			//  this.setState({"staffNum":"The Results:"+num});
		 // }else
		 // {
			//  let show =`The rated budget has been exceeded`;
			//   this.setState({"results":show});
			//  this.setState({"staffNum":"The Results:"+num});
		 // }
		
	}
	

	
	// handleOpen = () =>
	// {
			 
	// 	this.setState({"open":true});	
	// }
	// handleClose = () =>
	// {
			 
	// 	this.setState({"open":false});	
	// }
	// const [open, setOpen] = React.useState(false);
	
	  render () {
		const staffList = this.state.staffs.map((staff) =>
		
		       <div>
		           <InputNumber  defaultValue={staff.num} id={staff.id} onChange={e => this.reduceNum(e,staff.id) } />			    
				      <Select defaultValue={staff.type} style={this.state.inputW}>
						<Select.Option value="RN">RN</Select.Option>
						<Select.Option value="LVN">LVN</Select.Option>
						<Select.Option value="Unlicensed">Unlicensed</Select.Option>
					  </Select>
					  <Select defaultValue={staff.shift} style={this.state.inputW}>
						    <Select.Option value="12 Hours Day">12 Hours Day</Select.Option>
							<Select.Option value="12 Hours Night">12 Hours Night</Select.Option>
							<Select.Option value="8 Hours Day">8 Hours Day</Select.Option>
							<Select.Option value="8 Hours Evening">8 Hours Evening</Select.Option>
							<Select.Option value="8 Hours Night">8 Hours Night</Select.Option>
						</Select>
		       </div>
			
		  );

		const handleClose = () => this.setState({"show":false});
		const handleShow = () => this.setState({"show":true});
		 
	    return (
		     <Container id="resultsCont">
				<div>
					<Button variant="primary" onClick={handleShow}>Add new Staff</Button>
				</div>
				<div>
					{staffList}	
				</div>
				<div id="results">
					<p>{this.props.staffNum}</p  >
					<p>{this.props.results}</p >
			  	</div>
			  {/* <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}
				<Modal show={this.state.show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Select your staff member</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group className="mb-3" controlId="staffType" required>
								<Form.Label>Staff Type</Form.Label>
								<Form.Control type="select"></Form.Control>
							</Form.Group>
						</Form>
					{/* <Form
				           labelCol={{ span: 6 }}
				           wrapperCol={{ span: 12 }}
				           layout="horizontal"
						   labelAlign="left"
						   onFinish={this.handleAdd}
				         >
						 <Form.Item label="Type" name="type"
						  rules={[{required: true}]}
						 >
						     <Select>
						        <Select.Option value="RN">RN</Select.Option>
								<Select.Option value="LVN">LVN</Select.Option>
								<Select.Option value="Unlicensed">Unlicensed</Select.Option>
						     </Select>
						 </Form.Item>
						 <Form.Item label="Quantity" name="quantity" defaultValue='1' rules={[{required: true}]}>
						        <InputNumber   min="1"/>
						 </Form.Item>
						 <Form.Item label="Shift"  name="shift"
						 rules={[{required: true}]}
						 >
						    <Select >
						        <Select.Option value="12 Hours Day">12 Hours Day</Select.Option>
						 		<Select.Option value="12 Hours Night">12 Hours Night</Select.Option>
						 		<Select.Option value="8 Hours Day">8 Hours Day</Select.Option>
								<Select.Option value="8 Hours Evening">8 Hours Evening</Select.Option>
								<Select.Option value="8 Hours Night">8 Hours Night</Select.Option>
						    </Select>
						 </Form.Item>
						 <Form.Item wrapperCol={{ offset: 0, span: 16 }} >
						        <Button variant="primary" htmlType="submit">
						          Submit
						        </Button>
						 </Form.Item>
						 
					</Form> */}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={handleClose}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
			  </Container>
		);
	  }
			
		
	
}
export default StaffAdd
