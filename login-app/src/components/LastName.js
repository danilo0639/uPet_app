import React from 'react';
import {TextField} from "@material-ui/core"


class LastName extends React.Component {

    state = {
        lastname: '',
    }

    handleChange = (event) => {
        const lastname = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
        this.setState({ lastname });
    }

    handleSubmit = () => {

    }

    render() {
        const { lastname } = this.state;
        return (
            
                <TextField
                    label="Last name"
                    onChange={this.handleChange}
                    name="LastName"
                    value={lastname}
                    variant="outlined" 
                    
                />
         

        );
    }
}

export default LastName;
