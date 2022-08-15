import Raffle from "../components/raffle"
import Header from "../components/header"
import homePageStyle from "../styles/homePageStyle"

const {Main} = homePageStyle

function Home(){    

    return(
        <Main>
            <Header className="header"/>
            <Raffle/>
        </Main>
    )
}

export default Home