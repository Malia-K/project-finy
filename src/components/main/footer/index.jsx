import logo from "./logo.png";
export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div>
            <a href = "/">
                <img className="logo2" src = {logo} alt = "logo" style = {{cursor: "pointer" }} type = "button" onClick={()=> window.location.reload()}></img>

            </a>
            </div>
            {/* <div className="headerText" style={{left: "1180px", top: "64px"}} type = "button" onClick={() => window.open("https://github.com/Malia-K")}> 
                GitHub
            </div>
            <div className="headerText" style={{left: "1315px", top: "64px"}} type = "button" onClick={() => window.open("https://www.linkedin.com/in/alima-kusmanova-a92450237/" )}> 
                LinkedIn
            </div> */}
        </footer>
    );
};