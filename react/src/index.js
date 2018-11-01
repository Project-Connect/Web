/*
This file is used to render the entire application onto the webpage
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import store from './store'
import ButtonAppBar from "./components/navbar/navbar";

ReactDOM.render(<div><ButtonAppBar/><Root store={store}/></div>, document.getElementById('root'));
