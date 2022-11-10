import React from 'react';
import {TextField} from "@material-ui/core"
import { ValidatorForm} from 'react-material-ui-form-validator';

class Password extends React.Component {

    state = {
        password: '',
    }

    handleChange = (event) => {
        const password = event.target.value;
        this.setState({ password });
        
    }

    handleSubmit = (event) => {
        
       
    }

    render() {
        const { password } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
           
                <TextField
                    label="Password"
                    name="password"
                    value={password}
                    variant="outlined" 
                    className="password" 
                    type="password"
                    onChange={this.handleChange}
                    
                />
              
                
            </ValidatorForm>

        );
    }
}

export default Password;
