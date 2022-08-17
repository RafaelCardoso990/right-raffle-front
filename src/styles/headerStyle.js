import styled from "styled-components"

const Headers = styled.header`
    display: flex;
    width: 100vw;
    height: 90px; 
    background-color:#2ad2a7;
    display: flex;
    justify-content: space-around ;
    align-items: center;
    box-shadow: 0px 4px 19px -3px #000000;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;        
    }   

    .link, .link2{
        text-decoration: none;
    }
    
`
const Logo = styled.p`
    font-size: 50px;     
    font-family: 'Amatic SC', cursive;
    margin-left: 50px;
`
const Img = styled.img`
    width: 30px;   
`

const MyRaffles = styled.p`    
    font-size: 30px;     
    font-family: 'Amatic SC', cursive; 
    margin-right: 50px;          
`


const headerStyle = {Headers, Logo, Img, MyRaffles}

export default headerStyle