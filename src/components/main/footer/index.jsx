import logo from "./logo.png";
export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="logoSide">
            <a href = "/">
                <img className="logo2" src = {logo} alt = "logo" style = {{cursor: "pointer" }} type = "button" onClick={()=> window.location.reload()}></img>

            </a>
            </div>
            <div className="textSide">
            <div className="headerText" type = "button" onClick={() => window.open("https://github.com/Malia-K")}> 
                GitHub
            </div>
            <div className="headerText" type = "button" onClick={() => window.open("https://www.linkedin.com/in/alima-kusmanova-a92450237/" )}> 
                LinkedIn
            </div>
            </div>
            
        </footer>
    );
};