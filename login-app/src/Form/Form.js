import React from "react"
import {Button,Box} from "@material-ui/core"
import "../App.css"
import Usaflag from "../icons/Usaflag.svg"
import Upet_icon from "../icons/Upet_icon.svg"
import EmailValidator from '../components/EmailValidator';
import LastName from '../components/LastName';
import FirstName from "../components/FirstName"
import PhoneNumber from "../components/PhoneNumber"
import Password from "../components/Password"

function Form() {
   
  return (
      <div className="main_container" >
            <Box
              component="form"   
            >
               <img src={Upet_icon} alt="uPet icon" className="upet_icon" />
               <div className="container_name">
                    <div className="first_name_container">
                     <FirstName />
                   </div>
                   <div className="last_name_container">
                      <LastName />
                   </div>
               </div>
               <div className="phone_container" >
                  <img src={Usaflag} alt="Usa flag" className="icon_usa_flag" />
                  <PhoneNumber />
                </div>
                <EmailValidator />
                <div className="password_container">
                  <Password  />
                </div>
                <div className="button_container">
                  <Button type="input" variant="contained" className="button" href="#contained-button">Next</Button>
                </div>
           </Box>
           
       </div>
   );
}

export default Form;
