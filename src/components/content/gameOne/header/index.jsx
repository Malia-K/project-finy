import logo from "./logo.png";
import '../game1.css';

export const Header1 = () => {
    return (
        <header className="header_game">
            <div className="logoSide">
                <a href = "/">
                    <img className="logo" src = {logo} alt = "logo"></img>  
                </a>  
            </div>
            <div className="textSide">
                <div className="headerText" > 
                    <a href = "/#games" >Игры </a>         
                </div>
                <div className="headerText" > 
                    <a href = "/#footer" >Дополнительно </a>     
                </div>
            </div>
        </header>
    );
};