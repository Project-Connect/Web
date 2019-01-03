/*
Example component to demo the use of async function calls and redux=thunk usage
*/
import React, { Component } from "react";

// This is the core of connecting react to redux
import { connect } from "react-redux"

//
import {callExampleTwo, callAsyncExample, test} from "../../../actions/exampleActions"

class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    // here we call the function in exampleActions.js under actions
    this.props.callExampleTwo(2);
    this.async_dispatch = this.async_dispatch.bind(this);
  }

  async_dispatch(){
    let flip = this.props.attribute4 ? false : true
    this.props.callAsyncExample(flip);
  }
  render() {
    if (this.props.attribute4) {
      return (
        <div>
            <h1>WHOA HIDDEN EXAMPLE!?!?</h1>
            <button onClick={this.async_dispatch}>CLICK ME</button>
        </div>
      );
    }

    return (
      <div>
          <h1> EXAMPLE!!!! </h1>
          <button onClick={this.async_dispatch}>CLICK ME</button>
          <button onClick={() => this.props.test()}>TEST</button>
      </div>
    );
  }
}

// here we map the actions to funtions available in this.this.props.
// functions are imported from the src/actions folder
const mapDispatchToProps = {
  test,
  callExampleTwo,
  callAsyncExample
}

// here we map the states in the store onto the component, the left hand side
// will be states that we can use through this.props (for example this.prop.attribte1)
// the state parameter is the global store (the reducers we combined in index.js under reducers folder).
// we then further specify the state that are needed to render a page/component by indexing into the state(store).
const mapStateToProps = (state) => ({
  attribute1: state.example1.attribute1,
  attribute2: state.example1.attribute2,
  attribute3: state.example1.attribute3,
  //we can combine states from multiple reducers
  attribute4: state.example2.attribute1
})
// this is the convention for connection the states from the store into the component

export default connect(mapStateToProps,mapDispatchToProps)(ExampleTwo);
