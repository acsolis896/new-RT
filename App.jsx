import React from "react"
import Questions from "./Questions"
import {nanoid} from "nanoid"
import {decode} from "html-entities"

export default function App() {
    
    const [start, setStart] = React.useState(false)
    const [triviaArray, setTriviaArray] = React.useState([])
    const [checked, setChecked] = React.useState(false)
    const [score, setScore] = React.useState(0)
    
    function startQuiz(){
        setStart(true)
    }
    
    React.useEffect(function(){
        fetch("https://opentdb.com/api.php?amount=5&category=11")
            .then(res => res.json())
            .then(data => {

                setTriviaArray(getQuestions(data.results))
            })
    }, [start])
    
    function getQuestions(array){
        const newArray = []
        array.map((item, index) => {
            newArray.push( {
                id: nanoid(),
                question: decode(item.question, {level: "html5"}),
                correctAnswer: decode(item.correct_answer, {level: "html5"}),
                allAnswers: getAnswers(array, index),
            })
        })
        return newArray
    }
    
    // "array" parameter will be data.results from API fetch
    function getAnswers(array, index){ 
        const newArray = array[index].incorrect_answers
        newArray.push(array[index].correct_answer)
        
        
        const encodedArray = newArray.map(item => decode(item, {level: "html5"}))
        
        const shuffledArray = encodedArray.map(item => ({
                value: item,
                id: nanoid(),
                isHeld: false,
                isAnswer: item === array[index].correct_answer ? true : false 
        }))
        
        shuffleArray(shuffledArray)
        
        return shuffledArray
        
    }
    
    function shuffleArray(array) {
  // Sort the array using a random comparison function
     array.sort(() => Math.random() - 0.5);
    }
    
    function selectedAnswer(questionId, answerId){
        setTriviaArray(prevTrivia => (
            prevTrivia.map(item => {
                return item.id === questionId ? {
                    ...item,
                    allAnswers: item.allAnswers.map(answer => {
                        return answer.id === answerId ? {
                            ...answer,
                            isHeld: !answer.isHeld 
                        }
                        : answer
                    })
                } : item
            })
        ))

    }

    
    const questionElements = triviaArray.map(trivia => {
        return <Questions 
                question= {trivia.question}
                correctAnswer={trivia.correctAnswer}
                allAnswers={trivia.allAnswers}
                key={trivia.id}
                questionId={trivia.id}
                selected={selectedAnswer}
                checked={checked}
                />
        })
        
        
        function checkAnswers() {
            setChecked(true)
            
            const scoreArray = triviaArray.map(trivia => (
                trivia.allAnswers.filter(answer => {
                    return answer.isHeld && answer.isAnswer
                })
            )) 
            
            const filtered = scoreArray.filter(el => {
                return el != ""
            })
            
            setScore(prevScore => prevScore += filtered.length)
        }
        
        function resetGame() {
            setChecked(false)
            setStart(false)
            setTriviaArray([])
            setScore(0)
        }
    
    return (
        <main>
            {!start ? 
            <div className="start-container">
                <h1 className="web-title">Quizzical</h1>
                <p>Test Your Film Knowledge</p>
                <button onClick={startQuiz} className="button">Start Quiz</button>
            </div> 
            :
            <div>
                {questionElements}
                <div className="btn-container">
                {checked && <p>You scored {score}/5 correct answers</p>}
                    <button className="button" onClick={!checked ? checkAnswers : resetGame}>
                        {!checked ? "Check Answers" : "Play Again"}
                    </button>
                </div>
            </div>
            }

        </main>
    )
}