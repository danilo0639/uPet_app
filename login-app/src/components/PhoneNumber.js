import React from 'react';
import {TextField} from "@material-ui/core"
import { ValidatorForm} from 'react-material-ui-form-validator';

class PhoneNumber extends React.Component {

    state = {
        phone: '',
    }

    handleChange = (event) => {
        const phone = event.target.value;
        this.setState({ phone });
    }

    handleSubmit = () => {
        
    }

    render() {
        const { phone } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextField
                    min = "1"
                    max= "10"
                    type="tel"
                    label="Phone number"
                    onChange={this.handleChange}
                    name="phone"
                    value={phone}
                    variant="outlined" 
                   
                    
                />
            </ValidatorForm>

        );
    }
}

export default PhoneNumber;



