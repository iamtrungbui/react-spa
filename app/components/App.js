import React, { Component } from 'react';
import { DatePicker } from 'antd';


class App extends Component {
  render() {
    return (
    	<div>
	    	<h1>Hello world</h1>
	    	<DatePicker onChange={(date, dateString)=>{}} />
    	</div>
    );
  }
}

export default App;

