/*
Example component to demo the use of redux with react components
*/
import React, { Component } from "react";

// This is the core of connecting react to redux
import { connect } from "react-redux"

// these are the functions we will call to dispatch out functions
import * as example from "../../../actions/exampleActions"


class Example extends Component {
  constructor(props) {
    super(props);
    // we call the dispatch function passed into our props variable from redux
    this.props.dispatch(example.callExample());
  }

  render() {
    return (
      <h1> EXAMPLE!!!! </h1>
    );
  }
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
export default connect(mapStateToProps)(Example)
