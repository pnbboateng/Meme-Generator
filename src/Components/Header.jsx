import trollface from "../assets/trollface.png"
import "../Components/Header.css"

export default function Header(){

    return(
        <header>
            <div className="header-container">
            <img src= {trollface} alt="Trollface" />
            <h2>Meme Generator</h2>
            </div>


        </header>
    )
}