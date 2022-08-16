import styled from "styled-components"


const Main = styled.main`     
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-family: 'Amatic SC', cursive;
        font-size: 80px;
    }

    @media (max-width: 1000px) {       
        
        p{
            font-size: 30px;  
                     
        }   
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

    @media (max-width: 1000px) {
        width: 60vw;
        
        h1{
            font-size: 30px;  
            margin-top: 100px;          
        }   
    }


    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 600px;

        .button{
            margin-top: 20px;
        }
        
        @media (max-width: 1000px) {
        width: 300px;
        }
    }

    div > .button{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 600px;

        .button{
            margin-top: 20px;
            
        }
        
        @media (max-width: 1000px) {
        width: 30vw;
        }
    }

    div > .standard-basic{   
        
        @media (max-width: 1000px) {
            width: 40vw;
            margin-top: 100px;
            
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
        width: 10vw;
        height: 15vh;
        display: flex;       
        overflow-y: auto;
        
        align-items: center;
        flex-direction: column;

        @media (max-width: 1000px) {
            margin-top: 90px;
            height: 10vh;
            
        }
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