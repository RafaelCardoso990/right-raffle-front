import styled from "styled-components"

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Div = styled.div` 
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

    p{
        display: flex;
        justify-content: center;
        overflow-x: auto;
        flex-direction: column;
        color: green;
        width: 200px;
        height: 100px;
        word-wrap: wrap;
        font-family: 'Amatic SC', cursive;
        font-size: 60px;           
    }

    h1{
        font-family: 'Amatic SC', cursive;
        font-size: 60px;   
    }
    
`
const userPageStyles = {Section, Div}

export default userPageStyles