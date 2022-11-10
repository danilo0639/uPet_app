import React from 'react';
import {TextField } from "@material-ui/core"
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class EmailValidator extends React.Component {

    state = {
        email: '',
       
    }

    handleChange = (event) => {
        const email = event.target.value.charAt(0).toLowerCase() + event.target.value.slice(1);
        this.setState({ email });
    }

    handleSubmit = () => {
        
        
    }
    

    render() {
        const { email} = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                
            >
                
                <TextField
                    type="email"
                    label="Email"
                    value={email}
                    variant="outlined" 
                    className='email'
                    onChange={this.handleChange}
                    name="email"
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                 
                 
            </ValidatorForm>

        );
    }
}

export default EmailValidator;
