import React from 'react';
import {TextField} from "@material-ui/core"
import { ValidatorForm} from 'react-material-ui-form-validator';

class EmailValidator extends React.Component {

    state = {
        email: '',
    }

    handleChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }

    handleSubmit = () => {
        
    }

    render() {
        const { email } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextField
                    type="email"
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['email is not valid']}
                    variant="outlined" 
                    className='email'
                />
            </ValidatorForm>

        );
    }
}

export default EmailValidator;
