import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignIn from "./pages/signIn"
import SignUp from "./pages/signUp"
import Home from "./pages/homePage"
import Raffle from "./pages/rafflePage"
import UserPage from "./pages/userPage"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />  
          <Route path="/sign-up" element={<SignUp />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/raffle/:id" element={<Raffle />} />
          <Route path="/user/:id" element={<UserPage />} />                    
        </Routes>
      </BrowserRouter>
  );
}

export default App;
