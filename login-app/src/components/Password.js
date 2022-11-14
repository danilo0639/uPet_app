import React from 'react';
import {TextField} from "@material-ui/core"


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
            
           
                <TextField
                    label="Password"
                    name="password"
                    value={password}
                    variant="outlined" 
                    className="password" 
                    type="password"
                    onChange={this.handleChange}
                    
                />
              
                
            

        );
    }
}

export default Password;
