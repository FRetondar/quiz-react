import "./Questions.css"
import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

const Questions = () =>{

    const [quizState, dispatch] = useContext(QuizContext)
    
    return (
        <h1>teste</h1>
    )

}

export default Questions