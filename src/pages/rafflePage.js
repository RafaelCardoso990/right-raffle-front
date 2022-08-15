import * as React from 'react';
import API from "../repository/API"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import Swal from "sweetalert2"
import Header from "../components/header"

import rafflePageStyles from "../styles/rafflePageStyle"

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const {Main, Raffles ,NumberRaffles} = rafflePageStyles


function Raffle(){    
    const navigate = useNavigate()
    
    const raffleId = useParams();
  
    const data = JSON.parse(localStorage.getItem("data"))    
    const config = { headers: { Authorization: `Bearer ${data.token}` } }    

    const [raffle, setRaffle] = useState([])
    const [numbers, setNumbers] = useState()       
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const promise = API.getRafflesById(raffleId.id, config)
        promise.then(response => {
            setRaffle(response.data)            
        })
        promise.catch(e =>{
            Swal.fire({
                title: 'Error!',
                text: `${e.response.data}`,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        })
    },[])        

    const numberRaffles = []
    const numbersRafflesId = []  

    
    for(let i in numbers){
        numbersRafflesId.push(numbers[i].id)
        numberRaffles.push(numbers[i].numbers)
    }
    
    const body = {
        numbers: numberRaffles,
        numberId: numbersRafflesId
    }
       
    function submitForm(e) {
        e.preventDefault();             
        
        const amount= e.target[0].value            
    
        const promise = API.getNumberByIdAndAmount(parseInt(amount), raffleId.id, config);

        promise.then(response => {      
            setNumbers(response.data)         
        });
        promise.catch(e => {
          Swal.fire({
            title: 'Error!',
            text: `${e.response.data}`,
            icon: 'error',
            confirmButtonText: 'Cool'
          })       
        });        
      }

    function Buy(){
        
        if(body.numbers.length <= 0){
            Swal.fire({
                title: 'Error!',
                text: `choose the number of raffles`,
                icon: 'error',
                confirmButtonText: 'Cool'
            })         
            navigate("/home")
        }

        const promise = API.buyNumbersRaffles(body, config, raffle.id)
        promise.then(response => {
            Swal.fire({
                title: 'Done!',
                text: `Purchase done! You can check your numbers on the My Sweepstakes page`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            navigate("/home")
        })
        promise.catch(e =>{
            Swal.fire({
                title: 'Error!',
                text: `${e.response.data}`,
                icon: 'error',
                confirmButtonText: 'Cool'
            }) 
        })
    }
   
    return(
        <Main>
            <Header/>
            <Raffles>
                <h1>{raffle.name}</h1>
                <form onSubmit={e => submitForm(e)}>
                    <div>
                        <TextField id="standard-basic1" label="How many numbers do you want to buy ?" variant="standard" type="number" placeholder="amount"/>                                
                        <Button className="button" variant="outlined" type="submit" onClick={() => setVisible(false)}>Get numbers</Button>
                    </div>
                </form>
            </Raffles> 
            <NumberRaffles hidden={visible}>                  
                <div>                    
                    {numberRaffles.map(item => {               
                        return (
                            <p key={item}>{item}</p>   
                            )
                        })}
                </div>
                <Button hidden={visible} type="buy" onClick={() => Buy()}>Buy</Button>
            </NumberRaffles>        
        </Main>
    )
}

export default Raffle