import {useState, useEffect} from "react"

import API from "../repository/API"

import Header from "../components/header"

import userPageStyles from "../styles/userPageStyles"

const {Section, Div, Main} = userPageStyles

function UserPage(){

    const data = JSON.parse(localStorage.getItem("data"))
    const config = { headers: { Authorization: `Bearer ${data.token}` } }

    const [raffles, setRaffles] = useState([])   
  
    useEffect(()=>{
        const promise = API.getTransactionsByUserId(data.userId, config)
        promise.then(response => {            
            setRaffles(response.data)
        })
        promise.catch(e => {
            console.log(e)
        })
        
    },[])

    return (
        <Main>
            <Header/>
            <Section>
               {raffles.map((raffle) =>{
                   const {numbers} = raffle
                   const {name} = raffle.raffles
                   return (
                       <Div key={numbers}>
                           <h1>{name}</h1>                           
                           <p>{`${numbers}`}</p>
                       </Div>
                   )
               })}

            </Section>
        </Main> 
    )
}

export default UserPage