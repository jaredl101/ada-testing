import React, { Component } from 'react';
import { connect } from 'react-redux';


import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';


let data = [
  { argument: 1, value: 140 },
  { argument: 2, value: 150 },
  { argument: 3, value: 160 },
  { argument: 4, value: 165 },
  { argument: 5, value: 170 },
  { argument: 6, value: 180 },
  { argument: 7, value: 190 },
  { argument: 8, value: 200 },
  { argument: 9, value: 210 },
];


class Bodyweight extends Component {
  render() {
    // const { bodyweight } = this.props;
    // console.log(`Bodyweight is: ${bodyweight}`);
    // console.log(this.props.bodyweight[0].weight);
    console.log(`this.props.bodyweight.length ${this.props.bodyweight.length}`);
    if(this.props.bodyweight.length != 0){
      const { bodyweight } = this.props;
      let day1 = new Date(bodyweight[0].date);
      
      console.log(`HEY IS THIS WORKING? ${day1.getDate()}`);
      console.log(new Date(bodyweight[5].date).getDay());
      console.log(new Date(bodyweight[6].date).getDay());
      console.log(new Date(bodyweight[7].date).getDay());
      console.log(new Date(bodyweight[8].date).getDay());

      
      
      
      data = [
        { argument: new Date(bodyweight[0].date).getDate(), value: bodyweight[0].weight },
        { argument: new Date(bodyweight[1].date).getDate(), value: bodyweight[1].weight },
        { argument: new Date(bodyweight[2].date).getDate(), value: bodyweight[2].weight },
        { argument: new Date(bodyweight[3].date).getDate(), value: bodyweight[3].weight },
        { argument: new Date(bodyweight[4].date).getDate(), value: bodyweight[4].weight },
        { argument: new Date(bodyweight[5].date).getDate(), value: bodyweight[5].weight },
        { argument: new Date(bodyweight[6].date).getDate(), value: bodyweight[6].weight },
        { argument: new Date(bodyweight[7].date).getDate(), value: bodyweight[7].weight },
        { argument: new Date(bodyweight[8].date).getDate(), value: bodyweight[8].weight },
        { argument: new Date(bodyweight[9].date).getDate(), value: bodyweight[9].weight },
        
      ];
    }
    
    return (
    <Paper>
      <Chart
      
        data={data}
      >
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries valueField="value" argumentField="argument" />
      </Chart>
    </Paper>
);
  }
}

const mapStateToProps = (state) => {
  return {
    bodyweight: state.bodyweight
  }
}
export default connect(mapStateToProps)(Bodyweight);