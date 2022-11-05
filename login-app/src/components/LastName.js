import React from 'react';
import {TextField} from "@material-ui/core"
import { ValidatorForm} from 'react-material-ui-form-validator';

class LastName extends React.Component {

    state = {
        lastname: '',
    }

    handleChange = (event) => {
        const lastname = event.target.value[0].toUpperCase() + event.target.value.substring(1);
        this.setState({ lastname });
    }

    handleSubmit = () => {

    }

    render() {
        const { lastname } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextField
                    label="Last name"
                    onChange={this.handleChange}
                    name="LastName"
                    value={lastname}
                    variant="outlined" 
                    
                />
            </ValidatorForm>

        );
    }
}

export default LastName;
