import React from 'react';
import {TextField} from "@material-ui/core"


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
           

        );
    }
}

export default PhoneNumber;



