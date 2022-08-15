import { useState } from "react";
import Swal from "sweetalert2";

import API from "../repository/API";

import signInStyles from "../styles/signInStyles";
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Logo from "../components/logo";
import { useNavigate, Link } from "react-router-dom";

const {Main, Div, Body} = signInStyles

function SignUp() {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false); // loading axios request

  function submitForm(e) {
    e.preventDefault();
    
    setLoading(true);

    const body = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      passwordConfirmation: e.target[3].value
    };
    
    const promise = API.createUser(body);
    promise.then(response => { 
      Swal.fire({
        title: 'Registration done successfully',       
        icon: 'success'        
      })        
      navigate("/")
    });
    promise.catch(e => {
      Swal.fire({
        title: 'Error!',
        text: `${e.response.data}`,
        icon: 'error',
        confirmButtonText: 'Cool'
      })      
      setLoading(false);
    });
  }


    return (
     <Body> 
      <Main>
        <Logo/>
          <div class="custom-shape-divider-bottom-1660067224">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
              </svg>
          </div>
          <form onSubmit={e => submitForm(e)}>
            <Div>
              <TextField id="standard-basic" label="Name" variant="standard" type="name" placeholder="Name"/>
              <TextField id="standard-basic" label="E-mail" variant="standard" type="email" placeholder="E-mail"/>
              <TextField id="standard-basic" label="Password" variant="standard" type="password" placeholder="Password"/>
              <TextField id="standard-basic" label="Confirm Password" variant="standard" type="password" placeholder="Confirmpassword"/>                 
              <LoadingButton  className="loadingButton" loadingIndicator="Loading…" variant="outlined" type="submit" disabled={loading ? true : false}>
                Enter
              </LoadingButton >
            </Div>
          </form>
          <Link to="/"><p>Already have an account? Log in !</p></Link>
        </Main>
      </Body>
    );
  }
  

export default SignUp;
  