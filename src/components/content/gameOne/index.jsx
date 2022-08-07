import './game1.css';

import { Header } from "../../main/header";
import 'bootstrap/dist/css/bootstrap-grid.min.css';


import React from 'react';
import {Carousel} from "react-bootstrap";
import { ReactComponent as Slide1 } from './photos/slide1.svg';
import { ReactComponent as Slide2 } from './photos/slide2.svg';
import { Link } from "react-router-dom";



export const Game1 = ()=>{
    return (
        <>
            <Header />
            <div className='background'>
                <div >
                    <Carousel fade interval={null}>
                        <Carousel.Item>
                            <Slide1 />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Slide2 />  
                        </Carousel.Item>
                        <Carousel.Item> 
                           <div className='fon13'></div>
                         </Carousel.Item>
                        <Carousel.Item>
                             <div className='fon14'>
                                <div className='slider'>
                                    <h1>Нужно ли</h1>
                                    <div className='h7'>Работать больше, чтобы стать богаче?</div>
                                    <a href = "#nav" className='gameButton'>
                                            <div className='h8'>Проверить</div>
                                    </a>
                                    <div className='sliding' id = "nav">
                                        <h4>Нет смысла становиться богатым и работать на износ. 
                                            Финансово грамотный человек по мере наращивания капитала работает меньше и при этом успевает больше. 
                                            Например, когда вы добьетесь того, чтобы стать инвестором, вы можете работать меньше. За вас будут работать деньги. 
                                            Конечно, в этом случае никто не запрещает вам заниматься любимым делом и продолжать работать,
                                            но теперь вы будете сами решать, сколько и куда будут уходить деньги.
                                        </h4>
                                    </div>

                                </div>
                                <div>
                                    <Link to = "/game1start">
                                        <div className='gameStartButton'  type = "button" >
                                            <h6 >НАЧАТЬ</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
        
    );
};