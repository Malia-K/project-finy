import './game2.css';

import { Header } from "../../main/header";
import 'bootstrap/dist/css/bootstrap-grid.min.css';


import React from 'react';
import {Carousel} from "react-bootstrap";
import { ReactComponent as Slide1 } from './photos/slide1.svg';
import { ReactComponent as Slide2 } from './photos/slide2.svg';
// import slide3 from './photos/slide3.png';
import { Link } from "react-router-dom";



export const Game2 = ()=>{
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
                            <div className='fon3'></div>
                        </Carousel.Item>
                        <Carousel.Item>
                             <div className='fon4'>
                                <div className='slider'>
                                    <h1>Подумайте</h1>
                                    <div className='h7'>Каковы основные недостатки электронных денег?</div>
                                    <a href = "#nav" className='gameButton'>
                                            <div className='h8'>Проверить</div>
                                    </a>
                                    <div className='sliding' id = "nav">
                                        <h4>Недостатком электронных денег является то, что почти все денежные операции можно отследить,
                                            к тому же известны многие случаи хищения. Бытует шутка, претендующая на правду: если раньше,
                                            чтобы украсть деньги, нужно было десять вооруженных людей, то сейчас достаточно одного 
                                            ботаника с ноутбуком.
                                        </h4>
                                    </div>

                                </div>
                                <div>
                                    <Link to = "/game2start">
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