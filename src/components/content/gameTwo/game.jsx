import React, { useState } from 'react';

import Confetti from 'react-confetti'
import { Header } from "../../main/header";
import './gamestart.css';

import { Link } from "react-router-dom";

export const SecondGame = () =>{
    const questions = [
        
		{
			questionText: 'Представьте, что в предстоящие 5 лет цены на товары, которые вы покупаете, увеличатся вдвое. Если ваш доход не увеличится, вы сможете купить:',
			answerOptions: [
				{ answerText: 'Меньше', isCorrect: true },
				{ answerText: 'Больше', isCorrect: false },
				{ answerText: 'Столько же товаров (услуг) как и сегодня', isCorrect: false },
				
			],
		},
        {
			questionText: 'Как называется процесс подорожания шашлыков которые стояли 250тг в 2015г, и 900тг в 2022?',
			answerOptions: [
                { answerText: 'Ужас', isCorrect: false },
                { answerText: 'Девальвация', isCorrect: false },
				{ answerText: 'Инфляция', isCorrect: true },		
			],
		},
        {
			questionText: 'Какие виды денег существуют в мире?',
			answerOptions: [
                { answerText: 'Наличные деньги', isCorrect: false },
                { answerText: 'Безналичные деньги', isCorrect: false },
                { answerText: 'Криптовалюта', isCorrect: false },
				{ answerText: 'Все выше перечисленное', isCorrect: true },		
			],
		},
        {
			questionText: 'Рассчитай, сколько необходимо ежемесячно откладывать на покупку, если в твоем распоряжении 12 месяцев, текущая стоимость будущей покупки 270.000 тенге, а инфляция за год составит 10%.',
			answerOptions: [
                { answerText: '25000', isCorrect: false },
                { answerText: '24750', isCorrect: true },		
                { answerText: '21500', isCorrect: false },
                { answerText: '23250', isCorrect: false },
			],
		},
        {
			questionText: 'Криптовалюта - это?',
			answerOptions: [
                { answerText: 'Электронная валюта, которая может хранится у нас в банковских картах', isCorrect: false },
                { answerText: 'Цифровая виртуальная валюта, представляющая собой зашифрованную информацию, защищенную от копирования.', isCorrect: true },		
                { answerText: 'Вид денег которую исполльзуют для оплаты услуг и товаров', isCorrect: false },

			],
		},
		
		
	];
    
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    return(
        <>
        <Header />
            <div className='background'>
                <div className='slide'>
                    <div className='app'>
                        {showScore ? (
                            <div className='score-section'>
                                <p style={{}}>Отличная работа!</p>
                                <Confetti
                                width={"1180px"}
                                height={"730px"}
                                numberOfPieces = "130"
                                initialVelocityY={5}
                                />
                                
                                <p>Вы ответили на  {score} из {questions.length} </p>
                                <Link to = "/">
                                        <div className='homeButton'  type = "button" >
                                            На главную страницу
                                        </div>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className='question-section'>
                                    <div className='question-count'>
                                        <span>Вопрос {currentQuestion + 1}</span>/{questions.length}
                                    </div>
                                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                                </div>

                                <div className='answer-section'>
                                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                                        <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}