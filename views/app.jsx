import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
   constructor(props){
     super(props);
   }
 render(){
     return (<h2>Hello World</h2>);
   }
 }
ReactDOM.render(<Demo/>, document.getElementById('content'));
