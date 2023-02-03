import "./Options.css"
import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

const Options = ({option, selectedOption, answer}) => {

    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div 
        className={`option 
        ${quizState.answerSelected && option === answer ? "correct" : ""}
        ${quizState.answerSelected && option !== answer ? "wronf" : ""}`}
         onClick={() => selectedOption()}>
            <p>{option}</p>
        </div>
    )

}

export default Options