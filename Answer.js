import React from "react"

export default function Answer(props) {
    let color 
    
    if (props.isAnswer){
        color = "#94D7A2"
    } else if (props.isHeld & !props.isAnswer){
        color = "#F8BCBC"
    } else {
        color="transparent"
    }
    
    const uncheckedStyles = props.isHeld ? {
      backgroundColor: "#D6DBF5"  
    } : {
        backgroundColor: "transparent"
    }
    
    const checkedStyles = {
        backgroundColor: color,
        opacity: props.isAnswer ? "1" : "0.5"
    }
    
    return (
            <p 
            className="answer-choices"
            onClick={props.click}
            style={props.checked ? checkedStyles : uncheckedStyles}>
                {props.value}
            </p>
    )
}