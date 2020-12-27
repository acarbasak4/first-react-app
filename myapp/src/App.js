import React, {Component} from 'react';

function App() {
  return (
    <div>
    <Greeting name="Başak" age="24"></Greeting>
    <GreetingClass name="Class" age="4"></GreetingClass>
    </div>
  );
}
//Functional Component
const Greeting = props => {
  return(
    <p> Hi there! (Functional) 
    Your name is {props.name} and your age is {props.age}
    </p>
  );
}

//Class Component

class GreetingClass extends Component{
constructor(props){
  super(props);

  this.state ={
      name:"Ali",
      age:"36"
    }
  
}
ageDown = () =>{
  this.setState((previousState =>({
    age: previousState.age - 1
  })));

}
ageUp = () =>{
  this.setState((previousState =>({
    age: previousState.age + 1
  })));

}

  render(){
    return(
      <div>
      <p>Hi there! (Class)
      Name is {this.props.name} and age is {this.props.age}
      </p>
      <p> {this.state.name}</p>
      <p>{this.state.age} </p>
      <button onClick={this.ageUp}>Up</button>
      <button onClick={this.ageDown}>Down</button>
      </div>
    );
  }
}







export default App;
