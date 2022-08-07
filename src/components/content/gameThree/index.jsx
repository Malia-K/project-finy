import './game3.css';

import { Header } from "../../main/header";
import 'bootstrap/dist/css/bootstrap-grid.min.css';


import React from 'react';
import {Carousel} from "react-bootstrap";
import { ReactComponent as Slide1 } from './photos/slide1.svg';
import { ReactComponent as Slide2 } from './photos/slide2.svg';

import { Link } from "react-router-dom";



export const Game3 = ()=>{
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
                            <div className='fon33'></div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='fon34'></div>
                        </Carousel.Item>
                        <Carousel.Item>
                             <div className='fon5'>
                                <div>
                                    <Link to = "/game3start">
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