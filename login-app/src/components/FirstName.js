import React from 'react';
import {TextField} from "@material-ui/core"
import { ValidatorForm} from 'react-material-ui-form-validator';

class FirstName extends React.Component {

    state = {
        name: '',
    }

    handleChange = (event) => {
        const name = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
        this.setState({ name });
    }

    handleSubmit = () => {
        
    }

    render() {
        const { name } = this.state;
        
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextField
                    label="First name"
                    onChange={this.handleChange}
                    name="name"
                    value={name}
                    variant="outlined" 
                    
                />
            </ValidatorForm>

        );
    }
}

export default FirstName;
