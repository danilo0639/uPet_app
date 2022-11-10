import React from 'react';
import {Button} from "@material-ui/core"

class ButtonInput extends React.Component {

    state = {
    
    }

    handleChange = (event) => {
        
    }

    handleSubmit = () => {
      
        
    }

    render() {
        const { button } = this.state;
        return (
            <Button
              type="input"
              variant="contained"
              className="button"
              href="#contained-button">
              Next
            </Button>
        );
    }
}

export default ButtonInput;
