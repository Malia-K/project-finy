import React, { useState } from 'react';

import Confetti from 'react-confetti'
import { Header } from "../../main/header";
import './gamestart.css';

import { Link } from "react-router-dom";

export const FirstGame = () =>{
    const questions = [
        {
			questionText: 'Финансовая грамотность — это?',
			answerOptions: [
				{ answerText: 'Сочетание знаний и навыков в сфере денежных потоков', isCorrect: false },
				{ answerText: 'Правила грамотного использования денег', isCorrect: false },
				{ answerText: 'Понимание как работают деньги', isCorrect: false },
				{ answerText: 'Все выше перечисленное', isCorrect: true },
			],
		},
		{
			questionText: 'Самая важная составляющая финансово грамотного человека:',
			answerOptions: [
				{ answerText: 'Большая зарплата', isCorrect: false },
				{ answerText: 'Упорство', isCorrect: false },
				{ answerText: 'Дисциплина', isCorrect: true },
				{ answerText: 'Расточительство', isCorrect: false },
			],
		},
		
		
		{
			questionText: 'Рассчитай, какую сумму может откладывать семья  ежемесячно, если их совокупный доход составляет 250.000 тг. Расходы на самое необходимое — 100.000 тг. Отец тратит на машину, спорт, одежду и обувь ежемесячно 45.000 тг., а его жена  тратит на косметику, спорт, одежду, обувь, театр и др. — 59.000 тг. На их сына , который ходит в детский сад, уходит 25.000 тг.',
			answerOptions: [
				{ answerText: '12.000 тг', isCorrect: false },
				{ answerText: '45.000 тг', isCorrect: false },
				{ answerText: '38.000 тг', isCorrect: false },
				{ answerText: '21.000 тг', isCorrect: true },
			],
		},
        {
			questionText: 'Чтобы бы быть богатым нужно работать на износ и иметь несколько работ на полную ставку',
			answerOptions: [
				{ answerText: 'Правда', isCorrect: false },
				{ answerText: 'Ложь', isCorrect: true },
			],
		},
        {
			questionText: 'Без чего невозможно грамонтное управление деньгами?',
			answerOptions: [
				{ answerText: 'Больших трат превышающие доход', isCorrect: false },
				{ answerText: 'Брать в долг или кредит', isCorrect: false },
				{ answerText: 'Банк, страховая или брокерская организация', isCorrect: true },
				{ answerText: 'Без большой зарплаты ', isCorrect: false },
			],
		},
        {
			questionText: 'Представьте, что вы получили 500.000 тг. На что вы их потратите? (У вас нет долгов, кредитов, расрочек и других платежей)',
			answerOptions: [
				{ answerText: 'Часть процента сберегу как "подушку" на черный день', isCorrect: true },
				{ answerText: 'Куплю вещь за 400к которую давно хотел(-а) приобрести', isCorrect: false },
				{ answerText: 'Потрачу за полгода, и не буду вливать в накопления', isCorrect: false },
			],
		},
        {
			questionText: 'Так ли необходим пассивный заработок с биржи?',
			answerOptions: [
				{ answerText: 'Нет, ни в коим случае', isCorrect: false },
				{ answerText: 'Нет, если не имеете достаточных знаний в этой области', isCorrect: true  },
                { answerText: 'Да, и сделать его активным источником дохода', isCorrect: false },
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