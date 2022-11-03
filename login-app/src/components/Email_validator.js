import React from 'react'
import {TextField} from "@material-ui/core"
const emailState = {
    email: '',
    error: ''
}
class Email_validator extends React.Component {  
    
    constructor(){
        super();
        this.state = emailState;
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            email : e.target.value
        });
    }
    emailValidation(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                error: "Email is not valid"
            });
            return false;
        }
        return true;
    }
    onSubmit(){
        if(this.emailValidation()){
            console.log(this.state);
            this.setState(emailState);
        }
    }
    render(){
        return(
            <div className="email_container">
              <TextField label="Email" variant="outlined" type="email" name="email" value={this.state.email} onChange={this.onChange} className="email"  />
              <span className="text-danger">{this.state.error}</span>
            </div>
        )  
    }
}  
   
export default Email_validator;