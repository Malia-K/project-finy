import * as React from 'react';
import game1 from "../../content/gameIcons/game1.png";
import game2 from "../../content/gameIcons/game2.png";
import game3 from "../../content/gameIcons/game3.png";
import game4 from "../../content/gameIcons/game4.png";
import { Link } from "react-router-dom";
import '../../../App.css';

export const Games = () => {
    return (
       <div className="games" id='games'> 
            <div className="game">
                <h3>Введение</h3>
                <h5>Вводный урок по финансам и о грамотном распоряжении средств</h5>
                <img className='gameIcon' src={game1} alt = "game1"></img>
                <Link to = "/game1">
                    <div className='startButton'  type = "button" >
                        <h2 >НАЧАТЬ</h2>
                    </div>
                </Link>
               
            </div>

            <div className="game">
                <h3>Суть денег</h3>
                <h5>Урок для понимания сущности денег и их свойств. Что такое инфляция и как научится обращаться с деньгами?</h5>
                <img className='gameIcon' src={game2} alt = "game1"></img>
                <Link to = "/game2">
                    <div className='startButton' >
                        <h2 >НАЧАТЬ</h2>
                    </div>
                </Link>
                
            </div>

            <div className="game">
                <h3>Планирование и учет</h3>
                <h5 >Как планировать свой бюджет, и не тратить столько, сколько вы зарабатываете</h5>
                <img className='gameIcon' src={game3} alt = "game1"></img>
                <Link to = "/game3">
                    <div className='startButton' >
                        <h2 >НАЧАТЬ</h2>
                    </div>
                </Link>
            </div>
            
            <div className="game">
                <h3>Финансовое мышление</h3>
                <h5>Как твердо стоять на ногах в финансовом плане и принимать разумные решения</h5>
                <img className='gameIcon' src={game4} alt = "game1"></img>
                <Link to = "/game4">
                    <div className='startButton'>
                        <h2 >НАЧАТЬ</h2>
                    </div>
                </Link>
            </div>
       </div>       
    );
};