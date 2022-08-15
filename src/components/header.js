import headerStyle from "../styles/headerStyle"
import imageLogo from "../assets/images/tickets.png"
import {Link} from "react-router-dom"
import { useEffect } from "react"


const {Headers, Logo, Img, MyRaffles} = headerStyle

function Header(){

    const data = JSON.parse(localStorage.getItem("data"))    

    return (
        <Headers>
            <div>
                <Logo>Rigth Raffle</Logo>
                <Img src={imageLogo}/>
            </div>
                <Link to={"/home"} className="link"><MyRaffles>Home</MyRaffles></Link>
                <Link to={`/user/${data.userId}`} className="link"><MyRaffles>My Raffles</MyRaffles></Link>
        </Headers>
    )
}

export default Header