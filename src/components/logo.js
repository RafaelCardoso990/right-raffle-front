import imageLogo from "../assets/images/tickets.png"
import logoStyles from "../styles/logoStyle"

const {Tittle, Img, Headers} = logoStyles

function Logo(){
    return (
        <Headers>
            <Tittle>Right Raffle</Tittle>
            <Img src={imageLogo}/>
        </Headers>
    )
}


export default Logo