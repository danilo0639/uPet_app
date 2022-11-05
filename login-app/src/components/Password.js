import React from 'react';
import {TextField} from "@material-ui/core"
import { ValidatorForm} from 'react-material-ui-form-validator';

class Password extends React.Component {

    state = {
        Password: '',
    }

    handleChange = (event) => {
        const Password = event.target.value;
        this.setState({ Password });
    }

    handleSubmit = () => {
        
    }

    render() {
        const { Password } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextField
                    label="Password"
                    onChange={this.handleChange}
                    name="Password"
                    value={Password}
                    variant="outlined" 
                    className="password" 
                    type="password"
                    
                />
            </ValidatorForm>

        );
    }
}

export default Password;
