import React from 'react';
//import {  Row, Col } from "react-bootstrap";
import './Result.css';

class Result extends React.Component {
    // constructor(props) {
    //     super(props);
        
    //   }
	calculation2 = (info,num) =>
    {

            if (info.bedUnit !== '' && info.census !== '' && info.HPPD !== '')
            {

                let result = parseInt(info.bedUnit) + parseInt(info.census) + parseInt(info.HPPD);
                console.log(num + ":" + result)

                if (num <= 0)
                {
                    //this.setState({ "staffNum": "The Results:" + result });
                }

                else
                {
                    num = result + num;
                    //this.setState({ "staffNum": "The Results:" + num });
                }
                return num;

            }

	}
      calculation = () =>
      {
  

        let num = 0;
        for(var i=0;i<this.props.staffs.length;i++)
        {
           console.log(this.props.staffs[i]);
           num = num+this.props.staffs[i].num;
           
        }

       
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

            return num;
  
      }  

    render() {

        const calc2 = this.calculation2(this.props.info, 55);

        return (
            <div id="results">
                <h1>{this.calculation()}</h1>
                {calc2}
            <p>{this.props.staffNum}</p  >
            <p>{this.props.results}</p >
          </div>
        );
    }
}

export default Result;
