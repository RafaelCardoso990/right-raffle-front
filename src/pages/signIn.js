import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2"

import API from "../repository/API";

import signInStyles from "../styles/signInStyles";

import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Logo from "../components/logo";

const {Main, Div, Body} = signInStyles

function SignIn() {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false); // loading axios request

  function submitForm(e) {
    e.preventDefault();
    
    setLoading(true);

    const body = {
      email: e.target[0].value,
      password: e.target[1].value
    };

 
    const promise = API.login(body);
    promise.then(response => {           
      localStorage.setItem("data", JSON.stringify(response.data))                  
      Swal.fire({
        title: 'Login successfully done!',       
        icon: 'success'        
      })        
      navigate("/home")
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
              <TextField id="standard-basic" label="E-mail" variant="standard" type="email" placeholder="e-mail"/>
              <TextField id="standard-basic" label="Password" variant="standard" type="password" placeholder="password"/>               
              <LoadingButton  className="loadingButton" loadingIndicator="Loading…" variant="outlined" type="submit" disabled={loading ? true : false}>
                Enter
              </LoadingButton >
            </Div>
          </form>
          <Link to="/sign-up"><p>Don't have an account? Create one!</p></Link>
        </Main>
      </Body>
    );
  }
  

export default SignIn;
  