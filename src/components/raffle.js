import API from "../repository/API"
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";


import rafflesStyle from "../styles/rafflesStyle";

import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Swal from "sweetalert2";

const {Raffles, Main} = rafflesStyle

function Raffle(){
    const navigate = useNavigate()
    
    const data = JSON.parse(localStorage.getItem("data"))    
    const config = { headers: { Authorization: `Bearer ${data.token}` } };
    
    const [raffle, setRaffle] = useState([])       
   
    useEffect( ()=>{        
        const promise =  API.getAllRaffles(config)
        promise.then(response => {
            setRaffle(response.data)                       
        })
        promise.catch(e =>{
            
        })           
    },[])                   

    return(
        <Main>
            {raffle.map((item) =>{
                const {name, id, image } = item
                return (
                    <Raffles key={id}>
                        <img src={image} alt="image"/>
                        <h1>{name}</h1>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={() => navigate(`/raffle/${id}`)}>
                            See
                        </Button>
                    </Raffles>                            
                )
            })}   
        </Main>
    )
}

export default Raffle