import styled from "styled-components"


const Main = styled.main`     
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-family: 'Amatic SC', cursive;
        font-size: 80px;
    }
`

const Raffles = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0px -18px 22px 6px rgba(0,0,0,0.33);
    width: 60vw;
    height: 200px;
    margin-top: 20px;
    

    background-color: #FFFFFF;

    div{
        display: flex;
        flex-direction: column;
        width: 600px;

        .button{
            margin-top: 20px;
        }
        
        @media (max-width: 768px) {
        width: 300px;
        }
    }
`
const NumberRaffles = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0px 23px 25px -10px rgba(0,0,0,0.33);
    width: 60vw;
    height: 220px;      
    margin-bottom: 10px;
    background-color: #FFFFFF;

    div{      
        width: 200px;
        height: 150px;
        display: flex;       
        overflow-y: auto;
        
        align-items: center;
        flex-direction: column;
    }

    div > p{
        font-size: 20px;
        font-family: 'Bebas Neue', cursive;  
        top: 10px;
        margin-top: 10px;
    }


`

const rafflePageStyles = {Main, Raffles, NumberRaffles}

export default rafflePageStyles