import React from 'react';
import {TextField} from "@material-ui/core"

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
           
                <TextField
                    label="First name"
                    onChange={this.handleChange}
                    name="name"
                    value={name}
                    variant="outlined" 
                    
                />
            

        );
    }
}

export default FirstName;
