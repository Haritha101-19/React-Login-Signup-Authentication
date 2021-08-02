import React from 'react';
import './App.css';
import LoginBox from './Components/login';
import SignupBox from './Components/signup';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isLoginOpen :true,
      isSignupOpen :false
    }
  }
  showLoginBox(){
    this.setState({isLoginOpen:true, isSignupOpen:false});
  }
  showSignupBox(){
    this.setState({isLoginOpen:false, isSignupOpen:true});
  }
  render(){
    return(
      <div className="root-container">

        <div className="box-controller">
          <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginBox.bind(this)}>
            Login
          </div>
          <div className={"controller " + (this.state.isSignupOpen ? "selected-controller" : "")} onClick={this.showSignupBox.bind(this)}>
            SignUp
          </div>
        </div>

        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox/>}
        
          {this.state.isSignupOpen && <SignupBox/>}
        </div>
        
      </div> 
    )
  }
}

export default App;
