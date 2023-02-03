import './App.css'
import Welcome from './componentes/Welcome'
import { useContext } from 'react'
import Questions from "./componentes/Questions"
import { QuizContext } from './context/quiz'

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="App">
      <h1>Quiz App React</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
    </div>
  )
}

export default App
