import React from "react"
import {Button,Box,TextField} from "@material-ui/core"
import "./App.css"
import Usaflag from "./icons/Usaflag.svg"
import Upet_icon from "./icons/Upet_icon.svg"
import Email_validator from './components/Email_validator';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="main_container" >
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
         <img src={Upet_icon} alt="uPet icon" className="upet_icon" />
        <div className="container_name">
          <div className="first_name_container">
            <TextField id="outlined-basic" label="First name" variant="outlined"/>
          </div>
          <div className="last_name_container">
            <TextField id="outlined-basic-last-name" label="Last name" variant="outlined"  />
          </div>
        </div>
          <div className="phone_container" >
          <img src={Usaflag} alt="Usa flag" className="icon_usa_flag" />
            <TextField id="outlined-basic-phone" label="Phone number" variant="outlined" className="phone"  />
          </div>
          <Email_validator />
          <div className="password_container">
            <TextField id="outlined-basic-email" label="Password" variant="outlined" className="password"  />
          </div>
          <div className="button_container">
          <Button variant="contained" className="button" href="#contained-button" color="red">Next</Button>
          </div>
      </Box>
   </div>
  );
}

export default App;
