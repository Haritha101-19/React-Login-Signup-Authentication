import React from 'react';
import './login.css';

class LoginBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usernameValue : "" ,
            passwordValue : "",
            errors : {email :'',password : ''}
        };
    }
    onEmailchange(event){
        this.setState({usernameValue:event.target.value});
        if(event.target.value !== undefined ){
            var request_emailregex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!request_emailregex.test(event.target.value)){
                this.setState({errors:{email:"Please enter valid email address "}});
            }
            if(request_emailregex.test(event.target.value)){
                this.setState({errors:{email :""}});
            }
        }
    }
    onPasswordchange(event){
        this.setState({passwordValue:event.target.value});
        if(event.target.value.length < 8){
            this.setState({errors:{password :"Password must be at 8 characters"}});
        }if(event.target.value.length >= 9){
            this.setState({errors:{password :"Password must be at 8 characters"}});
        }if(event.target.value.length == 8){
            this.setState({errors:{password :""}});
        }
        if(this.state.passwordValue == "" ){
            this.setState({errors:{password :"Enter your password"}})
        }
    }
    submitLogin(e){
        if(this.state.usernameValue == "" ){
            this.setState({errors:{email :"Enter your email address"}})
        }
        else if(this.state.passwordValue == "" ){
            this.setState({errors:{password :"Enter your password"}})
        }
        else{
            this.setState({errors: ""})
        }
        e.preventDefault();
    }
    render(){
        return(
            <div className="inner-container">
                <div className="header">Login</div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="email" className="login-label">Email</label>
                        <input type="email" name="email" className="login-input" value={this.state.usernameValue}
                        onChange={this.onEmailchange.bind(this)} placeholder="example@gmail.com"/>
                    </div>

                    <small className="text-danger" style={{color:"red"}}>{this.state.errors.email}</small>

                    <div className="input-group">
                        <label htmlFor="password" className="login-label">Password</label>
                        <input type="password" name="password" className="login-input" value={this.state.passwordValue} 
                        onChange={this.onPasswordchange.bind(this)} placeholder="Password"/>
                    </div>

                    <small className="text-danger" style={{color:"red"}}>{this.state.errors.password}</small>

                    <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
                </div>
            </div>
        )
    }
}
export default LoginBox;