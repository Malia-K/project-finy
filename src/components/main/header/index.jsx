import logo from "./logo.png";


export const Header = () => {
    return (
        <header className="header">
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
            {/* style={{left: "1180px",}}  style={{left: "1315px", }}*/ }
        </header>
    );
};