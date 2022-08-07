import React, { useState } from 'react';

import Confetti from 'react-confetti'
import { Header } from "../../main/header";
import './gamestart.css';

import { Link } from "react-router-dom";

export const ThirdGame = () =>{
    const questions = [
        
		{
			questionText: 'К каким графам (активов и пассивов) относятся: «покупка автомобиля в кредит / недвижимость, которую вы арендуете / акции / золотые часы»?',
			answerOptions: [
				{ answerText: 'пассив/актив/актив/пассив', isCorrect: true },
				{ answerText: 'пассив/пассив/актив/актив', isCorrect: false },
				{ answerText: 'пассив/актив/актив/актив', isCorrect: false },
                { answerText: 'пассив/актив/актив/пассив.', isCorrect: false },

			],
		},
        {
			questionText: 'Рассмотрим ситуацию: Вы выписали все расходы и доходы в графы активов и пассивов, урезали расходы, а ваш доход составляет 500.000 тг и решили начать откладывать 10% с данной суммы каждый месяц. Сколько денег вы накопите от откладывания ровно через год?',
			answerOptions: [
                { answerText: '500.000тг', isCorrect: false },
                { answerText: '550.000тг', isCorrect: false },
				{ answerText: '600.000тг', isCorrect: true },	
                { answerText: '450.000тг', isCorrect: false },	
			],
		},
        {
			questionText: 'Что следует сделать в первую очередь при составлении финансового плана?',
			answerOptions: [
                { answerText: 'Купить новую модель iPhone в кредит', isCorrect: false },
                { answerText: 'Испытать удачу в казино', isCorrect: false },
                { answerText: 'Удвоить расходы', isCorrect: false },
				{ answerText: 'Урезать расходы', isCorrect: true },		
			],
		},
        {
			questionText: 'Рассмотрим ситуацию: Жизнь Нурдаулета требует жить ему с финансовой грамотностью. Он составил статьи расходов, решил вложить деньги, но не имеет представления куда вкладывать их. Какой из ниже вариантов будет оптимальным выбором для него в данной ситуации?',
			answerOptions: [
                { answerText: 'проинвестировать в любой начинающий стартап', isCorrect: false },
                { answerText: 'копить и при этом начать читать книги по финансам чтобы узнать о них побольше.', isCorrect: true },		
                { answerText: 'копить и через год купить новую машину в кредит, покрыв часть расхода', isCorrect: false },
                { answerText: 'просто читать книги по финансам и продолжать тратить деньги.', isCorrect: false },
			],
		},
        {
			questionText: ' Правда ли, что нужно придерживаться строго изначального финансового плана, не корректируя его?',
			answerOptions: [
                { answerText: 'Да, так как изначальному плану нужно всегда придерживаться.', isCorrect: false },
                { answerText: 'Нет, так как это ограничивает использования разных методов и подходов для его осуществления.', isCorrect: true },		
			],
		},
		{
			questionText: ' Рассмотрим ситуацию: За ноябрь Риза потратила 150.000 тенге на еду, но за декабрь она замечает, что расход на питание составляет уже 200.000 тг. Какое из ниже вариантов будет оптимальным выбором для нее?',
			answerOptions: [
                
                { answerText: 'проанализировать статьи расходов', isCorrect: true },		
                { answerText: 'говорить себе что не будет теперь тратить на дорогие кафе, фастфуд и т.п.', isCorrect: false },
                { answerText: 'ничего не делать, т.к отказывать себе в еде это плохо', isCorrect: false },
                { answerText: 'сесть на диету, а во время питания переедать дорогой едой потому что она заслужила это.', isCorrect: false },
			],
		},

        {
			questionText: 'Рассмотрим ситуацию: Мирас и Ария уже год живут семейной жизнью и после накопления капитала от ежемесячного откладывания они решили обсудить что делать дальше. Ария недавно начала увлекаться готическим стилем и хочет купить декорации с дизайном готики. Однако Мирас предлагает начать вести бизнес в недвижимость. Чье предложение будет оптимальным в данной ситуации?',
			answerOptions: [
                
                { answerText: 'Мирас, потому что бизнес в недвижимость является активом и тем самым может принести прибыль.', isCorrect: true },		
                { answerText: 'Ария, потому что готический дизайн украсит их дом.', isCorrect: false },
               
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