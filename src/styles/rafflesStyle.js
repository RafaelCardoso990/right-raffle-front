import styled from "styled-components"

const Raffles = styled.div`    
    width: 60vw;
    height: 200px;        
    background-color: white;
    margin-bottom: 10px;
    border-radius: 20px;
    box-shadow: 0px 0px 31px -6px #000000;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;    

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;  
        }

    h1{
        font-size: 30px;
        font-family: 'Bebas Neue', cursive;       
        text-decoration: none;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    .Link{
        text-decoration: none
    }

    .circular{
        width: 100px;
        height: 100px;
    } 
    
    img{
        width: 300px;
        border-radius: 5px;
        box-shadow: 0px 0px 31px -11px #000000;
        
        @media (max-width: 768px) {
            width: 150px;
        }
    }
`
const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    
`
const rafflesStyle = {Raffles, Main}

export default rafflesStyle