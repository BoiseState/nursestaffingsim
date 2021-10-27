import React from 'react';
import { Button } from "react-bootstrap";
import './RandomHPPDInfo.css';

class RandomHPPDInfo extends React.Component {
   
    random = (Min,Max) =>{
		var Range = Max - Min;   
		var Rand = Math.random();   
		return (Min + Math.round(Rand * Range));
	}
	

    setRandomValues = () =>
      {

        let randomHPPD = this.random(8,24);
        let randomCensus = this.random(1,100);
        let randomBedUnit = this.random(10,1000);

        let info ={
            unit:"Random Hospital",
            HPPD: randomHPPD,
            bedUnit:randomCensus,
            census: randomBedUnit,
        }


        this.props.onInfoChange(info); 
  
      }  

    render() {


        return (
            <div >
                <Button variant="primary"  onClick={this.setRandomValues}>
							Generate Random
				</Button>
                
          </div>
        );
    }
}

export default RandomHPPDInfo;
