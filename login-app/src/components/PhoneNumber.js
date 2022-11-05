import React from 'react';
import {TextField} from "@material-ui/core"
import { ValidatorForm} from 'react-material-ui-form-validator';

class PhoneNumber extends React.Component {

    state = {
        PhoneNumber: '',
    }

    handleChange = (event) => {
        const PhoneNumber = event.target.value;
        this.setState({ PhoneNumber });
    }

    handleSubmit = () => {
        
    }

    render() {
        const { PhoneNumber } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextField
                    type="tel"
                    label="Phone number"
                    onChange={this.handleChange}
                    name="PhoneNumber"
                    value={PhoneNumber}
                    variant="outlined" 
                    
                />
            </ValidatorForm>

        );
    }
}

export default PhoneNumber;
