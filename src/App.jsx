import './App.css'
import Welcome from './componentes/Welcome'
import { useContext, useEffect } from 'react'
import Questions from "./componentes/Questions"
import { QuizContext } from './context/quiz'
import GameOver from './componentes/GameOver'

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  useEffect( () => { 

    dispatch({type: "REORDER_QUESTION"})

  }, [])

  return (
    <div className="App">
      <h1>Quiz App React</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
