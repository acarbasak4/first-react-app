import React, {Component} from 'react';

function App() {
  return (
    <div>
    <Greeting></Greeting>
    <GreetingClass></GreetingClass>
    </div>
  );
}
//Functional Component
const Greeting = props => {
  return(
    <p> Hi there! (Functional) </p>
  );
}

//Class Component

class GreetingClass extends Component{
  render(){
    return(
      <p>Hi there! (Class)</p>
    );
  }
}







export default App;
