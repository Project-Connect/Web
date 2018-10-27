/*
Example component to demo the use of async function calls and redux=thunk usage
*/
import React, { Component } from "react";

// This is the core of connecting react to redux
import { connect } from "react-redux"

//
import * as example from "../../../actions/exampleActions"


class NewProjectComponent extends Component {
    constructor(props) {
        super(props);
        // here we call the function in exampleActions.js under actions
        this.props.dispatch(example.callNewProjectComponent(2));
        this.async_dispatch = this.async_dispatch.bind(this);
    }

    async_dispatch(){
        // submit info
    }
    render() {
        if (this.props.attribute5 || this.props.attribute5 === null) {
            return (
                <div>
                    <h1>Project Name</h1>
                    <input type="text" name="name"/>
                    <h1>Project Description</h1>
                    <input type="text" name="description"/>
                    <h1>Technology Used</h1>
                    <input type="enum" name="tech"/>
                    <h1>Project Link</h1>
                    <input type="text" name="url"/>
                    <h1>GitHub Account</h1>
                    <input type="text" name="githubUser"/>
                    <h1>Tags</h1>
                    <input type="enum" name="tags" value={"Check boxes for different tags for this? or??"}/>

                    <button onClick={this.async_dispatch}>Submit</button>
                </div>
            );
        }
        return null;
        }
}

// here we map the states in the store onto the component, the left hand side
// will be states that we can use through this.props (for example this.prop.attribte1)
// the state parameter is the global store (the reducers we combined in index.js under reducers folder).
// we then further specify the state that are needed to render a page/component by indexing into the state(store).
const mapStateToProps = (state) => ({
    attribute1: state.newProjVar.attribute1,
    attribute2: state.newProjVar.attribute2,
    attribute3: state.newProjVar.attribute3,
    //we can combine states from multiple reducers
    attribute4: state.example2.attribute1,
    attribute5: state.newProjVar.attribute1
})
// this is the convention for connection the states from the store into the component
export default connect(mapStateToProps)(NewProjectComponent)
