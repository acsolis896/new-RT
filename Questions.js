import React from "react"
import Answer from "./Answer"

export default function Questions(props){
    
    const answerElements = props.allAnswers.map(item => {
        return <Answer 
            value={item.value}
            key={item.id}
            click={() => props.selected(props.questionId,item.id)}
            isHeld={item.isHeld}
            checked={props.checked}
            isAnswer={item.isAnswer}
        />
    })
    
    return (
        <section>
            <h2 className="question-title">{props.question}</h2>
            <div className="answer-container">
                {answerElements}
            </div>
            <hr/>
        </section>
    )
}