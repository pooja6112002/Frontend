// Filename App.js
import React, {Component} from "react";

class Softech extends Component {
    constructor() {
        console.log("constructor called");
    super();
    this.state = { count: 0 }; // initializing state
  }
  componentDidMount() {
    console.log("Component mounted");
  }
  componentDidUpdate(preprop,prestate) {
    console.log("Component updated"+prestate.count);
  }
  componentWillUnmount()
    {
        console.log("Component will unmount");   
    }
    render() {
        console.log("render called");
        return (
            <>
        <h1>GeeksForGeeks {this.props.name} {this.state.count} </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click Me</button>
        </>    
        )
    }
}

export default Softech;