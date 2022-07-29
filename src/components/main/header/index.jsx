import logo from "./logo.png";


export const Header = () => {
    return (
        <header className="header">
            <div>
                <a href = "/">
                    
                    <img className="logo" src = {logo} alt = "logo"></img>  
                    
                </a>  
            </div>
            <div className="headerText" style={{left: "1180px",}}> 
                <a href = "/#games">Игры </a>         
            </div>
            <div className="headerText" style={{left: "1315px", }}> 
                <a href = "/#footer" >Дополнительно </a>     
            </div>
        </header>
    );
};