import React, { Component } from 'react';
import Panel from './Panel';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateCurNum = this.updateCurNum.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
    this.state = {
      curNum: '',
      curSum: 0,
      prevOperation: 'equal',
      display: ''
    };
  }

  updateCurNum(num) {
    let updatedNum = this.state.curNum + num.toString();
    this.setState({
      display: updatedNum,
      curNum: updatedNum
    });
  }

  updateOperation(operation) {
    let updatedCurSum = this.state.curSum;
    if (this.state.prevOperation === 'equal') {
      console.log(this.state.curNum);
      updatedCurSum = +this.state.curNum;
      console.log(updatedCurSum);
    } else if (this.state.prevOperation === 'plus') {
      updatedCurSum += +this.state.curNum;
    } else if (this.state.prevOperation === 'minus') {
      updatedCurSum -= +this.state.curNum;
    }
    console.log(updatedCurSum);
    this.setState({
      curSum: updatedCurSum,
      display: updatedCurSum.toString(),
      prevOperation: operation,
      curNum: ''
    });
  }

  render() {
    return (
      <div>
        <Display valueToDisplay={this.state.display} />
        <Panel
          operationClickHandler={this.updateOperation}
          curNumClickHandler={this.updateCurNum}
        />
      </div>
    );
  }
}

export default App;
