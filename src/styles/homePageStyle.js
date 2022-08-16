import styled from "styled-components"

const Main = styled.main`
    .header{
        position: fixed;
    }

    @media (max-width: 1000px) {       
        
        h1, p{
            font-size: 30px;  
                     
        }   
    }
`
const homePageStyle = {Main}

export default homePageStyle