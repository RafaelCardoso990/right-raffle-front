import styled from "styled-components"

const Body = styled.body`
    width: 100vw;
    height: 100vh;

    background: -webkit-linear-gradient(left, #ffffff, #2ad2a7);
    background: -moz-linear-gradient(left, #ffffff, #2ad2a7);
    background: -ms-linear-gradient(left, #ffffff, #2ad2a7);
    background: -o-linear-gradient(left, #ffffff, #2ad2a7);
    background: linear-gradient(to right, #ffffff, #2ad2a7);

    display: flex;
    justify-content: center;
    align-items: center;
`

const Main = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 300px;
      

    .custom-shape-divider-bottom-1660067224 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

    .custom-shape-divider-bottom-1660067224 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 316px;
    }

    .custom-shape-divider-bottom-1660067224 .shape-fill {
        fill: #FFFFFF;
    }

    p{
        font-size: 15px;
        color: #3D76D2;
    }

    Logo{
        align-self: center;
    }
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    
    .loadingButton{
        margin-top: 20px;
        margin-bottom:20px;
    }
    
    @media (max-width: 768px) {
        width: 300px;
    }
`


const signInStyles = {Main, Div, Body}

export default signInStyles